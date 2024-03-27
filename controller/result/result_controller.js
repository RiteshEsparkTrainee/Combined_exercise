const con = require('../../config/connection')
try{
var result = function(req,res){
    let page = parseInt(req.query.p)
    if(page > 10)
    {
        page=10
    }
    if(page < 1 || isNaN(page))
    {
        page=1
    }
    let offset =(Number(page)-1)*10;
    let query1=`select s.student_id,s.firstname,
    sum(case when e.exam_type=1 then e.obtained_theory_marks else 0 end) as primarly_theory_marks,
    sum(case when e.exam_type=1 then e.obtained_practical_marks else 0 end) as primarly_practical_marks,
    sum(case when e.exam_type=2 then e.obtained_theory_marks else 0 end) as terminal_theory_marks,
    sum(case when e.exam_type=2 then e.obtained_practical_marks else 0 end) as terminal_practical_marks,
    sum(case when e.exam_type=3 then e.obtained_theory_marks else 0 end) as final_theory_marks,
    sum(case when e.exam_type=3 then e.obtained_practical_marks else 0 end) as final_practical_marks
    From student_master2 s
    left join exam_master e  on s.student_id = e.student_id  group by student_id limit 10 offset ${offset}`
    

    con.query(query1, function (err, result) {
      if (err) {
        console.log(err)
      }
      else {
        console.log("data getted")
      }
      console.log(result)
      res.render("result",{data: result,currpage : page})
    })
  }
}
catch(err)
{
    console.log(err)
}

module.exports = result