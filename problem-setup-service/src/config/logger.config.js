const winston = require('winston');
require('winston-mongodb');
const {LOG_DB_URI} = require('../config/server.config');

const allowedTransport = [];

allowedTransport.push(new winston.transports.Console({
    format:winston.format.combine(
        // winston.format.colorize(),
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf((log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
    ),
}))

allowedTransport.push(new winston.transports.MongoDB({
    level:'error',
    db:LOG_DB_URI,
    collection:'logs'
}))

allowedTransport.push(new winston.transports.File({
    filename:'error.log',
    level:'error'
}))

const logger = winston.createLogger({
    format: winston.format.combine(
        // First argument to combine method is defining how we want the timestamp to come up
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        // Second argument to combine method, which defines what is exactly going to print in a log
        winston.format.printf((log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
    ),
    transports: allowedTransport   // transport property will tell where all the logs can go
})

module.exports = logger;