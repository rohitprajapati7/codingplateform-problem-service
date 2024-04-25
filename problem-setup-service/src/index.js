const express = require('express');
const bodyParser = require('body-parser');


const {PORT} = require('./config/server.config');
const apiRouter = require('./routes');

const app = new express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text())

// if any request comes routes start with /api, we map it to apiRouter
app.use('/api', apiRouter);

app.get('/ping',(req, res)=>{
    res.json({message:'Problem service is alive.'})
})
app.listen(PORT, () =>{
    console.log(`Server started at ${PORT}`);
})