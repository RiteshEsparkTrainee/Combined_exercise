const express = require("express")
var middleware = require('../middleware')
let delimeterSearchController = require("../controller/delimeter_search/delimeterSearchController")

const router = express.Router()

router.get('/delimeterSearch',middleware,delimeterSearchController)

module.exports =router
