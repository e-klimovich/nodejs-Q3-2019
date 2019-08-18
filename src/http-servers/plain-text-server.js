import http from 'http';

const PORT = 8080;

const plainText = '<b><i>test</i></b>';

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    switch (req.url) {
      case '/':
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write(plainText);
        res.end()
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
