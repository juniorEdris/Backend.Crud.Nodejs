const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const uuid = require("uuid");

chai.use(chaiHttp);
chai.should();

// Generate random product no
const productNumber = uuid.v4().substring(6);
const staticProductId = '62507143b2ec37fc7484a0ad'

describe("it should insert/delete/update products", ()=> {
    it('should get all products', (done) => {
        chai.request(app)
            .get('/api/get-all-product')
            .end((err,response)=>{
                response.should.be.status(404);
                response.should.be.a('object');
                done();
            });
        });
        
        it('should create a product', (done)=>{
            chai.request(app)
                .post('/api/add-product')
                .send({
                    name: `test-product-no-${productNumber}`,
                    status: "active",
                    price: "0.75",
                    available_from: "2022-01-12",
                    category_id: "624dd7b9b37d439070b548b4"
                })
                .end((err,response)=>{
                    response.status.should.be.equal(200);
                    response.body.should.be.an('object');
                    response.body.data._id.should.be('string');
                    response.body.data.name.should.be('string');
                    response.body.data.status.should.be.equal('active');
                });
                done();
            });

            it('should get single product', (done) => {
                chai.request(app)
                .get(`/api/get-single-product/${staticProductId}`)
                .end((err,response)=>{
                    response.body.should.be.an('object');
                    response.body.data._id.should.be('string');
                    response.body.data.name.should.be('string');
                    response.body.data.status.should.be.equal('active');
                });
                done();
            });

            it('should update a single product', (done) => {
                chai.request(app)
                .post(`/api/update-single-product/${staticProductId}`)
                .send({
                    name: `test-product-update-no-${productNumber}`,
                    status: "deactive",
                    price: "0.75",
                    available_from: "2022-01-12",
                    category_id: "624dd7b9b37d439070b548b4"
                })
                .end((err,response)=>{
                    response.body.should.be.an('object');
                    response.body.data.modifiedCount.should.be('string');
                    response.body.data.modifiedCount.should.be.equal(1);
                });
                done();
            });
            
            it('should return deletedCount 0 on wrong product ID', (done) => {
                chai.request(app)
                .post(`/api/delete-single-product/62506d3e49ecd579136b2272`)
                .end((err,response)=>{
                    response.body.should.be.an('object');
                    response.body.data.acknowledged.should.be(Boolean);
                    response.body.data.deletedCount.should.equal(0);
                });
                done();
            });

            it('should delete a single product', (done) => {
                chai.request(app)
                .post(`/api/delete-single-product/${staticProductId}`)
                .end((err,response)=>{
                    response.body.should.be.an('object');
                    response.body.data.acknowledged.should.be(Boolean);
                    response.body.data.deletedCount.should.equal(1);
                });
                done();
            });
})