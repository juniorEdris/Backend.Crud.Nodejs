const {expect} = require('chai');

describe('Register as an user', function(){
    it('should get an email', function(){
        expect('ragib@email.com').to.be.a('email');
    });
    it('should get a password', function(){
        expect('ragib@email.com').to.be.a('string');
    });
});