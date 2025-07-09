import express from 'express'
import isAuth from '../middleware/isAuth.js'
import getCurrentUser, { getAdmin } from '../Controller/User.controller.js'
import Adminauth from '../middleware/AdminAuth.js'

const userRoutes = express.Router()

userRoutes.get('/getcurrentuser', isAuth , getCurrentUser)
userRoutes.get('/getadmin', Adminauth ,getAdmin)

export default userRoutes