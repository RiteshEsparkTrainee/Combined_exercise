var express = require("express")




try{
    
    var ticTacToe =  function(req,res){
        res.render('tictactoe')
    }
   
}
catch(err)
{
    console.log("Something Went wrong in Tic Tac Toe")
}

module.exports = ticTacToe

