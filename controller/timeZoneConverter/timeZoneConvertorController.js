
try{
    var timeZoneConvertor = function(req,res)
    {
        res.render('timeZoneConvertor')
    }
}
catch(err)
{
    console.log(err)
}
module.exports=timeZoneConvertor