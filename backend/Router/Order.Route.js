import express from 'express'
import { allOrders, PlaceOrder,  updateStatus, userOrders } from '../Controller/Order.Controller.js'
import isAuth from '../middleware/isAuth.js'
import Adminauth from '../middleware/AdminAuth.js'
const orderRouter = express.Router()

orderRouter.post("/placeorder",isAuth,PlaceOrder)

orderRouter.post("/userorder",isAuth,userOrders)

orderRouter.post("/list",Adminauth,allOrders)
orderRouter.post("/status",Adminauth,updateStatus)


export default orderRouter