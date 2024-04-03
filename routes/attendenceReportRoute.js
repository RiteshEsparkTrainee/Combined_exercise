const express = require("express")
var middleware = require('../middleware')
let attendanceReportController = require("../controller/attendence_report/attendence_report_controller")

const router = express.Router()

router.get('/report',middleware,attendanceReportController)

module.exports =router
