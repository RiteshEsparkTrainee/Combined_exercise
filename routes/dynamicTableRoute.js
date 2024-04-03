const express = require("express")
var middleware = require('../middleware')
let dynamiTableController = require("../controller/dynamic_table/dynamic_table_controller")

const router = express.Router()

router.get('/dynamicTable',middleware,dynamiTableController)

module.exports =router
