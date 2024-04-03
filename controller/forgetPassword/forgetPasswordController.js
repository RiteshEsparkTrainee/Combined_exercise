try{
  var forgetPass = function(req,res){
    res.render('forgetPassword')
    }
}
catch(err)
{
    console.log(err)
}
module.exports=forgetPass