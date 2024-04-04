
const con = require('../../config/connection')
try{
var updateUser = async function (req, res) {
    let id = req.query.id
    // console.log(id)
    let query = `select *,DATE_FORMAT(DATE_OF_BIRTH,"%Y-%m-%d") as DATE_OF_BIRTH from BASIC_DETAILS where EMPLOYEE_ID=${id}`
    let query2 = `select * from education_master where education_id = ${id}`
    let query3 = `select * from Languages_known where id=${id}`
    let query4 = `select * from Technologies_you_know where technology_id=${id}`
    let query5 = `select *,DATE_FORMAT(_From,"%Y-%m-%d") as _From ,DATE_FORMAT(_TO,"%Y-%m-%d") as _TO from WORK_EXPERIENCE where worker_id=${id}`
    let query6 = `select * from PREFERENCE where PREFERENCE_ID=${id}`
    let query7 = `select * from REFERNCE_CONTACT where Reference_id=${id}`  
  
  
    const update_data = (query) => {
      return new Promise(function (resolve, reject) {
        con.query(query, function (err, result) {
          if (err) {        
            console.log(err)
            reject(err)
          }
          else {
            resolve(result)
          }  
        })
      })
    }
    let basicDetailsResult = await update_data(query)
    let educationMasterDetails = await update_data(query2);
    let languagesKnownDetails = await update_data(query3)
    let technologiesKnownDetails = await update_data(query4)
    let workExperienceDetails = await update_data(query5)
  
    let preferenceDetails = await update_data(query6)
    let referenceDetails = await update_data(query7)   
  
    res.render('ajaxCrudForm.ejs', { basicDetailsResult, educationMasterDetails, workExperienceDetails, technologiesKnownDetails, languagesKnownDetails, referenceDetails, preferenceDetails })
  }
}
catch(err)
{
    console.log(err)
}
module.exports=updateUser