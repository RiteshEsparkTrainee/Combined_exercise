const con = require('../../config/connection')
try{
var search =  function (req, res) {
    console.log(req.query);
    let myid = req.query.userID;
    let firstname1 = req.query.firstname;
    let option = req.query.option;
    let lastname = req.query.lastname;
    let city = req.query.city;
  
    let userID = " ";
    if (!req.query.userID) {
      userID = " ";
    }
    else {
      userID = ` where student_id in (${myid})`
    }
    let detail_query = " ";
    let arr = [];
    if (firstname1) arr.push(`firstname like '${firstname1}%'`)
    if (lastname) arr.push(`lastname like '${lastname}%'`)
    if (city) arr.push(`city like '${city}%'`)
    if (arr.length > 0) {
      detail_query = "where " + arr.join(` ${option} `)
    }
    
  
  
  

    let page = parseInt(req.query.p)
    if (page > 10) {
      page = 10
    }
    if (page < 1 || isNaN(page)) {
      page = 1
    }
    let offset = (Number(page) - 1) * 10;
  
  
    let query1 = `select student_id,firstname,lastname,email,city,country,Gender,father_name from student_master1 ${userID} ${detail_query} `
  

    let limitquery = ` limit 10 offset ${offset}  `
    let finalquery = query1 + limitquery;
    console.log(finalquery);
    con.query(query1, function (err, result) {
      // console.log("Inside", result.length);
      let lastpage;
      console.log("object");
      if (err) {
        console.log(err)
        let message = "please enter a valid id"
        // console.log("Inside error jkdfhkhvkdvfhkjhdoi")
        return res.render("searchResult", {
          data: false,
          currpage: page,
          message, firstname: false, lastname: false, city: false, lastpage: false, option: false
        })
      }
      else
      {
        lastpage=Math.ceil(result.length / 10);
      }
      con.query(finalquery, function (err, result1) {
  
  
  
        if (err) {
          console.log(err)
          let message = "please enter a valid id"
     
          return res.render("searchResult", {
            data: false,
            currpage: page,
            message, firstname: false, lastname: false, city: false, lastpage: false, option: false
          })
        }
        else {
         
          console.log("data getted")
          res.render("searchResult", {
            data: result1,
            currpage: page,
            message: false,
            option,
            firstname: req.query.firstname, lastname: req.query.lastname, city: req.query.city,
            lastpage
  
          })
  
        }
        
      })
    })
  }
}
catch(err)
{
    console.log(err)
}

  module.exports=search