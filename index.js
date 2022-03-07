// module imports
const http = require('http');
const fs = require('fs');
const express = require('express');
const { pipeline } = require('stream');

const app = express();
const router = express.Router();
const port = 8080;

router.get('/', (req, res) => {
  res.status(200);
  res.sendFile('./indexhtml');
});
router.get('/about', (req, res) => {
  res.status(200);
  res.sendFile('./about.html');
});
router.get('/contact-me', (req, res) => {
  res.status(200);
  res.sendFile('./contact-me.html');
});
router.get('*', (req, res) => {
  res.status(404);
  res.sendFile('./404.html');
});

app.use(router);
app.listen(port);
// function requestHandler(req, res) {
//   const requestedURL = req.url;
//   res.setHeader('Content-Type', 'text/html');
//   let rsFName;
//   switch(requestedURL) {
//     case '/':
//       res.writeHead(200);
//       rsFName = 'index.html';
//       break;
//     case '/about.html':
//       res.writeHead(200);
//       rsFName = 'about.html';
//       break;
//     case '/contact-me.html':
//       res.writeHead(200);
//       rsFName = 'contact-me.html';
//       break;
//     default:
//       res.writeHead(404);
//       rsFName = '404.html';
//   };
//   const rs = fs.createReadStream(rsFName);
//   pipeline(rs, res, () => {});
// };

// const server = http.createServer(requestHandler);

// server.listen(port, () => {
//   console.log(`Server running at port ${port}`)
// })