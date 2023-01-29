import express from 'express'
const router = express.Router()

import rateLimiter from 'express-rate-limit'

const apiLimiter = rateLimiter({
    windowMs: 15*60*1000, // 15 minutes
    max: 10, //max ten request for the IP address
    message: 'Too many request from the IP address, please try again after 15 minutes'
})

import {register, login, updateUser ,getCurrentUser, logout,} from '../controllers/authController.js'
import authenticateUser from '../middleware/auth.js'

router.route('/register').post(apiLimiter, register)
router.route('/login').post(apiLimiter, login)    // everyone can access register and login before logging in, now we set up the logic for enabling users to access those routes.
router.route('/logout').get(logout)
router.route('/updateUser').patch(authenticateUser, updateUser)
router.route('/getCurrentUser').get(authenticateUser, getCurrentUser)

export default router
