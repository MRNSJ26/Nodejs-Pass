const express = require('express')(); //The express framework
const app = express();
const PORT = 8080; //The port used for the server
const fs = require('fs'); //The file system

app.use ( express.json() );

app.get('/computiq.json', function(req, res){
    fs.readFile(__dirname + "/" + "computiq.json", 'utf8', function(err, order){
        console.log(oredr);
        res.end(order);
    });
})

var server = app.listen(8080, function(){
var host = server.address().address
var port = server.address().port
console.log("REST API demo app listening at http://%s:%s", host, port)
})