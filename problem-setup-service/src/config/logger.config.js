const winston = require('winston');
require('winston-mongodb');
const {LOG_DB_URI} = require('../config/server.config');
const {Writable} = require('stream');
const logToCosmosDB = require('../clientsapi/cosmosClient');
const allowedTransport = [];

// created a customStream to store log in microsoft azure cosmos 
//db because winston directly not supporting to the azure thats why 
//we converted logs into writable stream

const createCustomStream = new Writable({
    write(chunck, encoding, callback){
        const message = chunck.toString()
        console.log('log intercepted in logtransport', message);
        logToCosmosDB("error", message);
        callback();
    }
})

const customStreamTransport = new winston.transports.Stream({
    stream:createCustomStream
})

allowedTransport.push(customStreamTransport);

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