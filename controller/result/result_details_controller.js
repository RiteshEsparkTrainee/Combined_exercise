const con = require('../../config/connection')
try{
var resultDetails = function(req,res){
    let id = req.query.id
    let query3=`select s.student_id,s.firstname,e.sub_id,e.exam_type,k.subject_name,e.obtained_theory_marks,e.obtained_practical_marks from student_master2 s left join exam_master e on s.student_id=e.student_id 
    left join subject_master k on e.sub_id = k.subject_id where s.student_id=${id}`
    con.query(query3,function(err,result)
    {
      let query4=`select count(studentid) as atten from attendence_master where stu_status="Present" and studentid=${id}`
      con.query(query4,function(err,result2)
      {
        if (err) {
            console.log(err)
        }
        else
        {
          console.log(result2)
        }
        res.render("resultDetails",{data : result,atten : result2})
      })
       
        
    })
  
    
  }
}
catch(err)
{
    console.log(err)
}
module.exports=resultDetails
  