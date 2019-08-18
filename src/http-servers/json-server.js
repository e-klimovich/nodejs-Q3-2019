import http from 'http';

const PORT = 8080;

const product = {
  id: 1,
  name: 'Supreme T-Shirt',
  brand: 'Supreme',
  price: 99.99,
  options: [
    {
      color: 'blue'
    },
    {
      size: 'XL'
    },
  ],
};

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    switch (req.url) {
      case '/':
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(product));
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
