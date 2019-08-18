import http from 'http';

const PORT = 8080;

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    switch (req.url) {
      case '/':
        req.on('data', (data) => {
          process.stdout.write(JSON.stringify(data))
        })
        res.writeHead(200, { 'Access-Control-Allow-Origin': '*' });
        res.end();
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
