const BaseError = require('./base.error');
const {StatusCodes} = require('http-status-codes');

class Unauthorized extends BaseError {
    constructor(details){
        super('Unauthorized',StatusCodes.UNAUTHORIZED, 'you are not authorized person',details);
    }
}

module.exports = Unauthorized;