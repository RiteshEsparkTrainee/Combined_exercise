const con = require('../../config/connection')
try{
var attendenceReport = function(req,res){  
    let page;
    if(req.query.month===undefined) {   
       
      res.redirect(`?p=1&month=december&year=2023`)
    }
    if(req.query.p===undefined) {
      req.query.p=1
    } 
      page = Number(req.query.p)
      if(page > 10)
      {
          page=10
      }       
      if(page < 1)
      {
          page=1         
      }     
      let offset =(page-1)*20;     
     
      let month=req.query.month || "december";
      let year = req.query.year || "2023";
     
      let query1=`select s.student_id,s.firstname,count(student_id) as atten_count,count(month(atten_date))*100/(30) as percentage from student_master2 as s left join attendence_master as e on s.student_id=e.studentid where monthname(atten_date)= '${month}' and year(atten_date)= '${year}' and e.stu_status="Present" group by student_id limit 20 offset ${offset}`
       
  
      con.query(query1, function (err, result) {
        if (err) {
          console.log(err)
        }
        else {
        
        }
        res.render("report",{currpage : page,data: result,month,year})
      })
  
    }
}
catch(err)
{
    console.log(err)
}
module.exports=attendenceReport
