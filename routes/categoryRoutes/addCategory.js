const express = require('express');
const Category = require('../../models/categories');
const router = express.Router();

module.exports = router.post('/api/add-category', async (req, res) =>{
    const { name, active } = req.body;

    await Category.create({name,active})
    .then(async (data)=>{
        if(data){
            res.status(200).json({
                message: 'category added',
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