const {StatusCodes} = require('http-status-codes');

function pingProblemController (req, res) {
    res.json({message:'Ping controller in working'})
}

function addProblem (req, res) {

}

function getProblems (req, res) {

}

function deleteProblem (req, res) {

}

function updateProblem (req, res) {

}

module.exports = {pingProblemController,addProblem,getProblems,deleteProblem,updateProblem}