const express = require("express")
var middleware = require('../middleware')
let citiesController = require("../controller/states_city/cities_controller")

const router = express.Router()

router.get('/api/cities',middleware,citiesController)

module.exports =router
