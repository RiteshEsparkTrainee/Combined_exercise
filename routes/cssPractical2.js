const express = require("express")
var middleware = require('../middleware')
let citiesController = require("../controller/cssPractical2/cssPractical2")

const router = express.Router()

router.get('/cssPractical2',middleware,citiesController)

module.exports =router