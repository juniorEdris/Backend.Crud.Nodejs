const { expect } = require("chai");
const { seedUserForUserCreateTest } = require("./CreateUserHelper");
const { testUser, testinvalidemailUser, testinvalidPasswordLengthUser } = require("./demoData");
const { User } = require("./models");


describe('proccessing create user', () =>{
    
    it('should register with valid email format', async () => {
        const res = await seedUserForUserCreateTest(testUser);
        expect(res).to.be.an('object');
        expect(res.email).to.be.eq('testcasetry@mail.com');
        expect(res.email).to.be.a('string');
    });        
    
    it('should not register with invalid email format', async () => {
        const res = await seedUserForUserCreateTest(testinvalidemailUser);
        expect(res).to.be.an('object');
        expect(res.email).not.to.be.eq('testcasetry@mail.com');
        expect(res.email).to.be.eq('testcasetrymail.com');
        expect(res.email).to.be.a('string');
    });

    it('should not register for password length below or equal to 6', async () => {
        const res = await seedUserForUserCreateTest(testinvalidPasswordLengthUser);
        expect(res).to.be.an('object');
        expect(res.password).length.not.to.be.greaterThan(6);
        expect(res.password).to.be.a('string');
    });
    
    it('should not register with existing email', async () => {
        const res = await User.create(testUser);
        expect(res).to.be.an('object');
        expect(res.email).to.be.eq('testcasetry@mail.com');
        expect(res.email).to.be.a('string');
    });  
        
});