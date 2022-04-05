module.exports = (req,res,next)=>{
    const { email, password } = req.body;
    if(!email || !password){
        res.status(400).json({
            message: 'Invalid Credentials!',
            status: false
        });
    }else{
        if(!email.includes('@') || !email.includes('.com')){
            res.status(400).json({
                message: 'Provide valid email and password!',
                status: false
            });
        }else{
            if(!(password.toLocaleLowerCase().length > 6)){
                res.status(400).json({
                    message: 'Password should be longer than 6 characters!',
                    status: false
                });
            }else{
                next();
            }
        }
    };
};