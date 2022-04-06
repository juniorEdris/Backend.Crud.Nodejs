const express = require('express');
const Product = require('../../models/product');
const router = express.Router();

module.exports = router.get('/api/get-single-product/:_id', async (req, res) =>{
    const { _id } = req.params;

    await Product.findById({_id})
    .then(async (data)=>{
        if(data){
            res.status(200).json({
                message: 'successful',
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