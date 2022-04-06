const express = require('express');
const Product = require('../../models/product');
const router = express.Router();

module.exports = router.post('/api/delete-single-product/:_id', async (req, res) =>{
    const { _id } = req.params;

    await Product.deleteOne({_id})
    .then(async (data)=>{
        if(data){
            res.status(200).json({
                message: 'successfully deleted',
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