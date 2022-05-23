const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static(__dirname+"/assets"));
console.log(__dirname+"/assets")

// default URL for website
console.log(__dirname);
app.use('/', function(req,res){
    res.sendFile('/index.html', { root: __dirname });
    //__dirname : It will resolve to your project folder.
  });
  
const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.debug('Server listening on port ' + port);