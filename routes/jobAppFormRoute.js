const express = require("express")
let middleware = require('../middleware')
let jobAppFormIndexController = require("../controller/AJAX_CRUD/Ajax_index")
let insertUserController = require("../controller/AJAX_CRUD/insert_user_controller.js")
let updateDatabaseController = require("../controller/AJAX_CRUD/update_db_controller.js")
let insertSaveController = require("../controller/AJAX_CRUD/save_user_controller.js")
let userlistController = require("../controller/AJAX_CRUD/userList_controller.js")
let updateUserController = require("../controller/AJAX_CRUD/update_user_controller.js")


const router = express.Router()

router.get('/jobAppForm',middleware,jobAppFormIndexController)
router.get('/jobAppForm/insert',middleware,insertUserController)
router.post('/jobAppForm/updateDb',middleware,updateDatabaseController)
router.post('/jobAppForm/save',middleware,insertSaveController)
router.get('/jobAppForm/userlist',middleware,userlistController)
router.get('/jobAppForm/update',middleware,updateUserController)




module.exports =router
