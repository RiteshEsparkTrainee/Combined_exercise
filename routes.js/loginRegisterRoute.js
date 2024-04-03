const express = require("express")


let dashboardController = require("../controller/login_register/dashboard_controller")
let registerController = require("../controller/login_register/register_controller.js")
let activateController = require("../controller/login_register/activate_controller.js")
let registerSaveController = require("../controller/login_register/register_save_controller.js")
let loginSaveController = require("../controller/login_register/login_save.js")
let loginController = require("../controller/login_register/login_controller.js")
let logsaveController = require("../controller/login_register/logsave_controller.js")
const router=express.Router()

router.get('/',dashboardController)
router.get('/register',registerController)
router.get('/activate',activateController)
router.post('/save',registerSaveController)
router.get('/login/save',loginSaveController)
router.get('/login',loginController)
router.post('/logSave',logsaveController)

module.exports=router