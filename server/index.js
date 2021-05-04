const cors= require("cors");
const express=require('express')
const bodyParser = require('body-parser')
const app=express()
const mysql=require('mysql')
const fs=require('fs')

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

const db= mysql.createPool({

    host:"localhost",
    user:"root",
    password:"",
    database:"dev_e_com_srvs"
    

})

app.get('/api/get',(req,res)=>{
    
    const sqlSelect="SELECT * FROM originals";

    db.query(sqlSelect,(err,result)=>{

        res.send(result);
        console.log(result);
    });
    

});

app.post('/api/insert',(req,res)=>{

    res.send("hey this is node");
    console.log(custId,address)

    const sqlInsert= "INSERT INTO originals (CustName,CustId,ContactNo,img) VALUES (?,?,?,?)";
    db.query(sqlInsert,[CustName,CustId,ContactNo,img],(err,result)=>{});

});



app.listen(3001,()=>{

    console.log("running on port 3001");

});




