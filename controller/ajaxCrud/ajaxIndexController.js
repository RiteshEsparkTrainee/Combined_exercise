try{
    var index = function(req,res)
    {
        res.render('jobAppForm')
    }
}
catch(err)
{
    console.log(err)
}
module.exports= index
