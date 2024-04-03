const express = require("express")
var middleware = require('../middleware')

let stateCityController = require("../controller/states_city/state_city_controller")

const router = express.Router()

router.get('/stateCity',middleware,stateCityController)

module.exports =router