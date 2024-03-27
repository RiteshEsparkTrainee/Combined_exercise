var express = require("express")


var app = express()


const cookieParser = require("cookie-parser");
app.use(cookieParser());
const login=function(req,res){
    res.render('login')
}
module.exports=login