const con = require('../../config/connection')
try{
var customer_form=function (req, res) {
    res.render('employee_form_javascript');
  };
}
catch(err)
{
    console.log(err)
}
  module.exports=customer_form