class BaseError extends Error {
    constructor(name, statusCode, description, details){
        console.log('name of the error =>', description)
        super(description);
        this.name = name;
        this.statusCode = statusCode;
        this.details = details;

        // Error.captureStackTrace(this)
    }
}

module.exports = BaseError;