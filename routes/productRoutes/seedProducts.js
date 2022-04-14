const express = require('express');
const authMiddleware = require('../../middleware/authMiddleware');
const Product = require('../../models/product');
const router = express.Router();

module.exports = router.post('/api/seed-demo-product', authMiddleware, async (req, res) =>{
    demoData = [
        {
            name: `Sink`,
            status: "inactive",
            price: "0.25",
            available_since: "2022-01-12",
            category_id: "625765c907e445766318911b"
        },
        {
            name: `Stove`,
            status: "active",
            price: "1.75",
            available_since: "2022-01-12",
            category_id: "625765c907e445766318911b"
        },
        {
            name: `Jug`,
            status: "inactive",
            price: "0.75",
            available_since: "2022-01-12",
            category_id: "625765c907e445766318911b"
        },
        {
            name: `Bed`,
            status: "active",
            price: "0.75",
            available_since: "2022-01-12",
            category_id: "625765bf07e4457663189118"
        },
        {
            name: `Desk`,
            status: "active",
            price: "0.75",
            available_since: "2022-01-12",
            category_id: "625765bf07e4457663189118"
        }
    ];

    await Product.create(demoData)
    .then(async (data)=>{
        if(data){
            res.status(200).json({
                message: 'Seeding successful',
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