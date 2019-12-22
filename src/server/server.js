'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const API_HOST = process.env.PERSONAL_WEBSITE_API_SERVICE_HOST || 'localhost';
const API_PORT = process.env.PERSONAL_WEBSITE_API_SERVICE_PORT || '8081';
const API = 'http://' + API_HOST + ':' + API_PORT

// Dummy http call
const request = require('request');

// App
const app = express();
app.use(express.static(__dirname +'./../../')); //serves the index.html

// Proxy requests to the API
app.get('/*', function(req,res) {
  var url = API + req.url
  req.pipe(request(url)).pipe(res);
});

// TODO How to make the app.get and app.post generic to be shared.
app.post('/*', function(req,res) {
  var url = API + req.url
  req.pipe(request(url)).pipe(res);
});

app.listen(PORT, HOST);


