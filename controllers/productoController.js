const Producto = require("../models/Producto");

exports.crearProduct = async (req, res) => {
    try {
        let product;

        product = new Producto(req.body);

        await product.save();

        //una vez que esta guardado devolvemos el producto al usuario
        res.send(product);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}