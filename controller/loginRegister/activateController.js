
const con = require('../../config/connection')


var activate = async function(req,res)
{
    let id = req.query.id
    let key1 = req.query.key  
   
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
  
     let time_diff=currentTime - createdTime
     console.log(time_diff)

     if(time_diff > 30000)
     {
     
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
}

module.exports = activate