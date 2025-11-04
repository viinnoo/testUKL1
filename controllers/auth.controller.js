const jwt = require("jsonwebtoken")
const { userlist } = require("./user.controller")
const secret = `mokleters`

function authenticateUser(request, response) {
    let datalogin = {
        username: request.body.username,
        password: request.body.password
    }

    let userData = userlist.find(user => user.username === datalogin.username && user.password === datalogin.password)

    if(userData) {
        let payload = JSON.stringify(userData)
        console.log(payload)

        let token = jwt.sign(payload, secret)

        return response.json({
            success: true,
            logged: true,
            message: "User authenticated successfully",
            token: token,
            data: userData
        })
    }
    return response.json({
        success: false,
        logged: false,
        message: "Authentication Failed. Invalid username or password"
    })
}

function authorizeUser(request, response, next) {
    const authHeader = request.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1]

        let verifiedUser = jwt.verify(token, secret);
        if (!verifiedUser) {
            return response.json({
                success: false,
                auth: false,
                message: "User not authorized"
            })
        }

        request.user = verifiedUser
        next();
    } else {
        return response.json({
            success: false,
            auth: false,
        message: "User not authorized, token not provided"
        })
    }
}

module.exports = { authenticateUser, authorizeUser }