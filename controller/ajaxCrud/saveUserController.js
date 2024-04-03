const con = require('../../config/connection')
try {
  var saveUser = async function (req, res) {
    console.log(res.statusCode);
    console.log(req.body)
    const { fname, lname, email, designation, address1, address2, phone, city, gender, states, zipcode, relationship_status, dateofbirth } = req.body
    let query = `insert into BASIC_DETAILS (FIRST_NAME,LAST_NAME,email,DESIGNATION,ADDRESS1,ADDRESS2,PHONE_NO,city,GENDER,ZIP_CODE,
          RELATIONSHIP_STATUS,DATE_OF_BIRTH,STATE) Values('${fname}','${lname}','${email}','${designation}','${address1}','${address2}',
          ${phone},'${city}','${gender}',
          '${zipcode}','${relationship_status}'
          ,'${dateofbirth}','${states}')`

    const insert_data = (query) => {
      return new Promise(function (resolve, reject) {
        con.query(query, function (err, result) {
          if (err) {

            reject(err)
          }
          else {

            resolve(result.insertId)
          }

        })
      })
    }
    //basic_details
    let last_inserted_id = await insert_data(query)
    //Education Details
    const { board_name, passing_year, percentage } = req.body
  
    let query_1;
    if (typeof board_name === 'string') {
      query_1 = `insert into education_master (education_id,name_of_board,passing_year,percentage) values (${last_inserted_id},'${board_name}',${passing_year},${percentage})`
    }
    else if (board_name === undefined) {
      console.log("user does not choose any education")
    }
    else {
      query_1 = `insert into education_master (education_id,name_of_board,passing_year,percentage) values `
      const values = [];
      for (let i = 0; i < board_name.length; i++) {
        values.push(`(${last_inserted_id},'${board_name[i]}',${passing_year[i]},${percentage[i]})`)
      }
      query_1 += values.join(',')


    }
 
    if (board_name !== undefined) {
      let last_id_2 = await insert_data(query_1)
    }
    const { company_name, designation1, from, to } = req.body   
   
    let query1_2;
    if (typeof company_name === 'string') {
      query1_2 = `insert into WORK_EXPERIENCE (worker_id,Company_name,Designation,_FROM,_TO) values (${last_inserted_id},'${company_name}','${designation1}','${from}','${to}')`
    }
    else if (company_name === undefined) {
      console.log("user does not choose any company")
    }
    else {
      query1_2 = `insert into WORK_EXPERIENCE (worker_id,Company_name,Designation,_FROM,_TO) values `
      const values = [];
      for (let i = 0; i < company_name.length; i++) {
        values.push(`(${last_inserted_id},'${company_name[i]}','${designation1[i]}','${from[i]}','${to[i]}')`)
      }
      query1_2 += values.join(',')


    }
    if (company_name !== undefined) {
      let last_id_3 = await insert_data(query1_2)
    }

    let { hindi_checkbox, hindi_read, hindi_write, hindi_speak } = req.body
    if (hindi_read === undefined) {
      hindi_read = 'NO'
    }
    if (hindi_write === undefined) {
      hindi_write = 'NO'
    }
    if (hindi_speak === undefined) {
      hindi_speak = 'NO'
    }

    let { english_checkbox, english_read, english_write, english_speak } = req.body
    if (english_read === undefined) {
      english_read = 'NO'
    }
    if (english_write === undefined) {
      english_write = 'NO'
    }
    if (english_speak === undefined) {
      english_speak = 'NO'
    }


    let { gujarati_checkbox, gujarati_read, gujarati_write, gujarati_speak } = req.body
    if (gujarati_read === undefined) {
      gujarati_read = 'NO'
    }
    if (gujarati_write === undefined) {
      gujarati_write = 'NO'
    }
    if (gujarati_speak === undefined) {
      gujarati_speak = 'NO'
    }

    let languages_known_values = [[hindi_checkbox, hindi_read, hindi_write, english_speak], [english_checkbox, english_read, english_write, english_speak],
    [gujarati_checkbox, gujarati_read, gujarati_write, gujarati_speak]]

    for (let i = 0; i < languages_known_values.length; i++) {
      if (languages_known_values[i][0] !== undefined) {
        let query11 = `insert into Languages_known (id,Languages_known,can_read,can_write,can_speak) values (${last_inserted_id},'${languages_known_values[i][0]}','${languages_known_values[i][1]}','${languages_known_values[i][2]}','${languages_known_values[i][3]}')`
    
        let last_id_9 = await insert_data(query11)
      }
    }

    let { php_checkbox, mysql_checkbox, laravel_checkbox, oracle_checkbox } = req.body;
    let { php_technology, mysql_technology, laravel_technology, oracle_technology } = req.body;
    let technology_checkBox = [php_checkbox, mysql_checkbox, laravel_checkbox, oracle_checkbox];
    let level_of_expertise = [php_technology, mysql_technology, laravel_technology, oracle_technology];
   
    for (let i = 0; i < technology_checkBox.length; i++) {
      if (technology_checkBox[i] != undefined) {
        let query12 = `insert into Technologies_you_know (technology_id,technologies_known,level_of_expertise) values (${last_inserted_id},
              '${technology_checkBox[i]}','${level_of_expertise[i]}')`
  
        let last_id_10 = await insert_data(query12)
      }
    };

    const { reference_name, contact_no, reference_relation } = req.body 

    let query1_3;
    if (typeof reference_name === 'string') {
      query1_3 = `insert into REFERNCE_CONTACT (Reference_id,NAME_OF_EMPLOYEE,REFERNCE_CONTACT,RELATION) VALUES (${last_inserted_id},'${reference_name}',${contact_no},'${reference_relation}')`
    }
    else if (reference_name === undefined) {
      console.log("User does not choose any reference")
    }
    else {
      query1_3 = `insert into REFERNCE_CONTACT (Reference_id,NAME_OF_EMPLOYEE,REFERNCE_CONTACT,RELATION) VALUES  `
      const values = [];
      for (let i = 0; i < reference_name.length; i++) {
        values.push(`(${last_inserted_id},'${reference_name[i]}',${contact_no[i]},'${reference_relation[i]}')`)
      }
      query1_3 += values.join(',')


    }
    if (reference_name !== undefined) {
      let last_id_10 = await insert_data(query1_3)
    }

    //Preference Table
    const { preferred_location, notice_period, department, expexted_ctc, current_ctc } = req.body;

    if (expexted_ctc != "") {
      let query14 = `insert into PREFERENCE (PREFERENCE_ID,Preferred_location,Notice_period,Expected_ctc,Current_ctc,Department) values(${last_inserted_id},'${preferred_location}','${notice_period}','${expexted_ctc}','${current_ctc}','${department}') `
      let last_id_10 = await insert_data(query14)

    }

    res.json()
  }
}
catch (err) {
  console.log(err)
}
module.exports = saveUser


