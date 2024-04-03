try{
var validatePasswordLink= function(req,res){
  
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

    res.render('validatePasswordLink',{username,new_key})
   
}
}
catch(err)
{
    console.log(err)
}
module.exports = validatePasswordLink