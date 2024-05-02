const mongoose = require('mongoose');
const { NODE_ENV } = require('../config/server.config');


const connectToDB = async () => {
    try {
        console.log('nodeenv =<', NODE_ENV);
        if (NODE_ENV === 'local') {
            await mongoose.connect('mongodb://127.0.0.1:27017/adminproblem');
        }
        console.log('Mongodb connected successfully!');
    } catch (error) {
        console.log('Error while connecting to mongodb');
    }
}

module.exports = connectToDB;