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



//let login register 
let dashboard = require("./controller/login_register/dashboard_controller.js")
app.get('/Dashboard',dashboard)

let register = require("./controller/login_register/register_controller.js")
app.get('/Dashboard/register',register)

let activate = require("./controller/login_register/activate_controller.js")
app.get('/Dashboard/activate',activate)

let register_save = require("./controller/login_register/register_save_controller.js")
app.post('/Dashboard/save',register_save)

let login_save = require("./controller/login_register/login_save.js")
app.get('/Dashboard/login/save',login_save)

let login = require("./controller/login_register/login_controller.js")
app.get('/Dashboard/login',login)


let logsave = require("./controller/login_register/logsave_controller.js")
app.post('/Dashboard/logSave',logsave)


//Dynamic Table
//1st exercise
let dynamic_table = require("./controller/dynamic_table/dynamic_table_controller")
app.get('/Dashboard/dynamicTable',dynamic_table)


// 2nd Exercise 
let kukuCube = require("./controller/Kuku_cube/kuku_cube_controller.js")
app.get('/Dashboard/kukuCube',kukuCube)

//3rd Exercise 
let tictactoe = require("./controller/tic_tac_toe/tic_tac_toe_controller.js")
app.get('/Dashboard/tictactoe',tictactoe)

// 4th Exercise
let sorting = require("./controller/sorting/sorting_controller.js")
app.get('/Dashboard/sorting',sorting)


//5th exercise 
let eventsJavascript = require("./controller/javascriptEvents/eventsJS.js")
app.get('/Dashboard/eventsJavascript',eventsJavascript)


//6th task 
let pagination_orderBy = require("./controller/pagination_orderBy/pagination_orderBy_controller.js")
app.get('/Dashboard/listdatabase',pagination_orderBy)

//7th task 
let attendenceReport = require("./controller/attendence_report/attendence_report_controller.js")
app.get('/Dashboard/report',attendenceReport)

//8th task
let studentResult = require("./controller/result/result_controller.js")
app.get('/Dashboard/result',studentResult)
   
let resultDetails = require("./controller/result/result_details_controller.js")
app.get('/Dashboard/resultDetails',resultDetails)

 //9th task 
 let search = require("./controller/search/search_controller.js")
 app.get('/Dashboard/search',search)

 //10th task
 let delimeterSearch = require("./controller/delimeter_search/delimeterSearchController.js")
 app.get('/Dashboard/delimeterSearch',delimeterSearch)

 //11th task
 let stateCity = require("./controller/states_city/state_city_controller.js")
 app.get('/Dashboard/stateCity',stateCity)

 let cities = require("./controller/states_city/cities_controller.js")
 app.get('/Dashboard/api/cities',cities)

 //12th task
   let job_app = require("./controller/AJAX_CRUD/Ajax_index.js")
   app.get('/Dashboard/jobAppForm',job_app)

 let insert_user = require("./controller/AJAX_CRUD/insert_user_controller.js")
 app.get('/Dashboard/jobAppForm/insert',insert_user)

 let update_db = require("./controller/AJAX_CRUD/update_db_controller.js")
 app.post('/Dashboard/jobAppForm/updateDb',update_db)

 let insert_save = require("./controller/AJAX_CRUD/save_user_controller.js")
 app.post('/Dashboard/jobAppForm/save',insert_save)

 let userlist = require("./controller/AJAX_CRUD/userList_controller.js")
 app.get('/Dashboard/jobAppForm/userlist',userlist)

 let updateUser = require("./controller/AJAX_CRUD/update_user_controller.js")
 app.get('/Dashboard/jobAppForm/update',updateUser)

 //13th task 
 let timeZoneConvertor = require("./controller/time_zone_converter/timeZoneConvertor_controller.js")
 app.get('/Dashboard/timeZoneConvertor',timeZoneConvertor)

 //14th task 
 let paginationAjaxPost = require("./controller/AJAX_pagination/posts_user_controller.js")
 app.get('/Dashboard/posts',paginationAjaxPost)

 let paginationAjaxPostDetails = require("./controller/AJAX_pagination/postDetails_controller.js")
 app.get('/Dashboard/postDetails/:id',paginationAjaxPostDetails)



app.listen(PORT,()=>{
    console.log('server is listening at port ',PORT);
})
