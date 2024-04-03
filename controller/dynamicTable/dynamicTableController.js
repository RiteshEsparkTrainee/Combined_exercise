var express = require("express")

try{    
    var dynamic_table =  function(req,res){
        res.render('dynamicTable')
    }   
}
catch(err)
{
    console.log("Something Went wrong in Dynamic Table")
}

module.exports = dynamic_table

