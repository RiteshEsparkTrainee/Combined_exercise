var express = require("express")

const con = require('../../config/connection')
var app = express()
try{
var pagination_orderBy = function (req, res) {

    let page = parseInt(req.query.p)
    // let page = req.query.p
    if (page < 1 || isNaN(page)) {
      page=1;
    }
    
    if(page>250)
    {
    
      page=250;
      
      // res.redirect(`http://localhost:8002/listdatabase?p=${page}`)
    }
    let order=req.query.order || "asc";
    let column = req.query.column || "student_id"
    let offset = (Number(page)-1)*200

    let query = `select * from student_master1 order by ${column} ${order} limit 200 offset ${offset}`
    con.query(query, function (err, result) {
      if (err) {
        console.log(err)
      }
      else {
        console.log('data selected')
        console.log(result)
      }

      res.render("userdetails", { userdata: result,currpage : page,order,column })
    })
  }
}
catch(err)
{
  console.log(err)
}

module.exports= pagination_orderBy