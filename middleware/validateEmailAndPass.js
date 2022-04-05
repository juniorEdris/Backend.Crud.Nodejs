module.exports = (req,res,next)=>{
    const { email, password } = req.body;
    if(!email || !password){
        res.status(200).json({
            message: 'Invalid Credentials!',
            status: false
        });
    }else{
        if(!email.includes('@') || !email.includes('.com')){
            res.status(200).json({
                message: 'Provide valid email and password!',
                status: false
            });
        }else{
            if(!(password.toLocaleLowerCase().length > 6)){
                res.status(200).json({
                    message: 'Password should be longer than 6 characters!',
                    status: false
                });
            }else{
                req.body = {
                    email: email.toLocaleLowerCase().replaceAll(' ', ''),
                    password: password.toLocaleLowerCase().replaceAll(' ', '')
                }
                next();
            }
        }
    };
};