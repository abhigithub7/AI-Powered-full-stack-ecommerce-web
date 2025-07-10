import express from 'express'
import dotenv from 'dotenv' 
import authRouter from './Router/auth.Route.js'
import connectDb from './config/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import userRouter from './Router/User.Route.js';
import productRouter from './Router/Product.route.js';
import cartRouter from './Router/cart.Routes.js';
import orderRouter from './Router/Order.Route.js';
dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
 app.use(express.urlencoded({extended:true,limit:"16kb"}))
 app.use(express.static("public"))

app.use(cors({
    origin:["https://zingy-blini-9efab0.netlify.app","https://lambent-truffle-05e149.netlify.app"],
    credentials:true,

}))
const PORT =  process.env.PORT || 2003  

app.get("/",(req,res)=>{
    
    res.send("Welcome to my ecommarce");
})



app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)
app.use("/api/product",productRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`);
    connectDb();
})

