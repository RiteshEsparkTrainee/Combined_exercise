const express = require("express")
var middleware = require('../middleware')
let ajaxFetchApipost = require("../controller/ajaxPagination/postsController")
let ajaxFetchApiPostDetails = require("../controller/ajaxPagination/postDetailsController")

const router = express.Router()

router.get('/posts',middleware,ajaxFetchApipost)
router.get('/postDetails/:id',middleware,ajaxFetchApiPostDetails)

module.exports =router
