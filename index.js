const express = require('express')
const app = express()
const PORT = 8000

const userRoute = require(`./routes/user.route`)
const authRoute = require(`./routes/auth.route`)
const attendanceRoute = require(`./routes/attendance.route`)

app.use(`/users`, userRoute)
app.use(`/auth`, authRoute)
app.use(`/attendance`, attendanceRoute)



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});