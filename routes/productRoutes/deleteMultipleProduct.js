const express = require('express');
const authMiddleware = require('../../middleware/authMiddleware');
const Product = require('../../models/product');
const router = express.Router();

module.exports = router.delete('/api/delete-multiple-products', authMiddleware, async (req, res) =>{
    const { ids } = req.body;

    await Product.deleteMany({_id: { $in: ids}})
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
    .catch(err=>{
        res.status(200).json({
            message:'somthing went wrong!',
            status: false
        });
    });
});