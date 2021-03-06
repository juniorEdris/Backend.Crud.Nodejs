const express = require('express');
const authMiddleware = require('../../middleware/authMiddleware');
const Category = require('../../models/categories');
const router = express.Router();

module.exports = router.get('/api/get-category', authMiddleware, async (req, res) =>{

    await Category.find()
    .then((data)=>{
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