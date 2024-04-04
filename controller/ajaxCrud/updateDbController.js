const con = require('../../config/connection')
try {
  var updateDatabase = async function (req, res) {

    let id = req.body.user_id
    let data = req.body
    // console.log("I got the user ID ", id)
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
    //basic Details
    let query1 = `update BASIC_DETAILS set FIRST_NAME = '${data.fname}' , LAST_NAME='${data.lname}' , DESIGNATION='${data.designation}', ADDRESS1='${data.address1}' , ADDRESS2='${data.address2}' , PHONE_NO = ${data.phone}  , city = '${data.city}',GENDER = '${data.gender}' , ZIP_CODE= ${data.zipcode},email = '${data.email}',RELATIONSHIP_STATUS= '${data.relationship_status}', DATE_OF_BIRTH = '${data.dateofbirth}'  where EMPLOYEE_ID=${id}`
    // console.log(query1)
    let query1_1 = await update_data(query1)

    //Education_details
    //  if(data.board_name!==undefined){
    //  for(let i=0;i<data.board_name.length;i++)
    //  {
    //   if(data.board_name[i])
    //   {
    //      let query2=`update education_master set name_of_board= '${data.board_name[i]}', passing_year = ${data.passing_year[i]} , percentage = ${data.percentage[i]} where education_id= ${id} and education_unique_id = ${data.edu_id[i]}`
    //      console.log(query2)
    //      let query2_1 = await update_data(query2)
    //   }
    //  }
    // }
    let education_details = `select * from education_master  WHERE education_id = ${id}`
    let education_details_result = await update_data(education_details)
    let education_db = [];

    education_details_result.forEach(async (element) => {
      education_db.push(element.name_of_board)
    })

    if (data.board_name != undefined) {
      if (education_db.length > data.board_name.length) {

        education_db.forEach(async (element) => {
          try {
            if (!data.board_name.includes(element)) {
              let educationDelete = `Delete from education_master where education_id = ${id}  and name_of_board='${element}'`
              // console.log(educationDelete)
              let query = await update_data(educationDelete)
            }

          }
          catch (error) {
            console.log(error)
          }
        })
      }
    }

    console.log(data);

    if (data.board_name !== undefined) {
      let i = -1;
      data.board_name.forEach(async element => {
        ++i;
       
        if (education_db.includes(element)) {

          try {

            let query3 = `update education_master set name_of_board = '${element}', passing_year = '${data.passing_year[i]}' where education_id = ${id} and name_of_board='${element}'`
            
            let query3_1 = await update_data(query3)
          }
          catch (error) {
            console.log(error)
          }
        }
        else {
          // console.log("inside else")
          let query5 = `insert into education_master (education_id,name_of_board,passing_year,percentage) values (${id},'${element}',${data.passing_year[i]},${data.percentage[i]})`
          let query = await update_data(query5)
        }
      })
    }

    let work_experience = `select * from WORK_EXPERIENCE WHERE worker_id = ${id}`
    let work_expereince_result = await update_data(work_experience)
    let work_experience_db = [];

    work_expereince_result.forEach(async (element) => {
      work_experience_db.push(element.Company_name)
    })

    // for (let i = 0; i < work_experience_db.length; i++) {
    //   console.log(work_experience_db[i])
    // }

    if (data.company_name !== undefined) {

      if (work_experience_db.length > data.company_name.length) {
        work_experience_db.forEach(async (element) => {
          try {
            if (!data.company_name.includes(element)) {
              let workExperienceDelete = `Delete from WORK_EXPERIENCE where worker_id = ${id}  and Company_name='${element}'`
              // console.log(workExperienceDelete)
              let query = await update_data(workExperienceDelete)
            }

          }
          catch (error) {
            console.log(error)
          }
        })
      }
    }

    if (data.company_name !== undefined) {
      let i = -1;
      data.company_name.forEach(async element => {
        ++i;
      
        if (work_experience_db.includes(element)) {
         
          try {

            let query3 = `update WORK_EXPERIENCE set Company_name = '${element}', Designation = '${data.designation1[i]}', _From = '${data.from[i]}', _TO = '${data.to[i]}' where worker_id = ${id} and Company_name='${element}'`
           
            let query3_1 = await update_data(query3)
          }
          catch (error) {
            console.log(error)
          }
        }
        else {
          // console.log("inside else")
          let query5 = `insert into WORK_EXPERIENCE (worker_id,Company_name,Designation,_FROM,_TO) values (${id},'${element}','${data.designation1[i]}','${data.from[i]}','${data.to[i]}')`
          let result = await update_data(query5)
        }
      })
    }

    if (data.hindi_read === undefined) {
      data.hindi_read = 'NO'
    }
    if (data.hindi_write === undefined) {
      data.hindi_write = 'NO'
    }
    if (data.hindi_speak === undefined) {
      data.hindi_speak = 'NO'
    }
    if (data.english_read === undefined) {
      data.english_read = 'NO'
    }
    if (data.english_write === undefined) {
      data.english_write = 'NO'
    }
    if (data.english_speak === undefined) {
      data.english_speak = 'NO'
    }
    if (data.gujarati_read === undefined) {
      data.gujarati_read = 'NO'
    }
    if (data.gujarati_write === undefined) {
      data.gujarati_write = 'NO'
    }
    if (data.gujarati_speak === undefined) {
      data.gujarati_speak = 'NO'
    }

    let language_query = `select Languages_known  FROM Languages_known where id=${id}`
    let languages_result = await update_data(language_query)
    // console.log("result", languages_result)
    languages_selected_db = []

    languages_result.forEach(element => {
      languages_selected_db.push(element.Languages_known)
    })
    // console.log(languages_selected_db)

    let languages_known_values = [[data.hindi_checkbox, data.hindi_read, data.hindi_write, data.hindi_speak], [data.english_checkbox, data.english_read, data.english_write, data.english_speak],
    [data.gujarati_checkbox, data.gujarati_read, data.gujarati_write, data.gujarati_speak]]
    


    // for(let i=0;i< languages_known_values.length;i++)
    // {
    //    if(languages_selected_db.includes('Hindi'))
    //    {
    //        if(languages_known_values[i].includes('Hindi'))
    //        {
    //            let query5=`delete from Languages_known where id=${id} and Languages_known='${languages_known_values[i][0]}'`
    //            let last_id_10 = await update_data(query5)
    //        }
    //    }
    //    if(languages_selected_db.includes('English'))
    //    {
    //        if(languages_known_values[i].includes('English'))
    //        {
    //            let query5=`delete from Languages_known where id=${id} and Languages_known='${languages_known_values[i][0]}'`
    //            let last_id_10 = await update_data(query5)
    //        }
    //    }
    //    if(languages_selected_db.includes('Gujarati'))
    //    {
    //        if(languages_known_values[i].includes('Gujarati'))
    //        {
    //            let query5=`delete from Languages_known where id=${id} and Languages_known='${languages_known_values[i][0]}'`
    //            let last_id_10 = await update_data(query5)
    //        }
    //    }
    // }
    for (let i = 0; i < languages_known_values.length; i++) {
      if (languages_known_values[i].includes('Hindi')) {
        if (languages_selected_db.includes('Hindi')) {
          let query4 = `update Languages_known set Languages_known='${languages_known_values[i][0]}',can_read = '${languages_known_values[i][1]}',can_write='${languages_known_values[i][2]}',can_speak='${languages_known_values[i][3]}' where id=${id} and Languages_known='${languages_known_values[i][0]}'`
          let last_id_10 = await update_data(query4)
        }
        else {
          let query5 = `insert into Languages_known (id,Languages_known,can_read,can_write,can_speak) values (${id},'${languages_known_values[i][0]}','${languages_known_values[i][1]}','${languages_known_values[i][2]}','${languages_known_values[i][3]}')`
          let last_id_10 = await update_data(query5)
        }


      }
      if (languages_known_values[i].includes('English')) {
        if (languages_selected_db.includes('English')) {
          let query4 = `update Languages_known set Languages_known='${languages_known_values[i][0]}',can_read = '${languages_known_values[i][1]}',can_write='${languages_known_values[i][2]}',can_speak='${languages_known_values[i][3]}' where id=${id} and Languages_known='${languages_known_values[i][0]}'`
          let last_id_10 = await update_data(query4)
        }
        else {
          let query5 = `insert into Languages_known (id,Languages_known,can_read,can_write,can_speak) values (${id},'${languages_known_values[i][0]}','${languages_known_values[i][1]}','${languages_known_values[i][2]}','${languages_known_values[i][3]}')`
          let last_id_10 = await update_data(query5)
        }

      }
      if (languages_known_values[i].includes('Gujarati')) {
        if (languages_selected_db.includes('Gujarati')) {
          let query4 = `update Languages_known set Languages_known='${languages_known_values[i][0]}',can_read = '${languages_known_values[i][1]}',can_write='${languages_known_values[i][2]}',can_speak='${languages_known_values[i][3]}' where id=${id} and Languages_known='${languages_known_values[i][0]}'`
          let last_id_10 = await update_data(query4)
        }
        else {
          let query5 = `insert into Languages_known (id,Languages_known,can_read,can_write,can_speak) values (${id},'${languages_known_values[i][0]}','${languages_known_values[i][1]}','${languages_known_values[i][2]}','${languages_known_values[i][3]}')`
          let last_id_10 = await update_data(query5)
        }
      }
    }


    let technology_query = `select *  FROM Technologies_you_know where technology_id=${id}`
    let technology_result = await update_data(technology_query)

    technology_selected_db = []

    technology_result.forEach(element => {
      technology_selected_db.push(element.technologies_known)
    })

    let technology_checkBox = [data.php_checkbox, data.mysql_checkbox, data.laravel_checkbox, data.oracle_checkbox];
    let level_of_expertise = [data.php_technology, data.mysql_technology, data.laravel_technology, data.oracle_technology];
  
    for (let i = 0; i < technology_checkBox.length; i++) {
      if (technology_checkBox[i] !== undefined && technology_checkBox[i].includes('PHP')) {
        if (technology_selected_db.includes('PHP')) {
          let query5 = `update Technologies_you_know set technologies_known='${technology_checkBox[i]}' ,level_of_expertise= '${level_of_expertise[i]}' where technology_id = ${id} and technologies_known='${technology_checkBox[i]}'`
   
          let last_id_10 = await update_data(query5)
        }
        else {
          let query6 = `insert into Technologies_you_know(technology_id,technologies_known,level_of_expertise) values (${id},'${technology_checkBox[i]}','${level_of_expertise[i]}') `
          let last_id_10 = await update_data(query6)
        
        }
      }
      if (technology_checkBox[i] !== undefined && technology_checkBox[i].includes('Laravel')) {
        if (technology_selected_db.includes('Laravel')) {
          let query5 = `update Technologies_you_know set technologies_known='${technology_checkBox[i]}' ,level_of_expertise= '${level_of_expertise[i]}' where technology_id = ${id} and technologies_known='${technology_checkBox[i]}'`
       
          let last_id_10 = await update_data(query5)
        }
        else {
          let query6 = `insert into Technologies_you_know(technology_id,technologies_known,level_of_expertise) values (${id},'${technology_checkBox[i]}','${level_of_expertise[i]}') `
          let last_id_10 = await update_data(query6)
         
        }
      }
      if (technology_checkBox[i] !== undefined && technology_checkBox[i].includes('Mysql')) {
        if (technology_selected_db.includes('Mysql')) {
          let query5 = `update Technologies_you_know set technologies_known='${technology_checkBox[i]}' ,level_of_expertise= '${level_of_expertise[i]}' where technology_id = ${id} and technologies_known='${technology_checkBox[i]}'`
         
          let last_id_10 = await update_data(query5)
        }
        else {
          let query6 = `insert into Technologies_you_know(technology_id,technologies_known,level_of_expertise) values (${id},'${technology_checkBox[i]}','${level_of_expertise[i]}') `
          let last_id_10 = await update_data(query6)
          // console.log(query6)
        }
      }
      if (technology_checkBox[i] !== undefined && technology_checkBox[i].includes('Oracle')) {
        if (technology_selected_db.includes('Oracle')) {
          let query5 = `update Technologies_you_know set technologies_known='${technology_checkBox[i]}' ,level_of_expertise= '${level_of_expertise[i]}' where technology_id = ${id} and technologies_known='${technology_checkBox[i]}'`
          // console.log(query5)
          let last_id_10 = await update_data(query5)
        }
        else {
          let query6 = `insert into Technologies_you_know(technology_id,technologies_known,level_of_expertise) values (${id},'${technology_checkBox[i]}','${level_of_expertise[i]}') `
          let last_id_10 = await update_data(query6)
          
        }
      }
    };

    let referenceQuery = `select * from REFERNCE_CONTACT WHERE Reference_id = ${id}`
    let reference_result = await update_data(referenceQuery)
    let reference_result_db = [];
    reference_result.forEach(async (element) => {
      reference_result_db.push(element.NAME_OF_EMPLOYEE)
    })
    if (data.reference_name !== undefined) {

      if (reference_result_db.length > data.reference_name.length) {
        reference_result_db.forEach(async (element) => {
          try {
            if (!data.reference_name.includes(element)) {
              let referenceDelete = `Delete from REFERNCE_CONTACT where Reference_id = ${id}  and NAME_OF_EMPLOYEE='${element}'`
              
              let query = await update_data(referenceDelete)
            }

          }
          catch (error) {
            console.log(error)
          }
        })
      }
    }


    if (data.reference_name !== undefined) {
      let i = -1;
      data.reference_name.forEach(async element => {
        ++i;
       
        if (reference_result_db.includes(element)) {
          
          try {

            let query3 = `update REFERNCE_CONTACT set NAME_OF_EMPLOYEE= '${data.reference_name[i]}', REFERNCE_CONTACT = '${data.contact_no[i]}', RELATION = '${data.reference_relation[i]}' where NAME_OF_EMPLOYEE ='${element}'`
            let query3_1 = await update_data(query3)
          }
          catch (error) {
            console.log(error)
          }
        }
        else {

          let query1 = `insert into REFERNCE_CONTACT (Reference_id,NAME_OF_EMPLOYEE,REFERNCE_CONTACT,RELATION) VALUES (${id},'${element}',${data.contact_no[i]},'${data.reference_relation[i]}')`
                    let query3_1 = await update_data(query1)
        }
      })
    }
    let query7 = `update  PREFERENCE set Preferred_location= '${data.preferred_location}',Notice_period= '${data.notice_period}',Expected_ctc='${data.expexted_ctc}',Current_ctc='${data.current_ctc}',Department= '${data.department}'  where PREFERENCE_ID = ${id} `
    // console.log(query7)
    let last_id = await update_data(query7)
    // console.log("finally update")
    res.json()
  }
}
catch (err) {
  console.log(err)
}
module.exports = updateDatabase