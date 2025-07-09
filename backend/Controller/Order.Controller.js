import Order from "../Models/Order.js";
import {User} from "../Models/User.Model.js"


export const PlaceOrder = async (req,res) =>{
    try {
        const {items,amount,address} = req.body;
        const userId = req.userId;

        const orderData = {
            items,
            amount,
            address,
            userId,
            paymentMethod:'Cash on Delivery',
            payment:false,
            date:Date.now()

        }

        const NewOrder = new Order(orderData)
        await NewOrder.save();

        await User.findByIdAndUpdate(userId,{cartData:{}})

        return res.status(201).json({
            message:"Order Palced"
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:"Order place error"
        })
        
    }

}


// Update with actual path




export const userOrders = async (req,res) =>{
    try {
        const userId = req.userId;

    const Orders = await Order.find({userId})
    return res.status(200).json(Orders)
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:"User order error"
        })
        
    }
    
}




export const allOrders = async (req,res) =>{

    try {
        const orders = await Order.find({})
        res.status(200).json(orders)
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:"admin allorders error"})
        
    }
}


export const updateStatus = async (req,res) =>{
    try {
        const {orderId, status} = req.body;

        await Order.findByIdAndUpdate(orderId,{status})
         res.status(201).json({mesaage:"status updated"})
        
    } catch (error) {
         console.log(error)
        return res.status(500).json({
            message:"admin order update error"})
        
    }

}