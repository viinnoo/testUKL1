const express = require('express')
const app = express()

app.use(express.json())

const authController = require('../controllers/auth.controller');

app.post("/", authController.authenticateUser)
app.get ("/", authController.authorizeUser)

module.exports = app