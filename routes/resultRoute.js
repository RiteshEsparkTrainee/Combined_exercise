const express = require("express")
var middleware = require('../middleware')

let resultController = require("../controller/result/resultController")
let resultDetailsController = require("../controller/result/resultDetailsController")

const router = express.Router()

router.get('/result',middleware,resultController)
router.get('/resultDetails',middleware,resultDetailsController)

module.exports =router