const express = require("express")
var middleware = require('../middleware')

let paginationOrderByController = require("../controller/pagination_orderBy/pagination_orderBy_controller")

const router = express.Router()

router.get('/listdatabase',middleware,paginationOrderByController)

module.exports =router