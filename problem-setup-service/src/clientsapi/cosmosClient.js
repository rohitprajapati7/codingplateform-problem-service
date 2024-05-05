const {CosmosClient} = require('@azure/cosmos');
const {COSMOSDB_URL,COSMOSDB_KEY,COSMOSDB_DATABASE_ID,COSMOSDB_CONTAINER_ID } = require('../config/server.config');

// connecting code to cosmos db
const endpoint =COSMOSDB_URL;
const key = COSMOSDB_KEY;

const databaseid=COSMOSDB_DATABASE_ID
const containerid=COSMOSDB_CONTAINER_ID
const client = new CosmosClient({ endpoint, key });

// containerId  => collection name
// databaseId => database name 

const database = client.database(databaseid);
const container = database.container(containerid);   


async function logToCosmosDB (level, message) {
    try {
        container.items.create({
            timestamp: new Date().toISOString(),
            level:level,
            message:message
        })
        console.log('log entry created in cosmos db');
    } catch (error) {
        console.log('Error while enter log into cosmos db', error);
    }
}

module.exports = logToCosmosDB;