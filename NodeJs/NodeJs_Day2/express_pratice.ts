import express from 'express';
const app = express();

app.get('/',function(req ,res){
    res.send("Hello..");
});

app.listen(3000,function(){
    console.log("Server Listing On Port 3000");
});