const {StatusCodes} = require('http-status-codes');
const NotImplemented = require('../errors/notimplemented.error');
const {ProblemService} = require('../services');
const {ProblemRepository} = require('../repositories');


const problemService = new ProblemService(new ProblemRepository());

function pingProblemController (req, res) {
    res.json({message:'Ping controller in working'})
}

async function addProblem (req, res, next) {
    console.log('add problem controller =<', req.body);
    try {
        const newProblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).send({
            success:true,
            message: 'new problem created successfully!',
            error:{},
            data:newProblem
        })
    } catch (error) {
        next(error);
    }
}

async function getProblems (req, res, next) {
    try {
        const problemList = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).send({
            success:true,
            message:{},
            error:{},
            data:problemList
        })
    } catch (error) {
        next(error);
    }
}

async function getProblem (req, res, next) {
    try {
        const {id} = req.params;
        console.log('iod =', id);
        const singleProblem = await problemService.getProblem(id)
        return res.status(StatusCodes.OK).send({
            success:true,
            message:"",
            error:{},
            data:singleProblem,
        })
    } catch (error) {
        next(error);
    }
}

async function deleteProblem (req, res, next) {
    try {
        const { id } = req.params;
         await problemService.deleteProblem(id);
        return res.status(StatusCodes.OK).send({
            success:true,
            message:`problem deleted successfully!`,
            error:{},
            data: `problem with id ${id} deleted successfully!`
        })
    } catch (error) {
        next(error);
    }
}

async function updateProblem (req, res, next) {
    try {
        const { id } = req.params;
        const updatedProblem = await problemService.updateProblem(id, req.body, {new:true});
        return res.status(StatusCodes.OK).send({
            success:true,
            message:"Problem updated successfully!",
            error:{},
            data: {}
        });
    } catch (error) {
        next(error);
    }
}


module.exports = {pingProblemController,addProblem,getProblem,getProblems,deleteProblem,updateProblem}