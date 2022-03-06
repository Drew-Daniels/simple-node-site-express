// module imports
const url = require('url');
const http = require('http');
const fs = require('fs');
const { pipeline } = require('stream');

const port = 8080;

function requestHandler(req, res) {
  const requestedURL = req.url;
  res.setHeader('Content-Type', 'text/html');
  // res.end('<h1>Success!</h1>')
  let rsFName;
  switch(requestedURL) {
    case '/':
      res.writeHead(200);
      // res.end(indexContents);
      // res.redirect('./index.html');
      rsFName = 'index.html';
      break;
    case '/about.html':
      res.writeHead(200);
      // res.end(aboutContents);
      // res.redirect('./about.html');
      rsFName = 'about.html';
      break;
    case '/contact-me.html':
      res.writeHead(200);
      // res.end(contactMeContents);
      // res.redirect('./contact-me.html');
      rsFName = 'contact-me.html';
      break;
    default:
      res.writeHead(404);
      // res.end(notFoundContents);
      // res.redirect('./404.html');
      rsFName = '404.html';
  };
  const rs = fs.createReadStream(rsFName);
  pipeline(rs, res, () => {});
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})