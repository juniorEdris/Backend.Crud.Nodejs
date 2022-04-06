const Users = require('../models/users');
const {expect} = require('chai');
const CreateUser = require('./CreateUser');

describe('Register as an user', function(){
    it('should register an user', function(done){
       const response = CreateUser({email: "ragib@gain.media", password: "123456", accessToken: "frtehEEdafgebbga74YhrtI"});
       if (response) {
           done();
       };
    });
});