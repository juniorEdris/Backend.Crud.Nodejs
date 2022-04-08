const { Product } = require("./models");


const cleanProducts = async () => {
     await Product.deleteMany();
};

const deleteProduct = async (_id) => {
    return await Product.deleteOne({_id});
};

const seedProduct = async (data) => {
    return await Product.create(data);
};

exports.seedProductForProductCreateTest = async (data) => {
    await cleanProducts();
    const productInfo = await seedProduct(data);
    return productInfo;
};

exports.UpdateProductTest = async (_id, data) => {
    const productInfo = await Product.updateOne({_id},data);
    return productInfo;
};

exports.deleteProductTest = async (data) => {
    await cleanProducts();
    const productInfo = await seedProduct(data);
    const deleteResponse = await deleteProduct(productInfo._id);
    return deleteResponse;
};