
const sanitizeMarkdownContent = require('../utills/markdownSanitizer');

class ProblemService  {

    constructor (problemRepository) {
        this.problemRepository = problemRepository
    }


    async createProblem (problemData) {
        console.log('problem service data =<', problemData);
        // need to senetize the description which is enter by the problem setter
        problemData.description = sanitizeMarkdownContent(problemData.description);
        const problem = await this.problemRepository.createProblem(problemData);
        return problem;
    }


    async getProblem (problemId) {
        const problem = this.problemRepository.getProblem(problemId);
        return problem;
    }
    
    async getAllProblems () {
        const problems = await this.problemRepository.getProblems();
        return problems;
    }

    async deleteProblem (id) {
        const deleteProblemService = await this.problemRepository.deleteProblem(id);
        return deleteProblemService;
    }

    async updateProblem (problemId, problemData) {
        const updatedProblemdata = await this.problemRepository.updateProblem(problemId, problemData);
        return updatedProblemdata;
    }
}

module.exports = ProblemService;