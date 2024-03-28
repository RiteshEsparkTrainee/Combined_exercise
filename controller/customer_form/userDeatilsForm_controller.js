const con = require('../../config/connection')
var userDetailsForm = (req, res) => {
    var fetchingdata = req.body;
    console.log(JSON.stringify(req.body))
    var val = Object.keys(fetchingdata).toString();

    var data = fs.readFileSync('user_data.json', "utf-8");
    var data3 = JSON.parse(data)

    console.log(typeof data3);

    let ind;
    for (let i = 0; i < data3.length; i++) {
      if (data3[i].id === val) {
        ind = i;
        break;
      }
    }
    data3.splice(ind, 1)
    console.log("REAL_PASS" + JSON.stringify(data3))

    fs.writeFileSync('user_data.json', JSON.stringify(data3))
    fs.readFile('user_data.json', 'utf8', function (err, data) {
      userdata = JSON.parse(data);

      console.log(userdata)
      console.log(typeof (userdata))
      res.render('userdetailsform', { userdata })
    })

  }
  module.exports=userDetailsForm