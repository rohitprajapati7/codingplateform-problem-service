const { Problem } = require('../models')

class ProblemRepository {

   async createProblem (problemData) {

    try {
        const response = await Problem.create(problemData);
        return response;
    } catch (error) {
        console.log('Error in create problem repository ::', error);
        throw error;
    }
   }

   async getProblems () {
    try {
        const problems = await Problem.find();
        return problems;
    } catch (error) {
        console.log('Error while fetching problems  in getProblems function ::', error);
        throw error;
    }
   }

   async getProblem (problemId) {
    try {
        const problem = await Problem.findById(problemId);
        return problem;
    } catch (error) {
        console.log('Error while fetching particular problem::', error);
        throw error;
    }
   }

   async deleteProblem (problemId) {
    try {
        const deleteProblem = await Problem.deleteOne({_id:problemId});
        console.log('deleteProblem responsee=>', deleteProblem);
        return deleteProblem;

    } catch (error) {
        throw error;
    }
   }

   async updateProblem (problemId, newProblemData) {
    try {
        const updatedProblemData = await Problem.updateOne({_id:problemId},newProblemData);
        console.log('updatedProblemData =>', updatedProblemData);
        return updatedProblemData;
    } catch (error) {
        throw error;
    }
   }

}

module.exports = ProblemRepository;