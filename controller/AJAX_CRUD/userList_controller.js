   
const con = require('../../config/connection')
   try{
   var userlist = function (req, res) {
    let query = `select * from BASIC_DETAILS`
    con.query(query, function (err, result) {
      if (err) {
        console.log(err)
      }
      else {
        res.render('userlist', { result })
      }
    })
  
  }
}
catch(err)
{
    console.log(err)
}
module.exports= userlist