const express = require("express")
var middleware = require('../middleware')

let timeZoneConvertorController = require("../controller/time_zone_converter/timeZoneConvertor_controller")

const router = express.Router()

router.get('/timeZoneConvertor',middleware,timeZoneConvertorController)

module.exports =router