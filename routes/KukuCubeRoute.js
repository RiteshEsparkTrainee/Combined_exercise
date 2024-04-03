const express = require("express")
var middleware = require('../middleware')

let kukuCubeController = require("../controller/kukuCube/kukuCubeController")

const router = express.Router()

router.get('/kukuCube',middleware,kukuCubeController)

module.exports =router