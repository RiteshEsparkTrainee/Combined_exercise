var express = require("express")

var app = express()

const cookieParser = require("cookie-parser");
app.use(cookieParser());
try{
var loginSave=function(req,res){
    console.log("hello")
    if(req.cookies.token)
    {
        res.render('save')
    }
    else
    {
        res.render('login')
    }
    
}
}
catch(err)
{
    console.log(err)
}
module.exports=loginSave