const express = require('express');
const authMiddleware = require('../../middleware/authMiddleware');
const Product = require('../../models/product');
const router = express.Router();

module.exports = router.get('/api/get-all-products',authMiddleware, async (req, res) =>{

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
    .catch(err=>{
        res.status(200).json({
            message:'somthing went wrong!',
            status: false
        });
    });
});