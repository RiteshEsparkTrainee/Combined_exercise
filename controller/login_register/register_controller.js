var express = require("express")
var bodyParser = require("body-parser")
var path = require("path")
var app = express()


const cookieParser = require("cookie-parser");
app.use(cookieParser());





app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname ,"public")));
try{
var register= function(req,res)
{
    let data = [{}]
    res.render('register',{message : false, data})
}
}
catch(err)
{
    console.log("Something went wrong in the register page")
}

module.exports=register