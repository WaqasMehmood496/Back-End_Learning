const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./Router/product.router');
// const product = require("./Module/product.model")

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/api/products', productRoute)


mongoose.connect("mongodb+srv://malikwaqas100mw:X8xcxYNDgcmxadga@backenddb.rsdbqpt.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=BackendDB").then(() => {
    console.log("Connected to Mongo Database");
    app.listen(3000, () => {
        console.log("Server runing on 3000 port")
    })
})

