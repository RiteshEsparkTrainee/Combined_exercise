var express = require("express")
var app = express()



try{
    
    var dynamic_table =  function(req,res){
        res.render('dynamic_table')
    }
   
}
catch(err)
{
    console.log("Something Went wrong in Dynamic Table")
}

module.exports = dynamic_table

