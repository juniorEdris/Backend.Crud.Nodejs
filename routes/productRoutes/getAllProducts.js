const express = require('express');
const Product = require('../../models/product');
const router = express.Router();

module.exports = router.get('/api/get-all-products', async (req, res) =>{

    await Product.find()
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