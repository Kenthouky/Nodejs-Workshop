/*
 *  * This is the starting point for the app.
 *   */

const http = require('http');
const app = require('./index');

const port = process.env.PORT || 5000;
const hostname = '127.0.0.1'; // ip for localhost
const server = http.createServer(app);

server.listen(port, hostname, function () {
	        console.log(`Started on port ${port}`);    
});
