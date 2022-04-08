const mongoose = require('mongoose');

module.exports = mongoose.model('Product', mongoose.Schema({
    name: {
        type:String,
        required: [true, 'Please provide name']
    },
    price:  {
        type:String,
        required: [true, 'Please provide product price']
    },
    status:  {
        type:String,
        required: [true, 'Please provide a status']
    },
    available_since:  {
        type:Date, 
        default: Date.now,
        required: [true, 'Please provide an available date']
    },
    category_id:  {
        type:mongoose.ObjectId,
        required: [true, 'Please select category']
    }
},{
    timestamps: true
}));