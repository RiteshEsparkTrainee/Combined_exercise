const con = require('../../config/connection')
try{
var cities = function(req,res)
{
    const state= req.query.state;
    // console.log(state)
    let query = `select city_name from state_city_master where city_state = '${state}'`
    // console.log(query)
    con.query(query,function(err,results){
        if(err)
        {
            console.log(err)
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        else
        {
            const city = results.map(result=>result.city_name)
            // console.log(city)
            res.json(city)
        }
    })
}
}
catch(err)
{
    console.log(err)
}
module.exports=cities