let userlist = [
    {
        id: 1,
        name: "Vino",
        username: "PockySamane",
        password: "12345",
        role: "admin"
    },
    {
        id: 2,
        name: "Raka",
        username: "Dreamybull",
        password: "12345",
        role: "user"
    },
    {
        id: 3,
        name: "Ari",
        username: "XxGetPeggedByFaustxX",
        password: "12345",
        role: "user"
    },
    {
        id: 4,
        name: "Ishmael",
        username: "Fishmael",
        password: "12345",
        role: "user"
    }
];

function getAllUser(request, response) {
    return response.json({
        success: true,
        message: "All user have been loaded",
        data: userlist
    })
}

function getUserById(request, response) {
    let userID = Number(request.params.id)
    let userData = userlist.find(user => user.id === userID);

    return response.json({
        success: true,
        message: `User with id ${userID} has been loaded`,
        data: userData
    })
}

function addUser(request, response) {
    let newUser = {
        id: userlist.length + 1,
        name: request.body.name,
        username: request.body.username,
        password: request.body.password,
        role: request.body.role
    }
    userlist.push(newUser);

    return response.json({
        success: "success",
        message: "New user has been added",
        data: newUser
    })
}

function updateUser(request, response) {
    let userID = Number(request.params.id)
    let newUser = {
        id: userID,
        name: request.body.name,
        username: request.body.username,
        password: request.body.password,
        role: request.body.role
    }
    Object.assign(userlist[userID - 1], newUser)

    return response.json({
        success: "success",
        message: `User with id ${userID} has been updated`,
        data: userlist[userID - 1]
    })
}

module.exports = { userlist, getAllUser, getUserById, addUser, updateUser }