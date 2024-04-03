const express = require("express")
var middleware = require('../middleware')

let kukuCubeController = require("../controller/Kuku_cube/kuku_cube_controller.js")

const router = express.Router()

router.get('/kukuCube',middleware,kukuCubeController)

module.exports =router