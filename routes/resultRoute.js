const express = require("express")
var middleware = require('../middleware')

let resultController = require("../controller/result/result_controller")

const router = express.Router()

router.get('/result',middleware,resultController)

module.exports =router