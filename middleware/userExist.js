const users = require("../models/users");

module.exports = (req,res,next)=>{
    const { email } = req.body;
    users.find({email})
    .then(data=> {
        if(data){
            res.status(400).json({ 
                data: {
                    status:false,
                    message: 'User exist.Try another email!'
                }
            });
        }else{
            next();
        }
    }).catch(err => {
        console.log(err);
    })
};