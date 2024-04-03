const express = require("express")
var middleware = require('../middleware')
let delimeterSearchController = require("../controller/delimeterSearch/delimeterSearchController")

const router = express.Router()

router.get('/delimeterSearch',middleware,delimeterSearchController)

module.exports =router
