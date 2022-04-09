const { expect } = require("chai");
const { seedProductForProductCreateTest, UpdateProductTest, deleteProductTest, deleteMultipleProductsTest } = require("./CreateProductHelper");
const { testProductData, testProductforUpdateTestData, testProductforDeleteTestData, testProductArrayforDeleteMultipleData } = require("./demoData");
const { Product } = require("./models");

describe("it should insert/delete/update products", ()=> {
    let productId;
    it('should add a product', async () => {
        const res = await seedProductForProductCreateTest(testProductData);
        productId = res._id;
        expect(res).to.be.an('object');
        expect(res.name).to.be.a('string');
        expect(res.price).to.be.a('string');
        expect(res.status).to.be.a('string');
        expect(res.available_since).to.be.a('date');
    });
    
    it('should return deletedCount 0 on unseccessful delete', async () => {
        const res = await Product.deleteOne({_id: '62506d3e49ecd579136b2272'});
        expect(res).to.be.an('object');
        expect(res.acknowledged).to.be.a('boolean');
        expect(res.acknowledged).to.be.eq(true);
        expect(res.deletedCount).to.be.a('number');
        expect(res.deletedCount).to.be.eq(0);
    });
    
    it('should update a single product', async () => {
        const _id = productId.toString();
        const res = await UpdateProductTest(_id,testProductforUpdateTestData);
        expect(res).to.be.an('object');
        expect(res.acknowledged).to.be.a('boolean');
        expect(res.acknowledged).to.be.eq(true);
        expect(res.matchedCount).to.be.a('number');
        expect(res.matchedCount).to.be.eq(1);
    });
    
    it('should delete a single product', async () => {
        const res = await deleteProductTest(testProductforDeleteTestData);
        expect(res).to.be.an('object');
        expect(res.acknowledged).to.be.a('boolean');
        expect(res.acknowledged).to.be.eq(true);
        expect(res.deletedCount).to.be.a('number');
        expect(res.deletedCount).to.be.eq(1);
    });
    
    it('should delete multiple products', async () => {
        const res = await deleteMultipleProductsTest(testProductArrayforDeleteMultipleData);
        expect(res).to.be.an('object');
        expect(res.acknowledged).to.be.a('boolean');
        expect(res.acknowledged).to.be.eq(true);
        expect(res.deletedCount).to.be.a('number');
        expect(res.deletedCount).to.be.eq(4);
    });
})