var mysql = require('mysql')
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "db_exercises_schemas"
  });

  module.exports=con