import mongoose, { Types } from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        
    },
    email:{
        type: String,
        required: true,
        lowercase : true
    },
    password:{
        type:String,
        required:false
       
    },
    cartData:{
        type:Object,
        default:{}
    }
},{timestamps:true,minimize:false})


export const User = mongoose.model("User",UserSchema);