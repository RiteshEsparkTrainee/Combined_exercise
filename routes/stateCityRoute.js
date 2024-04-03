const express = require("express")
var middleware = require('../middleware')

let stateCityController = require("../controller/stateCity/stateCityController")

const router = express.Router()

router.get('/stateCity',middleware,stateCityController)

module.exports =router