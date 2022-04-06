const mongoose = require('mongoose');

module.exports = mongoose.model('Categories', mongoose.Schema({
    name: {
        type:String,
        required: [true, 'Please provide name']
    },
    active:  {
        type:Boolean,
        required: [true, 'Please provide a status']
    }
},{
    timestamps: true
}));