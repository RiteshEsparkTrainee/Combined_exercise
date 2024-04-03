const express = require("express")
var middleware = require('../middleware')

let timeZoneConvertorController = require("../controller/timeZoneConverter/timeZoneConvertorController")

const router = express.Router()

router.get('/timeZoneConvertor',middleware,timeZoneConvertorController)

module.exports =router