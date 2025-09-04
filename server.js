const http = require('http');
const fs = require('fs');
const path = require('path');

const mime = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain'
};

const port = process.env.PORT || 3000;
const baseDir = process.cwd();

const server = http.createServer((req, res) => {
  try {
    const reqPath = decodeURIComponent(req.url.split('?')[0]);
    let filePath = path.join(baseDir, reqPath);

    fs.stat(filePath, (err, stats) => {
      if (err) {
        // Fallback to index.html
        const index = path.join(baseDir, 'index.html');
        fs.readFile(index, (err2, data) => {
          if (err2) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Server error: index.html not found');
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
          }
        });
        return;
      }

      if (stats.isDirectory()) {
        filePath = path.join(filePath, 'index.html');
      }

      fs.readFile(filePath, (err3, data) => {
        if (err3) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('Not found');
          return;
        }

        const ext = path.extname(filePath).toLowerCase();
        const type = mime[ext] || 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': type });
        res.end(data);
      });
    });
  } catch (e) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Server error');
  }
});

server.listen(port, '0.0.0.0', () => console.log(`Server running at http://0.0.0.0:${port}/`));
