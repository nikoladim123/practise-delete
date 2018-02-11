var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs')

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();
var readData = fs.readFileSync(__dirname + '/asd.txt');


app.get('/',function(req,res){
  res.sendFile(__dirname + '/index.html');
});

app.post('/apii',urlencodedParser,function(req,res){
  var data = req.body;
  fs.writeFile('/asd.txt',JSON.stringify(data,null,4),function(err){
    if(err){console.log('asasd');}
    else{console.log('file saved')}
  });
});

app.listen(3000);
