var express = require("express")
var bodyParser = require("body-parser")
var path = require("path")
var app = express()

const jwt = require('jsonwebtoken');
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