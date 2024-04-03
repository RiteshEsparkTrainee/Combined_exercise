const express= require('express')
const loginRegister = require('./loginRegisterRoute')
const router = express.Router()

router.use('/',loginRegister)

module.exports = router
