var express = require("express")
var app = express()
var bodyParser = require("body-parser")
var path = require("path")
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname +"/public")));
app.use(bodyParser.urlencoded({ extended: true }))
require('dotenv').config()
let PORT = process.env.PORT
const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser");
app.use(cookieParser());
console.log(PORT);

//connection file with the database
let con = require("./config/connection")

//Dynamic Table
let dynamic_table = require("./controller/dynamic_table/dynamic_table_controller")

//let login register 
let dashboard = require("./controller/login_register/dashboard_controller.js")
app.get('/Dashboard',dashboard)

let register = require("./controller/login_register/register_controller.js")
app.get('/Dashboard/register',register)

let activate = require("./controller/login_register/activate_controller.js")
app.get('/activate',activate)

let register_save = require("./controller/login_register/register_save_controller.js")
app.post('/save',register_save)

let login_save = require("./controller/login_register/login_save.js")
app.get('/login/save',login_save)

let login = require("./controller/login_register/login_controller.js")
app.get('/Dashboard/login',login)


let logsave = require("./controller/login_register/logsave_controller.js")
app.post('/logSave',logsave)

// app.get('/forgetPass',function(req,res){
//     res.render('forgetPass')
// })
// app.get('/forgetPass/save',function(req,res){
//   res.render('forgetPassSave')
// })

// app.post('/register/forgetPassword',async function(req,res){
//     console.log(req.body)
// //    let email = result[0].email
//     let username = req.body.username;
//     const verify_email=(query)=>{
//         return new Promise(function(resolve,reject){
//             con.query(query,function(err,result){
//                 if(err)
//                 {
//                     reject(err)
//                 }
//                 else
//                 {
//                     resolve(result)
//                 }
//             })
//         })
//     }
//     let query = `select * from users where email = '${username}'`
//     console.log(query)
//     let result = await verify_email(query)
//     if(result.length == 0)
//     {
//         res.send("username does not exist")
//         return;
//     }
//     let id  = result[0].user_id
//     let salt = result[0].salt
//     if(req.body.password !== undefined)
//     {
//         let password = req.body.password
//         let pass_salt = password+salt;
//         let hash_pass = md5(pass_salt)     

//           let updatequery = `update users set user_password = '${hash_pass}' where user_id= ${id}`
//           console.log(updatequery)
//          let result = await verify_email(updatequery)
//          console.log('password is updated successfuly')
//          res.send(hash_pass)
//         return;
//     }

//     res.send('emailverified')
// }
// )

//1st exercise
app.get('/Dashboard/dynamicTable',dynamic_table)


//2nd Exercise 


// try{

// }
// catch(err)
// {
//     console.log("Something went wrong in Cucu Cube")
// }
   


app.listen(PORT,()=>{
    console.log('server is listening at port ',PORT);
})
