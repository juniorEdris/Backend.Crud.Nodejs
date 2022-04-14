const express = require('express');
const bcrypt = require('bcrypt');
const validateEmailAndPass = require('../../middleware/validateEmailAndPass');
const Users = require('../../models/users');
const userExist = require('../../middleware/userExist');
const { generateToken } = require('../../utils');
const router = express.Router();

module.exports = router.post('/api/register', validateEmailAndPass,userExist, async (req, res) => {
    const { email, password }= req.body;

    await Users.create({email: email.trim() , password: bcrypt.hashSync(password.trim(),10)})
    .then((data) => {
        const { _id, email } = data;
        const accessToken = generateToken(_id, email)
        res.status(200).json({
                _id,
                email,
                accessToken,
                status:true,
                message: 'successful'
            });
    })
    .catch(error => {
        res.status(400).json({
            error,
            status:false,
            message: 'failed'
        });
    })
});