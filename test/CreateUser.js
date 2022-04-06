module.exports = async (userObj) =>{
    await Users.create(userObj)
    .then(data => {
        return data;
    }).catch(done);
};