const express = require("express")
let middleware = require('../middleware')
let jobAppFormIndexController = require("../controller/ajaxCrud/ajaxIndexController.js")
let insertUserController = require("../controller/ajaxCrud/insertUserController.js")
let updateDatabaseController = require("../controller/ajaxCrud/updateDbController.js")
let insertSaveController = require("../controller/ajaxCrud/saveUserController.js")
let userlistController = require("../controller/ajaxCrud/userlistController.js")
let updateUserController = require("../controller/ajaxCrud/updateUserController.js")


const router = express.Router()

router.get('/jobAppForm',middleware,jobAppFormIndexController)
router.get('/jobAppForm/insert',middleware,insertUserController)
router.post('/jobAppForm/updateDb',middleware,updateDatabaseController)
router.post('/jobAppForm/save',middleware,insertSaveController)
router.get('/jobAppForm/userlist',middleware,userlistController)
router.get('/jobAppForm/update',middleware,updateUserController)




module.exports =router
