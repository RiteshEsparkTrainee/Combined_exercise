const express = require("express")
var middleware = require('../middleware')
let citiesController = require("../controller/cssPractical3/cssPractical3")

const router = express.Router()

router.get('/cssPractical3',middleware,citiesController)

module.exports =router