try{
    var index = function(req,res)
    {
        res.render('job_app_form')
    }
}
catch(err)
{
    console.log(err)
}
module.exports= index
