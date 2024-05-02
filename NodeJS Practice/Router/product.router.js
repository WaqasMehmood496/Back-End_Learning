const express = require('express')
const route = express.Router();
const { getProducts, addNewProduct } = require('../Controllers/product.controller');


route.get('/', getProducts)
route.post('/', addNewProduct)


module.exports = route