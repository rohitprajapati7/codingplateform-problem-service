const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    testCases: [
        {
            input: {
                type: String,
                required: true
            },
            output: {
                type: String,
                required: true
            }
        }
    ],
    editorial:{
        type:String
    }
});

const Problem = mongoose.model('Problem', problemSchema);
module.exports = Problem;