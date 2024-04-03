const con = require('../../config/connection')
try {
  var forgetUsername = async function (req, res) {
    console.log(req.body)
    let query = `select * from users where email='${req.body.useremail}'`
    let found = 0;
    function check_username(query) {
      return new Promise((resolve, reject) => {
        con.query(query, function (err, result) {
          if (err) {
            reject(err)
          }
          else {
            if (result.length > 0) {
              found = 1;
              resolve(result)
            }
            else {
              resolve('not found')
            }
          }
        })
      })
    }
    let validateUserNameQuery = await check_username(query)
    console.log(validateUserNameQuery[0].user_key)
    if (found == 1) {
      res.send(validateUserNameQuery[0].email)
    }
    else {
      res.send('userName not Exist')
    }
  }
}
catch (err) {
  console.log(err)
}
module.exports = forgetUsername