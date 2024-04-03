const express = require("express")
var middleware = require('../middleware')
let attendanceReportController = require("../controller/attendenceReport/attendenceReportController")

const router = express.Router()

router.get('/report',middleware,attendanceReportController)

module.exports =router
