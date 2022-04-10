const express = require('express');
const Product = require('../../models/product');
const router = express.Router();

module.exports = router.post('/api/seed-demo-product', async (req, res) =>{
    const { name, status, price, available_since: available_from, category_id } = req.body;
    demoData = [
        {
            name: `Brush`,
            status: "inactive",
            price: "0.25",
            available_since: "2022-01-12",
            category_id: "624dd7077474d227dd48ac79"
        },
        {
            name: `stove`,
            status: "active",
            price: "1.75",
            available_since: "2022-01-12",
            category_id: "624dd7b9b37d439070b548b4"
        },
        {
            name: `Jug`,
            status: "inactive",
            price: "0.75",
            available_since: "2022-01-12",
            category_id: "624dd7b9b37d439070b548b4"
        },
        {
            name: `Bed`,
            status: "active",
            price: "0.75",
            available_since: "2022-01-12",
            category_id: "624dd87b7e0f3f827f9193e3"
        },
        {
            name: `Desk`,
            status: "active",
            price: "0.75",
            available_since: "2022-01-12",
            category_id: "624dd87b7e0f3f827f9193e3"
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