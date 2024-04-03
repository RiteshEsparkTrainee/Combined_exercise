
try{
var loginSave=function(req,res){
   
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