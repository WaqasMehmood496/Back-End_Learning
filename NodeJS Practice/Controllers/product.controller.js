const product = require('../Module/product.model');

const getProducts = async (req,res) => {
    try {
        const products = await product.find({});
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const addNewProduct = async (req,res) => {
    try {
        const createProduct = await product.create(req.body)
        res.status(200).json(createProduct)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getProducts,
    addNewProduct
}