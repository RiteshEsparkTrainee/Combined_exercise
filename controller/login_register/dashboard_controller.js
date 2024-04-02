var express = require("express")

var app = express()


const cookieParser = require("cookie-parser");
app.use(cookieParser());

const md5 = require("md5")




try{
var dashboard = function(req,res){
    res.clearCookie('token')
    res.render('index')
}
}
catch(err)
{
    console.log("Something went wrong in dashboard")
}

module.exports= dashboard