const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;
app.listen(port,()=> console.log("Server stated at port ",port));

app.get('/createfile',async(req,res)=>{
    const today =new Date();
    var date = today.getDate()+'-'+ (today.getMonth()+1)+'-'+today.getFullYear();
    var time= today.getHours()+'_'+today.getMinutes()+'_'+today.getSeconds();
    var dateTime =(date+'-'+time).toString();
    let filename =dateTime+'.txt';
    try{
        console.log(filename)
        fs.writeFileSync(`./myfiles/${filename}`,today.toString());
        res.status(201).send("To view all the files go to '/'");
    }
    catch(e){
        res.status(400).send(e);
    }
})


server.get("/",async(req,res)=>{
    try{
        const data= fs.readdirSync('./myfiles').join(`\n`);
        res.status(201).send(data);
    }
    catch(e){
        res.status(400).send(e);
    }
})
