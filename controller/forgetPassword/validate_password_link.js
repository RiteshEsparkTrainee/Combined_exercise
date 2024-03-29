try{
var validate_password_link= function(req,res){
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
   
}
}
catch(err)
{
    console.log(err)
}
module.exports = validate_password_link