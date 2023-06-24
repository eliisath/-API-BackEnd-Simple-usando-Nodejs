const http = require('http');


const hostname = '127.0.0.1'; //es lo mismo que localhost
const port = 3000;


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end('{ "mensaje": "Hola Mundo, soy Elisa y esta es mi prueba de una API con Postman.!!"}');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});