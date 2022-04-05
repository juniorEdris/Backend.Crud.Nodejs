const express = require('express');
const bcrypt = require('bcrypt');
const validateEmailAndPass = require('../../middleware/validateEmailAndPass');
const Users = require('../../models/users');
const router = express.Router();

module.exports = router.post('/api/register', validateEmailAndPass, async (req, res) => {
    const { email, password }= req.body;
    await Users.create({email, password: bcrypt.hashSync(password,10)})
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