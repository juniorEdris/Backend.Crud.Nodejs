const jwt = require('jsonwebtoken');
const User = require('../models/users');


module.exports = async (req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            // Get the token
            token = req.headers.authorization.split(' ')[1];
            
            // Verify token
            const decoded = jwt.verify(token,process.env.JWT_SECRET);
            
            // Get user id from the token
            req.user = await User.findById(decoded.id).select('-password'); // deselect password
            
            next();
        } catch (error) {
            console.log(error);
            res.status(401).json({
                message: 'Not Authorized.'
            });
            // throw new Error('Not Authorized.');
        }
    }

    if(!token){
        res.status(401).json({
            message: 'Not Authorized. Token not found'
        });
        // throw new Error();
    }
};