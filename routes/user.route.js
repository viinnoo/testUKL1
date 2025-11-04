const express = require("express")
const app = express()

app.use(express.json())

const userController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller')

app.get('/', authController.authorizeUser, userController.getAllUser)
app.get('/:id', authController.authorizeUser, userController.getUserById)
app.post('/', authController.authorizeUser, userController.addUser)
app.put('/:id',authController.authorizeUser, userController.updateUser)

module.exports = app