import mongoose from "mongoose";

 const productSchema = mongoose.Schema({
    description:{
        required: true,
        type : String
    },
    name:{
        required: true,
        type : String
    },
    image1:{
        required: true,
        type : String
    },
    image2:{
        required: true,
        type : String
    },
    image3:{
        required: true,
        type : String
    },
    image4:{
        required: true,
        type : String
    },
    price:{
        type: Number,
        default: 0
    },
    subCategory:{
        type: String,
        required:true
        
        
    },
    category:{
        type: String,
        required: true,

    },
    sizes:{
        type: Array,
        required:true
    },
    date:{
        type:Number,
        required:true
    },
    bestSeller:{
        type:Boolean
    }


 },{timestamps:true}) 

export const Product = mongoose.model("Product",productSchema) 