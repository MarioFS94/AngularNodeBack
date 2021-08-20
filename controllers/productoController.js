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

exports.getProducts = async (req, res) => {
    try {

        const products = await Producto.find();
        res.json(products);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.getProduct = async (req, res) => {
    try {

        const product = await Producto.findById(req.params.id);

        if (!product) {
            res.status(404).json('No existe el producto');
        }

        res.json(product);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.putProduct = async (req, res) => {
    try {
        
        //Extraer valores que el user va a enviar, utilizando Destructuring 
        const { name, category, localization, price } = req.body;
        
        //get id
        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            res.status(404).json('No existe el producto');
        }

        producto.name = name;
        producto.category = category;
        producto.localization = localization;
        producto.price = price;

        producto = await Producto.findOneAndUpdate(
            {_id: req.params.id},
            producto, //producto actualizado
            {new: true}
        );
        res.json(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.deleteProduct = async (req, res) => {
    try {

        const product = await Producto.findById(req.params.id);

        if (!product) {
            res.status(404).json('No existe el producto');
        }

        await Producto.findOneAndRemove({_id: req.params.id});
        
        res.json({msg: 'Producto eliminado correctamente'});
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}