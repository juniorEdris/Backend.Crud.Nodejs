const uuid = require("uuid");
const id = uuid.v4().substring(6);
module.exports = (req,res,next) => {

    const {email, password} = req.body;

    req.body = {
        email,
        password,
        accessToken: id
    };
    next();

};