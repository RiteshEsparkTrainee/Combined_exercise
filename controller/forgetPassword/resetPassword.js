const con = require('../../config/connection')
try{
    var resetPassword = async function(req,res){
        let username = req.query.username;
        let new_key=req.query.key
       
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
      
        // console.log(created_time)
        let current_time = new Date()
      
        let diff = current_time-created_time
        // console.log(diff,"difference")
        if(diff > 3000000000000000000000)
        {
          let message = 'Your link is expired'
          res.render('resetPassword',{message,username})
          return;
        }
        return res.render('resetPassword',{message : false,username})
        
      }
}
catch(err)
{
    console.log(err)
}
module.exports =resetPassword