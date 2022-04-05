const mongoose = require('mongoose');

module.exports = mongoose.model('Users', mongoose.Schema({
    email: {
        type:String,
        required: [true, 'Please provide an email']
    },
    password:  {
        type:String,
        required: [true, 'Please provide an password']
    },
    accessToken: String
},{
    timestamps: true
}));