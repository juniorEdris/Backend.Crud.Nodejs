const express = require('express');
const bcrypt = require('bcrypt');
const validateEmailAndPass = require('../../middleware/validateEmailAndPass');
const Users = require('../../models/users');
const userExist = require('../../middleware/userExist');
const router = express.Router();

module.exports = router.post('/api/register', validateEmailAndPass,userExist, async (req, res) => {
    const { email, password }= req.body;

    await Users.create({email: email.trim() , password: bcrypt.hashSync(password.trim(),10)})
    .then((data) => {
        res.status(200).json({ 
            data: {
                data,
                status:true,
                message: 'successful'
            }
        });
    })
    .catch(error => {
        console.log({error});
        res.status(200).json({ 
            data: {
                error,
                status:false,
                message: 'failed'
            }
        });
    })
});