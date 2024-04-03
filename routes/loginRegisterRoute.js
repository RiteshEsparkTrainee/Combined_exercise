const express = require("express")


let dashboardController = require("../controller/loginRegister/dashboardController.js")
let registerController = require("../controller/loginRegister/registerController.js")
let activateController = require("../controller/loginRegister/activateController.js")
let registerSaveController = require("../controller/loginRegister/registerSaveController.js")
let loginSaveController = require("../controller/loginRegister/loginSave.js")
let loginController = require("../controller/loginRegister/loginController.js")
let logsaveController = require("../controller/loginRegister/logsaveController.js")
const router=express.Router()

router.get('/',dashboardController)
router.get('/register',registerController)
router.get('/activate',activateController)
router.post('/save',registerSaveController)
router.get('/login/save',loginSaveController)
router.get('/login',loginController)
router.post('/logSave',logsaveController)

module.exports=router