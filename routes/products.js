const express = require('express');
const router = express.Router();
const {ProductModel} = require('../model/Product');

router.get('/', async (req, res) =>{
    try{
        const response = await ProductModel.find({});
        res.json(response);
    }catch(error){
        console.error(error);
    }
})

router.post('/', async (req, res) =>{
    try{
        const newProduct = new ProductModel(req.body);
        const response = await newProduct.save();
        res.json(response);
    }catch(error){
        console.error(error);
    }
})

router.get('/:id', async (req, res) =>{
    try{
        const response = await ProductModel.findOne({_id: req.params.id});
        res.json(response);
    }catch(error){
        console.error(error);
    }
})

module.exports = router;
