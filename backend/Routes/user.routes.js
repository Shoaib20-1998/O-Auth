const express= require('express')
const { SignupUser, LoginUser,ReadAllUsers } = require('../Controllers/user.controller')
const Routes = express.Router()

Routes.post('/signup',SignupUser)
Routes.post('/login',LoginUser)
Routes.get('/',ReadAllUsers)


module.exports={
    Routes
}
