// console.log('yes. Everything done');

// const somthing = require(somelibarary)
const express = require('express')
const req = require('express/lib/request')
const { mwfn1 } = require('./middlewares/mymiddleware')
// every function return something
const app = express()

require('dotenv').config()
// console.log(process.env.PORT);

app.use(express.json())

// Object.method(actualargument1,actualargument2,....)
// app.get(routname,mwfn1,mwfn2,mwfn3.......,cbfn)
app.post('/students',mwfn1,function(req,res,next){
    next()
},(req,res)=>{
    let name = req.body.name
    let surname = req.body.surname
    res.json({'msg':`Hi , ${name} ${surname} , How Are You`})
})

const PORT = process.env.PORT
app.listen(PORT,function(){
    console.log(`the server is running on port somthing ${PORT}`);
})
