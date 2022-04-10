const express = require('express');
const Product = require('../../models/product');
const router = express.Router();

module.exports = router.post('/api/add-product', async (req, res) =>{
    const { name, status, price, available_from, category_id } = req.body;
    console.log({available_from});

    await Product.create({name,status,price,available_since: available_from,category_id})
    .then(async (data)=>{
        if(data){
            res.status(200).json({
                message: 'Product added successfuly',
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
    .catch(err=>{
        res.status(200).json({
            message:'somthing went wrong!',
            status: false
        });
    });
});