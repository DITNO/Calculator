const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
//.sendFile to send the file over to the server
//__dirname is used to fetch the file no matter the location
app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});

app.post('/',function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send(result.toString());
});

//BMI CALC PART
app.get('/bmicalculator',function(req,res){
    res.sendFile(__dirname+'/bmiCalculator.html');
});
app.post('/bmicalculator',function(req,res){
    var weight = Number(req.body.num1);
    var height = Number(req.body.num2);
    var BMI = weight/height;
    res.send(BMI.toString());
});

app.listen(3000,function(){
    console.log('server is running');
});
