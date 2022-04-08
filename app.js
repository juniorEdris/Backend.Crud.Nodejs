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
const loginRoute = require('./routes/loginRoutes');
const addCategoryRoute = require('./routes/categoryRoutes/addCategory');
const getCategoryRoute = require('./routes/categoryRoutes/getCategories');
const addProductRoute = require('./routes/productRoutes/addProduct');
const getSingleProductRoute = require('./routes/productRoutes/getSingleProduct');
const getAllProductRoute = require('./routes/productRoutes/getAllProducts');
const updateSingleProductRoute = require('./routes/productRoutes/updateProduct');
const deleteSingleProductRoute = require('./routes/productRoutes/deleteProduct');
const deleteMultipleProductRoute = require('./routes/productRoutes/deleteMultipleProduct');
const { urlencoded } = require('body-parser');

// Allow cross-origin request
app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: false }));


// End points

app.use('/', registerRoute);
app.use('/', loginRoute);
app.use('/', addCategoryRoute);
app.use('/', getCategoryRoute);
app.use('/', addProductRoute);
app.use('/', getAllProductRoute);
app.use('/', getSingleProductRoute);
app.use('/', updateSingleProductRoute);
app.use('/', deleteSingleProductRoute);
app.use('/', deleteMultipleProductRoute);

app.listen(PORT,()=>{
    console.log(`Server started at localhost:${PORT}`);
});

module.exports = app;