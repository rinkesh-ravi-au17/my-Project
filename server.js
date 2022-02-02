const dotenv =require('dotenv')
dotenv.config()
const mongoose =require ('mongoose')
const express = require ('express')
const userRouteObj = require('./route/user')

const app = express()
const dbHelper =require ('./db/db')

dbHelper.dbInit()
app.use(userRouteObj)
app.use(express.urlencoded({extended:true}))

app.use(express.static('views'))


app.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/views/signup.html`)
}) 

app.post('/login',async(req,res)=>{
    const {email, pass} =req.body 
    res.send("data recieved")
})
const PORT =process.env.PORT
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
})


//run app, then load http://localhost:port in a browser to see the output