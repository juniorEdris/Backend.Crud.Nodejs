const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

const mongourl = 'mongodb+srv://jr_edris:KLSPZQE0kKAXpDG9@test-project.s0vrs.mongodb.net/crudapp?retryWrites=true&w=majority';

const connectToDB = async () => {
    try{
        const connection = await mongoose.connect(mongourl);
        console.log(`Database Connected at ${connection.connection.port}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    };
};

module.exports = connectToDB;