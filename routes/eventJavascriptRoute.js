const express = require("express")
var middleware = require('../middleware')

let eventsJavascriptController = require("../controller/javascriptEvents/eventsJSController")

const router = express.Router()

router.get('/eventsJavascript',middleware,eventsJavascriptController)

module.exports =router