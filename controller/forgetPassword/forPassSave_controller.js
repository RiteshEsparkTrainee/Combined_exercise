const con = require('../../config/connection')
const md5 = require("md5")

try{
 
var forsave =async function(req,res){
    let password1 = req.body.password1
    let username = req.body.username
    console.log("username is",username);
  
    let query = `select * from users where email = '${username}'`
    async function change_password(query)
        {
          return new Promise((resolve,reject)=>{
            con.query (query, function(err,result){
              if(err)
              {
                reject(err)
              }
              else
              {
               
               resolve(result)
              }
            })
          })
        }
        let result =await change_password(query)

        let salt = result[0].salt
        console.log(salt)

        let passwordSalt = password1+salt
        let hashed_password = md5(passwordSalt)

        console.log(hashed_password)

        console.log(result)

        let updatePasswordQuery = `update users set user_password = '${hashed_password}' where email = '${username}'`
        console.log(updatePasswordQuery)
        let updatePassword = await change_password(updatePasswordQuery)
        res.render('savedChangePassword')

  
   
      
  
    }
}
catch(err)
{
    console.log(err)
}
module.exports = forsave