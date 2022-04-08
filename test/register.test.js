const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const uuid = require("uuid");

chai.use(chaiHttp);
chai.should();

// Generate random acessToken
const accessToken = uuid.v4().substring(6);

describe('proccessing create user', () =>{
    
    it('should not register for wrong email format', (done) => {
        chai.request(app)
            .post('/api/register')
            .send({email: "test@mail.media", password: "123456789", accessToken: "frtehEEdafgebbga74YhrtI"})
            .end((err,response)=>{
                response.should.be.status(200);
                response.should.be.an('object');
                response.body.message.should.be.a('string');
                response.body.status.should.be.equal(false);
                done();
            })
    });
    
    it('should not register for password length below 6', (done) => {
        chai.request(app)
            .post('/api/register')
            .send({email: "test555@mail.com", password: "123456", accessToken: "frtehEEdafgebbga74YhrtI"})
            .end((err,response)=>{
                response.should.be.status(200);
                response.should.be.an('object');
                response.body.message.should.be.equal('Password should be longer than 6 characters!');
                response.body.status.should.be.equal(false);
                done();
            })
    });

    it('should not create an user with existing email', (done) => {
        chai.request(app)
            .post('/api/register')
            .send({email: "iglesis2@mail.com", password: "123456789", accessToken })
            .end((err,response)=>{
                response.should.be.status(200);
                response.should.be.an('object');
                response.body.data.message.should.be.equal('User exist.Try another email!');
                response.body.data.status.should.be.equal(false);
            })
            done();
        });
        
    it('should create an user with new email', (done) => {
        chai.request(app)
            .post('/api/register')
            .send({email: "iglesis3@mail.com", password: "123456789", accessToken })
            .end((err,response)=>{
                response.should.be.status(200);
                response.should.be.an('object');
                response.body.data.message.should.be('string');
                response.body.data.status.should.be.equal(true);
            });
            done();
            process.exit();
        });
        
        
});

