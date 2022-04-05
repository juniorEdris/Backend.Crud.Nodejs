const express = require('express');
const bcrypt = require('bcrypt');
const validateEmailAndPass = require('../../middleware/validateEmailAndPass');
const Users = require('../../models/users');
const generateRandomToken = require('../../middleware/generateRandomToken');
const router = express.Router();

module.exports = router.post('/api/login', validateEmailAndPass, generateRandomToken, async (req, res) =>{
    const { email, password, accessToken } = req.body;

    await Users.findOne({email})
    .then(async (user)=>{
        if(user){
            if(bcrypt.compareSync(password, user.password)){
                // update demo accessToken
                await Users.updateOne({ email }, { accessToken })
                .then(data=> {
                    res.status(200).json({
                        message: 'user logged in',
                        status:true,
                        data: {
                            email: user.email,
                            accessToken,                        
                        },
                    })
                });        
            }else{
                res.status(200).json({
                    status:false,
                    message: 'invalid credentials!'
                })
            }
        }else{
            res.status(200).json({
                message:'invalid credentials!',
                status: false
            })
        }
    })
});