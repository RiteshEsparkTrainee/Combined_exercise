var express = require("express")
const mainRoute = require("./routes/mainRoute.js")
var app = express()
var bodyParser = require("body-parser")
var path = require("path")

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname +"/public")));
app.use(bodyParser.urlencoded({ extended: true }))
require('dotenv').config()
let PORT = process.env.PORT


const cookieParser = require("cookie-parser");
app.use(cookieParser());
console.log(PORT);

app.use('/dashboard',mainRoute)
var middleware = require('./middleware.js')

try{

let forget_password = require("./controller/forgetPassword/forgetPassword_controller.js")
app.get('/dashboard/forgetPass',forget_password)



let forget_username = require("./controller/forgetPassword/validate_username.js")
app.post('/dashboard/validate_username',forget_username)

let validate_password_link = require("./controller/forgetPassword/validate_password_link.js")
app.get('/dashboard/validate_password_link',validate_password_link)

let reset_password = require("./controller/forgetPassword/reset_password.js")
app.get('/dashboard/reset_password',reset_password)

let forsave = require("./controller/forgetPassword/forPassSave_controller.js")
app.post('/dashboard/forPassSave',forsave)








//let login register 
// const dashboardRoute = require('./routes/dashboard')
// app.use('/dashboard',dashboardRoute)


// app.get('/dashboard',dashboard)

// let register = require("./controller/login_register/register_controller.js")
// app.get('/dashboard/register',register)

// let activate = require("./controller/login_register/activate_controller.js")
// app.get('/dashboard/activate',activate)

// let register_save = require("./controller/login_register/register_save_controller.js")
// app.post('/dashboard/save',register_save)

// let login_save = require("./controller/login_register/login_save.js")
// app.get('/dashboard/login/save',login_save)

// let login = require("./controller/login_register/login_controller.js")
// app.get('/dashboard/login',login)

// let logsave = require("./controller/login_register/logsave_controller.js")
// app.post('/dashboard/logSave',logsave)

//Dynamic Table
// //1st exercise
// let dynamic_table = require("./controller/dynamic_table/dynamic_table_controller")
// app.get('/dashboard/dynamicTable',middleware,dynamic_table)

// 2nd Exercise 
// let kukuCube = require("./controller/Kuku_cube/kuku_cube_controller.js")
// app.get('/dashboard/kukuCube',middleware,kukuCube)

// //3rd Exercise 
// let tictactoe = require("./controller/tic_tac_toe/tic_tac_toe_controller.js")
// app.get('/dashboard/tictactoe',middleware,tictactoe)

// 4th Exercise
// let sorting = require("./controller/sorting/sorting_controller.js")
// app.get('/dashboard/sorting',middleware,sorting)

// //5th exercise 
// let eventsJavascript = require("./controller/javascriptEvents/eventsJS.js")
// app.get('/dashboard/eventsJavascript',middleware,eventsJavascript)

//6th task 
// let pagination_orderBy = require("./controller/pagination_orderBy/pagination_orderBy_controller.js")
// app.get('/dashboard/listdatabase',middleware,pagination_orderBy)

//7th task 
// let attendenceReport = require("./controller/attendence_report/attendence_report_controller.js")
// app.get('/dashboard/report',middleware,attendenceReport)

//8th task
// let studentResult = require("./controller/result/result_controller.js")
// app.get('/dashboard/result',middleware,studentResult)
// let resultDetails = require("./controller/result/result_details_controller.js")
// app.get('/dashboard/resultDetails',middleware,resultDetails)

//9th task 
// let search = require("./controller/search/search_controller.js")
// app.get('/dashboard/search',middleware,search)

//10th task
// let delimeterSearch = require("./controller/delimeter_search/delimeterSearchController.js")
// app.get('/dashboard/delimeterSearch',middleware,delimeterSearch)

// //11th task
// let stateCity = require("./controller/states_city/state_city_controller.js")
// app.get('/dashboard/stateCity',middleware,stateCity)

// let cities = require("./controller/states_city/cities_controller.js")
// app.get('/dashboard/api/cities',middleware,cities)

// //12th task
// let job_app = require("./controller/AJAX_CRUD/Ajax_index.js")
// app.get('/dashboard/jobAppForm',middleware,job_app)

// let insert_user = require("./controller/AJAX_CRUD/insert_user_controller.js")
// app.get('/dashboard/jobAppForm/insert',middleware,insert_user)

// let update_db = require("./controller/AJAX_CRUD/update_db_controller.js")
// app.post('/dashboard/jobAppForm/updateDb',middleware,update_db)

// let insert_save = require("./controller/AJAX_CRUD/save_user_controller.js")
// app.post('/dashboard/jobAppForm/save',middleware,insert_save)

// let userlist = require("./controller/AJAX_CRUD/userList_controller.js")
// app.get('/dashboard/jobAppForm/userlist',middleware,userlist)

// let updateUser = require("./controller/AJAX_CRUD/update_user_controller.js")
// app.get('/dashboard/jobAppForm/update',middleware,updateUser)

//13th task 
// let timeZoneConvertor = require("./controller/time_zone_converter/timeZoneConvertor_controller.js")
// app.get('/dashboard/timeZoneConvertor',middleware,timeZoneConvertor)

//14th task 
// let paginationAjaxPost = require("./controller/AJAX_pagination/posts_user_controller.js")
// app.get('/dashboard/posts',middleware,paginationAjaxPost)

// let paginationAjaxPostDetails = require("./controller/AJAX_pagination/postDetails_controller.js")
// app.get('/dashboard/postDetails/:id',middleware,paginationAjaxPostDetails)




app.listen(PORT,()=>{
console.log('server is listening at port ',PORT);
})
}
catch(err)
{
    console.log("Something went wrong", err)
}

