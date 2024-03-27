var express = require("express")
var app = express()



try{
    
    var sorting =  function(req,res){
        res.render('sorting')
    }
   
}
catch(err)
{
    console.log("Something Went wrong in Sorting")
}

module.exports = sorting

