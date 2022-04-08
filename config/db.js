const mongoose = require('mongoose');

const connectToDB = (mongodbname) => {
    try{
        mongoose.connect(`mongodb+srv://jr_edris:KLSPZQE0kKAXpDG9@test-project.s0vrs.mongodb.net/${mongodbname}?retryWrites=true&w=majority`)
        .then(data=>{
            return data;
        })
        .catch(error=>{
            console.log(error);
        });
    }catch(err){
        console.log(err);
        process.exit(1);
    };
};

module.exports = connectToDB;