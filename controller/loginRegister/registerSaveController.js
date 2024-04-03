
const con = require('../../config/connection')
const md5 =require('md5')

try{
var save = async function(req,res)
{
    let data= req.body;
    console.log(req.body)
    let password = req.body.password1;

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
  

    const password_salt= password+salt 

    const hash = md5(password_salt)   
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
   
     if(username_exist.length > 0)
     {
        let message = "Email Already Exist "
        res.render('register',{message,data : username_exist})
       
        return ;
     }
     else
     {
     const id =await  insert_data(query)
     

     res.render('registerWithLink',{key,id})    
     }
}
}
catch(err)
{
    console.log("something went wrong in register save")
}

module.exports=save