'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const API_HOST = process.env.PERSONAL_WEBSITE_API_SERVICE_HOST || 'localhost';
const API_PORT = process.env.PERSONAL_WEBSITE_API_SERVICE_PORT || '8081';

// Dummy http call
const request = require('request');

// App
const app = express();
app.use(express.static(__dirname +'./../../')); //serves the index.html

app.get('/hello', (req, res) => {
	request('http://' + API_HOST + ':' + API_PORT + '/hello', { json: true }, (err, res2, body) => {
	  if (err) {
	  	return console.log(err); 
	  }
	  console.log(body);
	  res.send(body);
	});
})

app.listen(PORT, HOST);


