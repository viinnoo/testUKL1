const express = require('express')
const app = express()

app.use(express.json())

const authController = require('../controllers/auth.controller');
const attendanceController = require('../controllers/attendance.controller');

app.get("/", authController.authorizeUser, attendanceController.getAllAttendance)
app.get("/:user_id", authController.authorizeUser, attendanceController.getAttendancesByUserId)
app.get("/summary/:user_id", authController.authorizeUser, attendanceController.getSummaryByUserId)
app.post("/", authController.authorizeUser, attendanceController.addAttendance)
app.post("/analysis", authController.authorizeUser, attendanceController.getAnalysis)

module.exports = app