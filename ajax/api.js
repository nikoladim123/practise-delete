var express = require('express');
var bodyParser = require('body-parser')
var fs = require('fs');

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })


var readData = fs.readFileSync('./asd.json','utf-8');
var dataArr = JSON.parse(readData);


app.get('/api',urlencodedParser,function(req,res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/logedin',function(req,res){
  res.sendFile(__dirname + '/logedin.html');
})

app.post('/apii',urlencodedParser,function(req,res){
  res.redirect('/logedin')
  var data = req.body;
  dataArr.push(data);
  fs.writeFile('./asd.json',JSON.stringify(dataArr,null,4),function(err){
    if(err){
      console.log(err);
    }
    else{
      console.log('file saved')
    }
  })

  console.log(dataArr);
})

app.get('/stranica',function(req,res){
  res.send(readData);
})

console.log(readData)

app.listen(3000);
