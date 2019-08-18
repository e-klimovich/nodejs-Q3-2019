import http from 'http';
import fs from 'fs';

const PORT = 8080;

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    switch (req.url) {
      case '/':
        fs.readFile('index.html', (err, data) => {
          if (err) {
            console.log(err)
          }
  
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write(data);
          res.end()
        })
        break;
  
      default:
        res.writeHead(404);
        res.end();
    }
  } else {
    res.writeHead(404);
    res.end();
  }
})

server.listen(PORT, (err) => {
  if (err) {
    return console.log(err)
  }

  console.log(`Server is listening on ${PORT}`)
})
