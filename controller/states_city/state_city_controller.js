const con = require('../../config/connection')
try
{

var stateCity = function(req,res)
{
    let query = `select distinct city_state from state_city_master`
    con.query(query,function(err,result)
    {
        if(err)
        {
            console.log(err)
        }
        else
        {
            res.render('stateCity.ejs',{result})
            // console.log(result)
        }
    })
   
}
}
catch(err)
{
    console.log(err)
}
module.exports = stateCity