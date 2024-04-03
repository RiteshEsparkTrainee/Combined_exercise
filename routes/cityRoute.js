const express = require("express")
var middleware = require('../middleware')
let citiesController = require("../controller/stateCity/citiesController")

const router = express.Router()

router.get('/api/cities',middleware,citiesController)

module.exports =router
