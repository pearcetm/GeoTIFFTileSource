const http = require('http');
const { http: followHttp, https: followHttps } = require('follow-redirects');
const url = require('url');

const server = http.createServer((req, res) => {
  // 1. Extract and Parse URL
  const targetUrl = req.url.replace(/^\/proxy\//, '');
  if (!targetUrl.startsWith('http')) {
    res.writeHead(400);
    return res.end('Invalid Target URL');
  }

  const parsedUrl = new url.URL(targetUrl);
  console.log('Proxying request to:', targetUrl);

  // 2. CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // 3. Prepare Headers (CRITICAL STEP)
  const headers = { ...req.headers };
  delete headers.host; // REMOVE THIS: Let follow-redirects set the correct Host header
  headers["User-Agent"] = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36";
  headers["Referer"] = "https://downloads.openmicroscopy.org/";

  const client = parsedUrl.protocol === 'https:' ? followHttps : followHttp;

  const options = {
    method: req.method,
    headers: headers,
    rejectUnauthorized: false, // Useful for self-signed, but use with caution
  };

  // 4. Execute Request
  // follow-redirects handles the 301/302 logic automatically.
  const proxyRequest = client.request(targetUrl, options, (proxyResponse) => {
    // Forward the headers and status from the final destination
    res.writeHead(proxyResponse.statusCode, proxyResponse.headers);
    proxyResponse.pipe(res);
  });

  proxyRequest.on('error', (err) => {
    console.error('Proxy Error:', err.message);
    res.writeHead(500);
    res.end('Internal server error');
  });

  req.pipe(proxyRequest);
});

server.listen(6843, () => {
  console.log('Proxy server listening on port 6843');
});