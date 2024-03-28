const con = require('../../config/connection')
try{
var detailsForm = (req, res) => {
    res.status(200);

    var fetchingdata = req.body;
    console.log(JSON.stringify(req.body))
    var val = Object.keys(fetchingdata).toString();
    console.log(val)

    let query = `select * from formUserDetail where id ='${val}'`
  
    con.query(query, function (err, result) {
      if (err) {
        console.log(err)
      }
      else {
        console.log("data selected")
      }
      res.render('details_form', { data : result })
    })


}
}
catch(err)
{
    console.log(err)
}
module.exports= detailsForm