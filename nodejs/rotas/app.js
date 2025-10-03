import http from 'http';

const PORT = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');

    if (url === '/') { 
        res.statusCode = 200;
        res.end('<h1>Home Page</h1>');
    } else if (url === '/sobre' && method === 'GET') {
        res.statusCode = 200;
        res.end('<h1>Sobre Nós</h1><p>Esta é uma aplicação de exemplo com Node.js</p>');
        
    } else if (url === '/contato' && method === 'GET') {
        res.statusCode = 200;
        res.end('<h1>Fale conosco</h1>');
    } else {
        res.statusCode = 404;
        res.end('<h1>Página Não Encontrada</h1>');
    }
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});