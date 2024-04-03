var express = require("express")
var app = express()



try{
    
    var kukuCube =  function(req,res){
        res.render('kukuCube')
    }
   
}
catch(err)
{
    console.log("Something Went wrong in KuKu Cube")
}

module.exports = kukuCube

