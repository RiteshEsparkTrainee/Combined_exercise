try{
var validateData = (req,res,next)=>{
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