const jwt = require('jsonwebtoken');

// henerate JWT 
exports.generateToken = (id, email) => {
    return jwt.sign({ id, user_email: email }, process.env.JWT_SECRET ?? 'crud_mern_app_splash', {
        expiresIn: '30d'
    });
}