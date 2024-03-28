const con = require('../../config/connection')
try{
var savedCustomerForm=function (req, res) {
    res.render('savedform')
    const id = crypto.randomUUID();

    req.body.id = id;
    console.log(req.body)

    var sql = `INSERT INTO formUserDetail (id,fname,lname,age,email,mobile_no,Gender,Hobbies,address) 
    VALUES ('${id}','${req.body.fname}','${req.body.lname}',${req.body.age},'${req.body.email}',
    '${req.body.number}','${req.body.Gender}','${req.body.Hobbies}','${req.body.address}')`;




    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted, ID: " + result.insertId);
    });


  }
}
catch(err)
{
    console.log(err)
}
