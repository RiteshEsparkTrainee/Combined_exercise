const express = require("express")
var middleware = require('../middleware')

let paginationOrderByController = require("../controller/paginationOrderBy/paginationOrderByController")

const router = express.Router()

router.get('/listdatabase',middleware,paginationOrderByController)

module.exports =router