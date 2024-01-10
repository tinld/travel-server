const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const mysql = require('mysql2');
const config = require('./app/configs/general.config');
const morgan = require('morgan');
const methodOverride = require('method-override');

global.INFO = {};
global.INFO.rootPath = __dirname;
global.INFO.systemInfo = {};
global.INFO.jobsPath = global.INFO.rootPath + config.paths.jobs;


// log by using morgan
app.use(morgan('combined'));
app.use(morgan('dev', {
  skip: function(req, res) {
    return res.statusCode < 400;
  },
}));

app.use(bodyParser.json({
  limit: '5mb',
}));

// parse application/vnd.api+json as json
app.use(bodyParser.json({
  type: 'application/vnd.api+json',
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  limit: '5mb',
  extended: true,
}));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow all origins
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.static(global.INFO.rootPath + config.paths.public));

require('./app/routes')(app); // configure our routes

// app.post('/proxy', async (req, res) => {
//   try {
//     const response = await axios.post('https://response-answer.onrender.com/fetch', req.body);
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).send('Error');
//   }
// });

app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});