const express = require("express")
var middleware = require('../middleware')

let searchController = require("../controller/search/search_controller")

const router = express.Router()

router.get('/search',middleware,searchController)

module.exports =router