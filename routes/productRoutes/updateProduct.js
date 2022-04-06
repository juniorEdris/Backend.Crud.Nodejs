const express = require('express');
const Product = require('../../models/product');
const router = express.Router();

module.exports = router.post('/api/update-single-product/:_id', async (req, res) =>{
    const { _id } = req.params;
    const { name,status,price,available_from,category_id } = req.body;

    await Product.updateOne({_id}, { name,status,price,available_from,category_id })
    .then(async (data)=>{
        if(data){
            res.status(200).json({
                message: 'successfully updated',
                status:true,
                data
            })
        }else{
            res.status(200).json({
                message:'somthing went wrong!',
                status: false
            })
        }
    })
});