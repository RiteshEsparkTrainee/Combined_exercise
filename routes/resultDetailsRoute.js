const express = require("express")
var middleware = require('../middleware')

let resultDetailsController = require("../controller/result/result_details_controller")

const router = express.Router()

router.get('/resultDetails',middleware,resultDetailsController)

module.exports =router