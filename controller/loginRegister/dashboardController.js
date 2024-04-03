
try{
var dashboard = function(req,res){
    res.clearCookie('token')
    res.render('index')
}
}
catch(err)
{
    console.log("Something went wrong in dashboard")
}

module.exports= dashboard