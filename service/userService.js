const User = require('../models/Users');

const getAllUsers = async() => {
    try{
        const users = await User.find();
        return users;
    }catch(error){
        throw new Error('Error fetching users' + error.message);
    }
};

module.exports = {
    getAllUsers,
}