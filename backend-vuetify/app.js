const express = require('express');
const Project = require("./features/models/projectModel.js")
const router =require("./routes/project.js")
const bodyParser= require('body-parser')
const cors =require('cors')


const app=express();
Project.sync({force:true})

app.use(bodyParser.json());
app.use(cors());
app.use("/",router)

app.listen(3000,()=>{
    console.log("Server is Running")
})