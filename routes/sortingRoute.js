const express = require("express")
var middleware = require('../middleware')

let sortingController = require("../controller/sorting/sorting_controller")

const router = express.Router()

router.get('/sorting',middleware,sortingController)

module.exports =router