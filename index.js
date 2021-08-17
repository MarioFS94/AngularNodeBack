const express = require('express');

//creamos el servidor
const app = express();

//definimos ruta principal
app.get('/', (request, response) => {
    response.send('Hola mundo');
});

app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente');
});