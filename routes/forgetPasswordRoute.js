const express = require("express")

let forgetPasswordController = require("../controller/forgetPassword/forgetPasswordController.js")
let forgetUsernameController = require("../controller/forgetPassword/validateUsername.js")
let validatePasswordLinkController = require("../controller/forgetPassword/validatePasswordLink.js")
let resetPasswordController = require("../controller/forgetPassword/resetPassword.js")
let forSaveController = require("../controller/forgetPassword/forPassSaveController.js")

const router = express.Router()
router.get('/forgetPass',forgetPasswordController)
router.post('/validateUsername',forgetUsernameController)
router.get('/validatePasswordLink',validatePasswordLinkController)
router.get('/resetPassword',resetPasswordController)
router.post('/forgetPasswordSave',forSaveController)

module.exports =router
