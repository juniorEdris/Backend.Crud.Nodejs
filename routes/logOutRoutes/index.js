const express = require('express');
const Users = require('../../models/users');
const router = express.Router();

module.exports = router.post('/api/logout', async (req, res) =>{
    const { email } = req.body;

    if(email.length > 0){
        const userExist = await Users.findOne({email});
        if(userExist){
            await Users.updateOne({email},{accessToken: ''})
            .then(async (data)=>{
                if(data){
                    res.status(200).json({
                        message:'logged out successfully!',
                        status: true
                    })
                }else{
                    res.status(200).json({
                        message:'invalid credentials!',
                        status: false
                    });
                }
            })
            .catch(err=>{
                res.status(400).json({
                    message:'something went wrong!',
                    status: false
                });
            });
        }else{
            res.status(400).json({
                message:'something went wrong!',
                status: false
            });
        }
    }else{
        res.status(400).json({
            message:'something went wrong!',
            status: false
        });
    }
});