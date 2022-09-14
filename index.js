var fs = require('fs'); // The use of file system
var express = require('express'); // The express framework
var app = express();

app.get('/getcomputiq', function(req, res){
    fs.readFile(__dirname + "/" + "comptiq.json", 'utf8', function(err, order){
        console.log(order);
        res.end(order);
    });
})

var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("You can access the API on the link at http://localhost:8080/getcomputiq")
})

//this soulution was inspired by kindsonthegenius!