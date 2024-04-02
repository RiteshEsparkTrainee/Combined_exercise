var express = require("express")


var app = express()

const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const con = require('../../config/connection')
const md5 = require("md5")

try{
var logsave = async function(req,res){
    // console.log("I am inside logsave")
    let data = req.body
    console.log(data)


    const login_data=(query)=>{
        return new Promise(function(resolve,reject){
            con.query(query,function(err,result){
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
 let validate_username = `select * from users where email= '${data.username}'`
 let validate_username_result =await login_data(validate_username)
 console.log("userresult",validate_username_result)
 if(validate_username_result.length==0)
 { let message = 'invalid crendentials'
    res.send(message)
    return;
 }
 let password = data.password
 let hash = validate_username_result[0].salt
 console.log(hash)
 let hash_pass= md5(password+hash)
 console.log(hash_pass)


 let validate_password=`select * from users where user_password = '${hash_pass}'`
 const validate_password_result = await login_data(validate_password)

 if(validate_password_result.length==0)
 {
    let message = 'invalid credential'
    res.send(message)
    return;
 }

 let jwtSecretKey = process.env.JWT_SECRET_KEY;
 let data1 = {
     time: Date(),
     userId: validate_password_result[0].user_id,
 }

 const token = jwt.sign(data1, jwtSecretKey,{expiresIn : '1hr'});
 console.log(token)
 res.cookie('token',token,{expires : new Date(Date.now()+900000),httpOnly: true})
 res.status(200)

    
res.send('Login Successful')
}
}
catch(err)
{
    console.log(err)
}

module.exports=logsave