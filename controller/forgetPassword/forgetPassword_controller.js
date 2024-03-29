try{
  var forgetPass = function(req,res){
    res.render('forget_password')
    }
}
catch(err)
{
    console.log(err)
}
module.exports=forgetPass