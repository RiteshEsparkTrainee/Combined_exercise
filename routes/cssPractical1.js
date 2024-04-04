const express = require("express")
var middleware = require('../middleware')
let citiesController = require("../controller/cssPractical1/cssPractical1")

const router = express.Router()

router.get('/cssPractical1',middleware,citiesController)

module.exports =router