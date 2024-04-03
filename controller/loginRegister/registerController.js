
try{
var register= function(req,res)
{
    let data = [{}]
    res.render('register',{message : false, data})
}
}
catch(err)
{
    console.log("Something went wrong in the register page")
}

module.exports=register