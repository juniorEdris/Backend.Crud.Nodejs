const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');

// Database import
const connectToDB = require('./config/db');
connectToDB();

const app = express();
const PORT = process.env.PORT_NUMBER || 5000;

// import all routes
const registerRoute = require('./routes/registerRoutes');
const { urlencoded } = require('body-parser');

// Allow cross-origin request
app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: false }));


// End points

app.use('/', registerRoute);

app.listen(PORT,()=>{
    console.log(`Server started at localhost:${PORT}`);
});