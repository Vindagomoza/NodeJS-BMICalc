const express = require("express");
const app=express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request, response){
    console.log(__dirname);
    response.sendFile(__dirname+'/index.html');
});

app.post('/', function(request, response){
    console.log(request.body);
    let num1= Number(request.body.num1);
    let num2= Number(request.body.num2);
    let result = num1 / (num2*num2);
    console.log(`${num1} / (${num2}*${num2})=${result}`);
    if (result<19){
        response.send(`Teie keha mass on ${result} - teil on allakaal`);}
    else if(result>19) {
        if(result<25){
        response.send(`Teie keha mass on ${result} - teil on normaalkaal`);}}
    else if (result>=25){
        if (result<30){
        response.send(`Teie keha mass on ${result} - teil on ulekaal`);}}
    else if(result>30){
        response.send(`Teie keha mass on ${result} - teil on rasvumine`);}
});
app.listen(3000, function(){
    console.log('Server is running on Port 3000');
});