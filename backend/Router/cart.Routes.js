import express from 'express'
import { addToCart, getCurrentCart, updateCart } from '../Controller/Cart.controller.js';
import isAuth  from '../middleware/isAuth.js';
const cartRouter = express.Router();



cartRouter.post("/get",isAuth,getCurrentCart)
cartRouter.post("/add",isAuth,addToCart)
cartRouter.post("/update",isAuth,updateCart)




export default cartRouter