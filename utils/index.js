const jwt = require('jsonwebtoken');

// henerate JWT 
exports.generateToken = (id, email) => {
    return jwt.sign({ id, user_email: email }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
}