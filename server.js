var express = require("express")
var bodyParser = require("body-parser")
var path = require("path")
var app = express()
var mysql = require('mysql')
const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser");
app.use(cookieParser());

const md5 = require("md5")

require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: true }))
let PORT = process.env.PORT
console.log(PORT);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname ,'/public')));

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "register_login"
  });
app.get('/index',function(req,res){
    res.clearCookie('token')
    res.render('index')
})
app.get('/register',function(req,res)
{
    let data = [{}]
    res.render('register',{message : false, data})
})


app.get('/activate',async function(req,res)
{
    let id = req.query.id
    let key1 = req.query.key  
    // console.log("my id obtained",id)
    // console.log("my key obtained",key1)
    let query=`select * from users where user_id=${id}`

    const insert_data = (query)=>{
        return new Promise(function(resolve,reject){
             con.query(query,function(err,result){
                 if (err) {
                     
                     reject(err)
                   }
                   else {
                     
                     resolve(result)
                   }  
         
             })
         })
     }
    let result =await insert_data(query)
    let key_obtained_db=result[0].user_key

    let createdTime = result[0].time_stamp;
    let currentTime = new Date()
    // console.log(createdTime);
    // console.log(currentTime)
     let time_diff=currentTime - createdTime
     console.log(time_diff)

     if(time_diff > 30000)
     {
        // res.json("Your Activation link is expired")
        let message = `Your link is expired`
        res.render('activate',{message})
        return ;
     }
    


    console.log("my key",key_obtained_db)
  
    console.log(typeof key_obtained_db)
    console.log(typeof key1)
    if((key_obtained_db) == key1)
    {
    res.render('activate',{message : false})
 
    let activateUser=`update users set isActive = 1 where user_id = ${id}`
    let result = await insert_data(activateUser)
   
    }
    else
    {
        res.json("some problem occured")
    }
})

app.post('/save',async function(req,res)
{
    let data= req.body;
    console.log(req.body)
    let password = req.body.password1;
    console.log("mypassword",password)  


    const randomAlphaNumeric= length=>{
        let s="";
        Array.from({length}).some(()=>{
            s+=Math.random().toString(36).slice(2);
            return s.length >= length;
        })
        return s.slice(0,length)
    }

    const salt = randomAlphaNumeric(5)
    const key = randomAlphaNumeric(12)
    // console.log("My salt",salt)

    const password_salt= password+salt
    console.log("password+salt",password_salt)

    const hash = md5(password_salt)
    console.log("my password md5",hash)
    console.log("Activation key",key)
    let query = `insert into users (firstname,lastname,email,phone,city,user_password,salt,user_key) values ('${data.fname}','${data.lname}','${data.email}','${data.phone}','${data.city}','${hash}','${salt}','${key}')`

    const insert_data = (query)=>{
        return new Promise(function(resolve,reject){
             con.query(query,function(err,result){
                 if (err) {
                     
                     reject(err)
                   }
                   else {
                     console.log(result)
                     resolve(result.insertId)
                   }  
         
             })
         })
     }
     const insert_data2 = (query)=>{
        return new Promise(function(resolve,reject){
             con.query(query,function(err,result){
                 if (err) {
                     
                     reject(err)
                   }
                   else {
                     console.log(result)
                     resolve(result)
                   }  
         
             })
         })
     }

     let check_email_already_exist= `select * from users where email = '${data.email}'`
     let username_exist =  await insert_data2(check_email_already_exist)
     console.log(username_exist,"length")
     if(username_exist.length > 0)
     {
        let message = "Email Already Exist "
        res.render('register',{message,data : username_exist})
       
        return ;
     }
     else
     {


     const id =await  insert_data(query)
     console.log("my_id",id)

     res.render('register_with_link',{key,id})    
     }
})

app.get('/login/save',function(req,res){
    if(req.cookies.token)
    {
        res.render('save')
    }
    else
    {
        res.render('login')
    }
    
})
app.get('/login',function(req,res){
    res.render('login')
})

app.post('/logSave',async function(req,res){
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
})

app.get('/forgetPass',function(req,res){
    res.render('forgetPass')
})
app.get('/forgetPass/save',function(req,res){
  res.render('forgetPassSave')
})

app.post('/register/forgetPassword',async function(req,res){
    console.log(req.body)
//    let email = result[0].email
    let username = req.body.username;
    const verify_email=(query)=>{
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
    let query = `select * from users where email = '${username}'`
    console.log(query)
    let result = await verify_email(query)
    if(result.length == 0)
    {
        res.send("username does not exist")
        return;
    }
    let id  = result[0].user_id
    let salt = result[0].salt
    if(req.body.password !== undefined)
    {
        let password = req.body.password
        let pass_salt = password+salt;
        let hash_pass = md5(pass_salt)     

          let updatequery = `update users set user_password = '${hash_pass}' where user_id= ${id}`
          console.log(updatequery)
         let result = await verify_email(updatequery)
         console.log('password is updated successfuly')
         res.send(hash_pass)
        return;
    }

    res.send('emailverified')
}
)
try{
    app.get('/dynamicTable',function(req,res){
        res.render('dynamic_table')
    })

   
}
catch(err)
{
    console.log("Error in Dynamic Table")
}

   


app.listen(PORT,()=>{
    console.log('server is listening at port ',PORT);
})
