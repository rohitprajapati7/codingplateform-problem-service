const mongoose = require('mongoose');
const { NODE_ENV, MONGODB_URI } = require('../config/server.config');


const connectToDB = async () => {
    try {
        console.log('nodeenv =<', NODE_ENV);
        if (NODE_ENV === 'DEV') {
            await mongoose.connect(MONGODB_URI);
        }
        console.log('Mongodb connected successfully!');
    } catch (error) {
        console.log('Error while connecting to mongodb');
    }
}

module.exports = connectToDB;