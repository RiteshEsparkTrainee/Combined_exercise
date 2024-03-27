var express = require("express")
var app = express()



try{
    
    var eventsJS =  function(req,res){
        res.render('javaScript_events')
    }
   
}
catch(err)
{
    console.log("Something Went wrong in Javascript events")
}

module.exports = eventsJS

