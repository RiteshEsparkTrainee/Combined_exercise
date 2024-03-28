
try{
    var timeZoneConvertor = function(req,res)
    {
        res.render('time_zone_convertor')
    }
}
catch(err)
{
    console.log(err)
}
module.exports=timeZoneConvertor