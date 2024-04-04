const con = require('../../config/connection')
var delimeterSearch =   function (req, res) {

    let name = req.query.search || ""
    // console.log(name)
  
      
    let firstname = [];
    let lastname = [];
    let email = [];
    let city = []
    let gender = []  
    
    if (name.length > 0) {
      for (let i = 0; i < name.length; i++) {     
        if (name[i] == '_') {
          let s = ""         
          for (let j = i + 1; j < name.length; j++) {           
            if ((name[j] != '^') && (name[j] != '$') && (name[j] != '}') && (name[j] != '{') && (name[j] != '_')) {             
              s += name[j]
            }
            else {
              break;
            }  
          }
          firstname.push(s)
          // console.log(firstname);
        }
  
        if (name[i] == '^') {      
          let s = "";
          for (let j = i + 1; j < name.length; j++) {   
            if ((name[j] != '_') && (name[j] != '$') && (name[j] != '}') && (name[j] != '{') && (name[j] != '^')) {              
              s += name[j];  
            }
            else {
              break;
            }
  
          }
          lastname.push(s)
        }
  
        if (name[i] == '$') {          
          let s = "";
          for (let j = i + 1; j < name.length; j++) {            
            if ((name[j] != '_') && (name[j] != '$') && (name[j] != '}') && (name[j] != '{') && (name[j] != '$')) {       
              s += name[j]
  
  
            }
            else {
              break;
            }
  
          }
          email.push(s)
        }
        if (name[i] == '}') {         
          let s = "";
          for (let j = i + 1; j < name.length; j++) {           
            if ((name[j] != '_') && (name[j] != '$') && (name[j] != '^') && (name[j] != '{') && (name[j] != '}')) {             
              s += name[j]
  
            }
            else {
              break;
            }
  
          }
          city.push(s)
        }
        if (name[i] == '{') {
         
          let s = "";
          for (let j = i + 1; j < name.length; j++) {          
            if ((name[j] != '_') && (name[j] != '$') && (name[j] != '}') && (name[j] != '^') && (name[j] != '{')) {            
              s += name[j];  
  
            }
            else {
              break;
            }
  
          }
          gender.push(s)
        }
  
      }
    }
  
    
      let newquery = "";
      let count = 0;
  
      if (firstname.length > 0) {
        if (count > 0) {
          newquery += ' AND '
        }
        count++;
        newquery += ' ('
        newquery += `firstname like '${firstname[0]}%'`
        for (let i = 1; i < firstname.length; i++) {
          newquery += `OR firstname like '${firstname[i]}%'`
        }
        newquery += ') '
      }
      if (lastname.length > 0) {
        if (count > 0) {
          newquery += ' AND '
        }
        count++;
        newquery += ' ('
        newquery += `lastname like '${lastname[0]}%'`
        for (let i = 1; i < lastname.length; i++) {
          newquery += ` OR lastname like '${lastname[i]}%'`
        }
        newquery += ') '
      }
      if (city.length > 0) {
        if (count > 0) {
          newquery += ' AND '
        }
        count++;
        newquery += ' ('
        newquery += `city like '${city[0]}%'`
        for (let i = 1; i < city.length; i++) {
          newquery += ` OR city like '${city[i]}%'`
        }
        newquery += ') '
      }
      if (gender.length > 0) {
        // console.log(gender);
        if (count > 0) {
          newquery += ' AND '
        }
        count++;
        newquery += ' ('
        newquery += `gender like '${gender[0]}%'`
        for (let i = 1; i < gender.length; i++) {
          newquery += ` OR gender like '${gender[i]}%'`
        }
        newquery += ') '
      }
      if (email.length > 0) {
        if (count > 0) {
          newquery += ' AND '
        }
        count++;
        newquery += ' ('
        newquery += `email like '${email[0]}%'`
        for (let i = 1; i < email.length; i++) {
          newquery += ` OR email like '${email[i]}'`
        }
        newquery += ' )'
      }
  
      let query1;
      if(name=="")
      {
        query1=`select student_id,firstname,lastname,email,city,country,Gender from student_master1 limit 200 `
      }
      else{
       query1 = `select student_id,firstname,lastname,email,city,country,Gender from student_master1 where ${newquery} limit 200 `
      }
      // console.log(query1)
   
      con.query(query1, function (err, result) {
        if (err) {
          console.log(err)
          let message;
          message = "please give a valid input"        
          res.render('delimeterSearch',{data:false,value:name,message})
        }
        else {
            
            res.render('delimeterSearch', { data: result,value : name,message : false })           
  
        }
      })    
    }
  module.exports= delimeterSearch