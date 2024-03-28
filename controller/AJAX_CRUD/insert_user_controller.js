const con = require('../../config/connection')
try{
var insertUser= function (req, res) {
    const basicDetailsResult = [{}]
    const educationMasterDetails = [{}]
    const workExperienceDetails = [{}]
    const technologiesKnownDetails = [{}]
    const languagesKnownDetails = [{}]
    const referenceDetails = [{}]
    const preferenceDetails = [{}]
    res.render('AJAX_CRUD_form.ejs', { basicDetailsResult, educationMasterDetails, workExperienceDetails, technologiesKnownDetails, languagesKnownDetails, referenceDetails, preferenceDetails })
  }
}
catch(err)
{
    console.log(err)
}
module.exports= insertUser