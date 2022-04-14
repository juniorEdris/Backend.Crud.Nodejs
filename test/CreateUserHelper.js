const { generateToken } = require("../utils");
const { User } = require("./models");


const cleanUsers = async () => {
    await User.deleteMany();
};

const seedUser = async (data) => {
    return await User.create(data);
};

exports.seedUserForUserCreateTest = async (data) => {
    await cleanUsers();
    const userInfo = await seedUser(data);
    const response = {
        _id: userInfo._id,
        email: userInfo.email,
        accessToken: generateToken(userInfo._id, userInfo.email)
    }
    return response
};

exports.seedUserForUserPasswordTest = async (data) => {
    await cleanUsers();
    const userInfo = await seedUser(data);
    
    return userInfo;
};

exports.seedUserForLoginTest = async (data) => {
    await cleanUsers();
    const userInfo = await seedUser(data);

    const response = {
            _id: userInfo._id,
            email: userInfo.email,
            accessToken: generateToken(userInfo._id, userInfo.email)
        }
    return response;
};