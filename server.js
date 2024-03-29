var express = require("express")
var app = express()
var bodyParser = require("body-parser")
var path = require("path")
const md5 = require("md5")
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname +"/public")));
app.use(bodyParser.urlencoded({ extended: true }))
require('dotenv').config()
let PORT = process.env.PORT
const jwt = require('jsonwebtoken');

const cookieParser = require("cookie-parser");
app.use(cookieParser());
console.log(PORT);

var middleware = require('./middleware.js')


app.get('/forgetPass',function(req,res){
res.render('forget_password')
})
app.post('/validate_username',async function(req,res){
    console.log(req.body)
    let query = `select * from users where email='${req.body.useremail}'`
    let found=0;
  function check_username(query)
  {
    return new Promise((resolve,reject)=>{
      con.query (query,function(err,result){
        if(err)
        {
          reject(err)
        }
        else
        {
          if(result.length > 0)
          {
            found=1;
            resolve(result)
          }
          else
          {
            resolve('not found')
          }
        }
      })
    })
  }
  let validateUserNameQuery = await check_username(query)
  console.log(validateUserNameQuery[0].user_key)
  if(found==1)
  {
    res.send(validateUserNameQuery[0].email)
  }
  else
  {
    res.send('userName not Exist')
  }



   

   
})
app.get('/validate_password_link',function(req,res){
    console.log(req.query.username)
    let username=req.query.username
    function generateRandomString(length) {
     const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
     let result = "";
  
     for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        result += charset[randomIndex];
     }
  
     return result;
  }

  let new_key = generateRandomString(12)
  console.log(new_key)
    res.render('validate_password_link',{username,new_key})
   
})
app.get('/reset_password',async function(req,res){
    let username = req.query.username;
    let new_key=req.query.key
    console.log(username)
    console.log(new_key)
    function reset_password_link(query)
    {
      return new Promise((resolve,reject)=>{
        con.query (query,function(err,result){
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
    let query = `select time_stamp from users where email = '${username}'`
    let created_time_result = await reset_password_link(query)
    let created_time = created_time_result[0].time_stamp
  
    console.log(created_time)
    let current_time = new Date()
  
    let diff = current_time-created_time
    console.log(diff,"difference")
    if(diff > 3000000000000000000000)
    {
      let message = 'Your link is expired'
      res.render('reset_password',{message,username})
      return;
    }
    return res.render('reset_password',{message : false,username})
    
  })
  app.post('/forPassSave',function(req,res){
  let password1 = req.body.password1
  let username = req.body.username
  console.log("username is",username);

  let query = `select * from users where email = ${username}`

 
    

  })





//connection file with the database
let con = require("./config/connection")


//let login register 
let dashboard = require("./controller/login_register/dashboard_controller.js")
app.get('/dashboard',dashboard)

let register = require("./controller/login_register/register_controller.js")
app.get('/dashboard/register',register)

let activate = require("./controller/login_register/activate_controller.js")
app.get('/dashboard/activate',activate)

let register_save = require("./controller/login_register/register_save_controller.js")
app.post('/dashboard/save',register_save)

let login_save = require("./controller/login_register/login_save.js")
app.get('/dashboard/login/save',login_save)

let login = require("./controller/login_register/login_controller.js")
app.get('/dashboard/login',login)

let logsave = require("./controller/login_register/logsave_controller.js")
app.post('/dashboard/logSave',logsave)

//Dynamic Table
//1st exercise
let dynamic_table = require("./controller/dynamic_table/dynamic_table_controller")
app.get('/dashboard/dynamicTable',middleware,dynamic_table)

// 2nd Exercise 
let kukuCube = require("./controller/Kuku_cube/kuku_cube_controller.js")
app.get('/dashboard/kukuCube',middleware,kukuCube)

//3rd Exercise 
let tictactoe = require("./controller/tic_tac_toe/tic_tac_toe_controller.js")
app.get('/dashboard/tictactoe',middleware,tictactoe)

// 4th Exercise
let sorting = require("./controller/sorting/sorting_controller.js")
app.get('/dashboard/sorting',middleware,sorting)

//5th exercise 
let eventsJavascript = require("./controller/javascriptEvents/eventsJS.js")
app.get('/dashboard/eventsJavascript',middleware,eventsJavascript)

//6th task 
let pagination_orderBy = require("./controller/pagination_orderBy/pagination_orderBy_controller.js")
app.get('/dashboard/listdatabase',middleware,pagination_orderBy)

//7th task 
let attendenceReport = require("./controller/attendence_report/attendence_report_controller.js")
app.get('/dashboard/report',middleware,attendenceReport)

//8th task
let studentResult = require("./controller/result/result_controller.js")
app.get('/dashboard/result',middleware,studentResult)
let resultDetails = require("./controller/result/result_details_controller.js")
app.get('/dashboard/resultDetails',middleware,resultDetails)

//9th task 
let search = require("./controller/search/search_controller.js")
app.get('/dashboard/search',middleware,search)

//10th task
let delimeterSearch = require("./controller/delimeter_search/delimeterSearchController.js")
app.get('/dashboard/delimeterSearch',middleware,delimeterSearch)

//11th task
let stateCity = require("./controller/states_city/state_city_controller.js")
app.get('/dashboard/stateCity',middleware,stateCity)

let cities = require("./controller/states_city/cities_controller.js")
app.get('/dashboard/api/cities',middleware,cities)

//12th task
let job_app = require("./controller/AJAX_CRUD/Ajax_index.js")
app.get('/dashboard/jobAppForm',middleware,job_app)

let insert_user = require("./controller/AJAX_CRUD/insert_user_controller.js")
app.get('/dashboard/jobAppForm/insert',middleware,insert_user)

let update_db = require("./controller/AJAX_CRUD/update_db_controller.js")
app.post('/dashboard/jobAppForm/updateDb',middleware,update_db)

let insert_save = require("./controller/AJAX_CRUD/save_user_controller.js")
app.post('/dashboard/jobAppForm/save',middleware,insert_save)

let userlist = require("./controller/AJAX_CRUD/userList_controller.js")
app.get('/dashboard/jobAppForm/userlist',middleware,userlist)

let updateUser = require("./controller/AJAX_CRUD/update_user_controller.js")
app.get('/dashboard/jobAppForm/update',middleware,updateUser)

//13th task 
let timeZoneConvertor = require("./controller/time_zone_converter/timeZoneConvertor_controller.js")
app.get('/dashboard/timeZoneConvertor',middleware,timeZoneConvertor)

//14th task 
let paginationAjaxPost = require("./controller/AJAX_pagination/posts_user_controller.js")
app.get('/dashboard/posts',middleware,paginationAjaxPost)

let paginationAjaxPostDetails = require("./controller/AJAX_pagination/postDetails_controller.js")
app.get('/dashboard/postDetails/:id',middleware,paginationAjaxPostDetails)




app.listen(PORT,()=>{
console.log('server is listening at port ',PORT);
})

