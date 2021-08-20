const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

//creamos el servidor
const app = express();

//conectamos a la BD
conectarDB();
//lo instalamos y es por que utilizamos diferente puerto en back y front
app.use(cors());
//habilitamos para que nos puedan enviar json
app.use(express.json());

//definimos ruta principal
app.use('/api/productos', require('./routes/productos'));
/*app.get('/', (request, response) => {
    response.send('Hola mundo');
});*/

app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente');
});