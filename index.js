const express = require('express');
const conectarDB = require('./config/db');

//creamos el servidor
const app = express();

//conectamos a la BD
conectarDB();

//definimos ruta principal
app.get('/', (request, response) => {
    response.send('Hola mundo');
});

app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente');
});