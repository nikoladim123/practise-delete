var express = require('express');
var app = express();

var fs = require('fs');

var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

  var dataStr = fs.readFileSync('users.json','utf-8');
    var dataArr = JSON.parse(dataStr);
    var counter = 0;


app.get('/sign-up',(req,res)=>{
  res.sendFile(__dirname + '/sign-up.html');
});

app.get('/wellcome-page',(req,res)=>{
  res.sendFile(__dirname + '/wellcome-page.html')
})


app.post('/sign-up-action',urlencodedParser,(req,res) => {
  dataArr.push(req.body);
  fs.writeFile('./users.json',JSON.stringify(dataArr,null,4),(err)=>{
    if(err){console.log(err);}
    console.log('file saved');
  })
  res.redirect('/wellcome-page')
})

app.get('/send-json',(req,res)=>{
  res.send(dataArr);
})

app.get('/log-in',(req,res)=>{
  res.sendFile(__dirname + '/log-in.html');
})

app.post('/log-in-valid',urlencodedParser,(req,res)=>{
  var valid = req.body;
  console.log(valid);
  console.log(dataArr[1].name);
  console.log(dataArr[1].password);
  for(var i= 0 ; i < dataArr.length ; i++){
    if(dataArr[i].name == valid.name && dataArr[i].password == valid.password){
      counter = 1;
    }
  }
  if(counter == 0){
    res.send('denied');
    console.log('denied');
  }
  else{
    counter = 0;
    res.send('success!');
    console.log('success');
  }
})

app.listen(3000);
