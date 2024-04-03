const express = require("express")
var middleware = require('../middleware')
let dynamiTableController = require("../controller/dynamicTable/dynamicTableController")

const router = express.Router()

router.get('/dynamicTable',middleware,dynamiTableController)

module.exports =router
