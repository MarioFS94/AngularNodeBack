const mongoose = require('mongoose');
//accedemos a la variable de entorno
require('dotenv').config({ path: 'variables.env' });

const conectarDB = async () => {

    try {
        await mongoose.connect(
            process.env.MONGO_DB,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false
            }
        );
        console.log('BD Conectada');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }

}

//exportamos la funcion por que asi es visible desde otros
module.exports =  conectarDB