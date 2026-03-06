// test/polyfills/worker.js
import { Worker as NodeWorker } from "node:worker_threads";
import { fileURLToPath } from "node:url";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import crypto from "node:crypto";

function stripQueryHash(s) {
  const q = s.indexOf("?");
  const h = s.indexOf("#");
  const cut = q === -1 ? h : h === -1 ? q : Math.min(q, h);
  return cut === -1 ? s : s.slice(0, cut);
}

function decodeDataUrlToFile(dataUrl) {
  const m = /^data:([^,;]+)(;base64)?,(.*)$/i.exec(dataUrl);
  if (!m) throw Object.assign(new Error("Invalid data: URL"), { code: "ERR_BAD_DATA_URL" });

  const isBase64 = !!m[2];
  const payload = m[3] || "";
  const code = isBase64 ? Buffer.from(payload, "base64").toString("utf8") : decodeURIComponent(payload);

  const dir = path.join(os.tmpdir(), "vitest-worker-dataurl");
  fs.mkdirSync(dir, { recursive: true });

  const name = `w-${crypto.randomBytes(8).toString("hex")}.mjs`;
  const filename = path.join(dir, name);
  fs.writeFileSync(filename, code, "utf8");

  const looksModule = /\b(import|export)\b/.test(code);
  return { filename, looksModule };
}

function httpUrlToFilePath(u) {
  // Strip query/hash already done elsewhere; keep pathname only
  const cleanPath = stripQueryHash(u.pathname);

  // Vite sometimes serves:
  //  - /@fs/ABSOLUTE/PATH/file.js
  //  - /assets/<hash>.js
  //  - /public/assets/<hash>.js   (depending on base / config)
  if (cleanPath.startsWith("/@fs/")) {
    return decodeURIComponent(cleanPath.slice("/@fs/".length));
  }

  const rel = cleanPath.replace(/^\/+/, ""); // remove leading "/"
  const cwd = process.cwd();

  // 1) naive project-relative path
  let candidate = path.resolve(cwd, rel);
  if (fs.existsSync(candidate)) return candidate;

  // 2) if it looks like a Vite build asset, prefer dist/
  // /assets/... -> dist/assets/...
  if (cleanPath.startsWith("/assets/")) {
    candidate = path.resolve(cwd, "dist", rel);
    if (fs.existsSync(candidate)) return candidate;
  }

  // /public/assets/... -> dist/assets/...
  if (cleanPath.startsWith("/public/assets/")) {
    const rel2 = rel.replace(/^public[\\/]+/, ""); // drop "public/"
    candidate = path.resolve(cwd, "dist", rel2);
    if (fs.existsSync(candidate)) return candidate;
  }

  // 3) last resort: if path contains "assets/", try dist/assets/<basename>
  const base = path.basename(rel);
  const try1 = path.resolve(cwd, "dist", "assets", base);
  if (fs.existsSync(try1)) return try1;

  // Give a useful error with all attempted paths
  const err = new Error(
    `Cannot map http worker URL to a file.\n` +
    `URL: ${u.href}\n` +
    `Tried:\n` +
    ` - ${path.resolve(cwd, rel)}\n` +
    ` - ${path.resolve(cwd, "dist", rel)}\n` +
    ` - ${path.resolve(cwd, "dist", rel.replace(/^public[\\/]+/, ""))}\n` +
    ` - ${try1}\n`
  );
  err.code = "ERR_WORKER_PATH_MAP";
  throw err;
}

function normalizeWorkerSpecifier(spec) {
  // Returns { filename: string, forceModule?: boolean }
  if (spec instanceof URL) {
    if (spec.protocol === "file:") {
      const clean = new URL(spec.href);
      clean.search = "";
      clean.hash = "";
      return { filename: fileURLToPath(clean) };
    }
    if (spec.protocol === "data:") {
      const { filename, looksModule } = decodeDataUrlToFile(spec.href);
      return { filename, forceModule: looksModule };
    }
    if (spec.protocol === "http:" || spec.protocol === "https:") {
      return { filename: httpUrlToFilePath(spec) };
    }
    throw Object.assign(new Error(`Unsupported worker URL protocol: ${spec.protocol}`), {
      code: "ERR_WORKER_UNSUPPORTED_URL",
    });
  }

  if (typeof spec === "string") {
    if (spec.startsWith("data:")) {
      const { filename, looksModule } = decodeDataUrlToFile(spec);
      return { filename, forceModule: looksModule };
    }
    // Strip query/hash if present
    return { filename: stripQueryHash(spec) };
  }

  return { filename: spec };
}

globalThis.Worker = class Worker {
  constructor(url, options = {}) {
    const { filename, forceModule } = normalizeWorkerSpecifier(url);

    const type =
      forceModule ? "module" :
        (options.type === "module" ? "module" : undefined);

    this._worker = new NodeWorker(filename, { ...options, type });

    this.onmessage = null;
    this.onerror = null;

    this._worker.on("message", (data) => {
      if (this.onmessage) this.onmessage({ data });
    });

    this._worker.on("error", (err) => {
      if (this.onerror) this.onerror(err);
    });
  }

  postMessage(message, transfer) {
    if (transfer && Array.isArray(transfer)) this._worker.postMessage(message, transfer);
    else this._worker.postMessage(message);
  }

  terminate() {
    return this._worker.terminate();
  }
};