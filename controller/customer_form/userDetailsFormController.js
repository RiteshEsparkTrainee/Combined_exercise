const con = require('../../config/connection')
try{
var userDetailsForm=function (req, res) {

    let query = `select * from formUserDetail`
    con.query(query, function (err, result) {
      if (err) {
        console.log(error)
      }
      else {
        console.log(result)
      }

      res.render("userdetailsform", { userdata: result })
    })



  }
}
catch(err)
{
    console.log(err)
}
module.exports= userDetailsForm