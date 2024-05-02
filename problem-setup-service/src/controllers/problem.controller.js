const {StatusCodes} = require('http-status-codes');
const NotImplemented = require('../errors/notimplemented.error');

function pingProblemController (req, res) {
    res.json({message:'Ping controller in working'})
}

function addProblem (req, res, next) {
    try {
        throw new NotImplemented('addProblem');
    } catch (error) {
        next(error);
    }
}

function getProblems (req, res) {

}

function getProblem (req, res) {

}

function deleteProblem (req, res) {

}

function updateProblem (req, res) {

}

module.exports = {pingProblemController,addProblem,getProblem,getProblems,deleteProblem,updateProblem}