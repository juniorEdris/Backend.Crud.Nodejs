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
    return userInfo
};