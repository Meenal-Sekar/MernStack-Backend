const express=require("express")
const mongoose=require('mongoose')
const cors=require("cors")
const EmployeeModel=require('./model/Employee')
const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://meenal-sekar:1805vishu@cluster0.nlmbzwb.mongodb.net/Final-db?retryWrites=true&w=majority&appName=Cluster0");
app.post('/register',(req,res)=>{
    EmployeeModel.create(req.body)
    .then(employees=>res.json(employees))
    .catch(err=>res.json(err))


})
app.listen(3001, ()=>{
    console.log("server is running")

})