const express = require("express")
var middleware = require('../middleware')

let ticTacToeController = require("../controller/tic_tac_toe/tic_tac_toe_controller")

const router = express.Router()

router.get('/ticTacToe',middleware,ticTacToeController)

module.exports =router