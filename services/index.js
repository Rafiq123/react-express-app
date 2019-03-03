const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('../services/routes');
var cors = require('cors');

const app = express();

mongoose.connect('mongodb://localhost:27017/test')
app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}));
app.use(bodyParser.json());

routes(app);

app.use('/', (req, res) => {
    res.send('Working!');
});

app.listen(9000, () => {
    console.log('listning to port 9000');
});