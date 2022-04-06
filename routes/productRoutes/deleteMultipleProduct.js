const express = require('express');
const Product = require('../../models/product');
const router = express.Router();

module.exports = router.delete('/api/delete-multiple-products', async (req, res) =>{
    const { ids } = req.body;
    console.log({ ids, params: req.params });

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
});