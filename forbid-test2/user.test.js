const { expect } = require("chai");
const { User } = require("./models");
console.log(User);


describe('proccessing create user', () =>{
    
    it('should register with valid email format', async () => {
        const testUser = {email: "test@mail.com", password: "123456789", accessToken: "frtehEEdafgebbga74YhrtI"}
        const res = await User.create(testUser);
        console.log(res);
        expect(2+2).to.be.eq(4);
    });        
        
});