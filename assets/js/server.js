const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('./index.html', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Erro ao carregar o arquivo index.html');
        return;
      }

      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
  } else if (req.url === '/style.css') {
    fs.readFile('./style.css', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Erro ao carregar o arquivo style.css');
        return;
      }

      res.writeHead(200, {'Content-Type': 'text/css'});
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end('Arquivo não encontrado');
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});