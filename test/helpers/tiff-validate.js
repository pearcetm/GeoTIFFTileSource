// test/tiff-validate.js
export function validateTIFFStructure(ab) {
  const u = new Uint8Array(ab);
  if (u.length < 16) throw new Error("Too small to be TIFF");

  const isII = u[0] === 0x49 && u[1] === 0x49;
  const isMM = u[0] === 0x4D && u[1] === 0x4D;
  if (!isII && !isMM) throw new Error("Missing TIFF byte order mark (II/MM)");

  const le = isII;
  const readU16 = (o) => le ? (u[o] | (u[o+1] << 8)) : ((u[o] << 8) | u[o+1]);
  const readU32 = (o) => le
    ? (u[o] | (u[o+1] << 8) | (u[o+2] << 16) | (u[o+3] << 24)) >>> 0
    : ((u[o] << 24) | (u[o+1] << 16) | (u[o+2] << 8) | u[o+3]) >>> 0;

  const magic = readU16(2);
  if (magic !== 42) throw new Error(`Bad TIFF magic: ${magic}`);

  const ifd0 = readU32(4);
  if (ifd0 >= u.length) throw new Error("IFD0 offset out of bounds");
  if (ifd0 % 2 !== 0) throw new Error("IFD0 offset must be 2-byte aligned");

  const n = readU16(ifd0);
  if (n > 128) throw new Error(`Suspiciously large IFD entry count: ${n}`);

  const entriesStart = ifd0 + 2;
  const entriesBytes = n * 12;
  const nextIfdPos = entriesStart + entriesBytes;
  if (nextIfdPos + 4 > u.length) throw new Error("IFD entries run out of bounds");

  // quick scan: each entry tag/type/count parseable
  for (let i = 0; i < n; i++) {
    const p = entriesStart + i * 12;
    const type = readU16(p + 2);
    if (type < 1 || type > 12) throw new Error(`Invalid TIFF field type: ${type}`);
    // count and value/offset exist; don't deeply validate here
    readU32(p + 4);
    readU32(p + 8);
  }
}