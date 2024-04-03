const express = require("express")
var middleware = require('../middleware')
let ajaxFetchApipost = require("../controller/AJAX_pagination/posts_user_controller")
let ajaxFetchApiPostDetails = require("../controller/AJAX_pagination/postDetails_controller")

const router = express.Router()

router.get('/posts',middleware,ajaxFetchApipost)
router.get('/postDetails/:id',middleware,ajaxFetchApiPostDetails)

module.exports =router
