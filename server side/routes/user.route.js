const express = require('express')
const router = express.Router()

const {welcomeUser,VerifyUser, registerUser,postregisterUser, signinget,postSignin, Dashboard} = require("../controllers/user.controllers")
router.get('/welcome', welcomeUser)
router.get('/register', registerUser)
router.post('/register', postregisterUser)
router.post("/signin", postSignin)
router.get ('/signin', signinget)
router.get ('/dashboard', Dashboard)
router.get ('/verify', VerifyUser)









module.exports = router