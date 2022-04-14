const express = require('express');
const bcrypt = require('bcrypt');
const validateEmailAndPass = require('../../middleware/validateEmailAndPass');
const Users = require('../../models/users');
const { generateToken } = require('../../utils');
const router = express.Router();

module.exports = router.post('/api/login', validateEmailAndPass, async (req, res) =>{
    const { email, password } = req.body;
    console.log({ email, password });

    await Users.findOne({email})
    .then(async (user)=>{
        if(user){
            if(bcrypt.compareSync(password, user.password)){
                const { _id, email } = user;
                const accessToken = generateToken(_id, email)
                res.status(200).json({
                    _id,
                    email,
                    accessToken,
                    status:true,
                    message: 'successful'
                });    
            }else{
                res.status(400).json({
                    status:false,
                    message: 'Invalid credentials!'
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