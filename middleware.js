try{
var validateData = (req,res,next)=>{
    //checking the cookie is available or not
    if(req.cookies.token)
    {
        next()
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
module.exports= validateData