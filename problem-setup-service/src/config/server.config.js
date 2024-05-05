const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    PORT:process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    MONGODB_URI:process.env.MONGO_DB_URI,
    LOG_DB_URI:process.env.LOG_DB_URI,
    COSMOSDB_URL:process.env.COSMOSDB_URL,
    COSMOSDB_KEY:process.env.COSMOSDB_KEY,
    COSMOSDB_DATABASE_ID:process.env.COSMOSDB_DATABASE_ID,
    COSMOSDB_CONTAINER_ID:process.env.COSMOSDB_CONTAINER_ID
}