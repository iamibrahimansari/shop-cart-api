const express = require('express');
const router = express.Router();
const {CartProducts} = require('../model/Product');

router.post('/', async (req, res) =>{
    try{
        const cartProduct = new CartProducts(req.body);
        const response = await cartProduct.save();
        res.json(response);
    }catch(error){
        console.error(error);
    }
})

router.get('/', async (req, res) =>{
    try{
        const response = await CartProducts.find({});
        res.json(response);
    }catch(error){
        console.error(error);
    }
})

router.delete('/delete/:id', async (req, res) =>{
    const id = req.params.id;
    try{
        const response = await CartProducts.deleteOne({_id: id});
        res.json(response);
    }catch(error){
        console.error(error);
    }
})

module.exports = router;