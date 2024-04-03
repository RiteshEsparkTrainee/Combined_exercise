const express = require("express")
var middleware = require('../middleware')

let sortingController = require("../controller/sorting/sortingController")

const router = express.Router()

router.get('/sorting',middleware,sortingController)

module.exports =router