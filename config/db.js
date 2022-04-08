const mongoose = require('mongoose');

const connectToDB = (mongodbname) => {
    try{
        const connection = mongoose.connect(`mongodb+srv://jr_edris:KLSPZQE0kKAXpDG9@test-project.s0vrs.mongodb.net/${mongodbname}?retryWrites=true&w=majority`)
        .then(data=>{
            // console.log(`Database Connected at ${connection.connection.port}`);
            console.log(`mongodb+srv://jr_edris:KLSPZQE0kKAXpDG9@test-project.s0vrs.mongodb.net/${mongodbname}?retryWrites=true&w=majority`);
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