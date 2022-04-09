const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { urlencoded } = require('body-parser');

dotenv.config();

// Database import
const connectToDB = require('./config/db');

let mongodbname = process.env.MONGO_URL_DATABASE_NAME
if(process.env.NODE_ENV === 'test'){
    mongodbname = process.env.MONGO_TEST_DATABASE_NAME
};

connectToDB(mongodbname);

const app = express();
const PORT = process.env.PORT_NUMBER || 5000;

// import all routes
const registerRoute = require('./routes/registerRoutes');
const loginRoute = require('./routes/loginRoutes');
const addCategoryRoute = require('./routes/categoryRoutes/addCategory');
const getCategoryRoute = require('./routes/categoryRoutes/getCategories');
const addProductRoute = require('./routes/productRoutes/addProduct');
const seedingProductRoute = require('./routes/productRoutes/seedProducts');
const getSingleProductRoute = require('./routes/productRoutes/getSingleProduct');
const getAllProductRoute = require('./routes/productRoutes/getAllProducts');
const updateSingleProductRoute = require('./routes/productRoutes/updateProduct');
const deleteSingleProductRoute = require('./routes/productRoutes/deleteProduct');
const deleteMultipleProductRoute = require('./routes/productRoutes/deleteMultipleProduct');
const logOutRoutes = require('./routes/logOutRoutes');

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
app.use('/', seedingProductRoute);
app.use('/', getAllProductRoute);
app.use('/', getSingleProductRoute);
app.use('/', updateSingleProductRoute);
app.use('/', deleteSingleProductRoute);
app.use('/', deleteMultipleProductRoute);
app.use('/', logOutRoutes);

app.listen(PORT,()=>{
    console.log(`Server started at localhost:${PORT}`);
});

module.exports = app;