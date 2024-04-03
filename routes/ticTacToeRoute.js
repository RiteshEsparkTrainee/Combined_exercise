const express = require("express")
var middleware = require('../middleware')

let ticTacToeController = require("../controller/ticTacToe/ticTacToeController")

const router = express.Router()

router.get('/ticTacToe',middleware,ticTacToeController)

module.exports =router