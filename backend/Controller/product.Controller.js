import uploadOnCloudinary from "../config/cloudinary.js";
import { Product } from "../Models/Product.model.js";
import fs from "fs";

// Helper to safely delete a file
const safeUnlink = (filePath) => {
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  } catch (err) {
    console.error(`Failed to delete file: ${filePath}`, err.message);
  }
};

export const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, subCategory, sizes, bestSeller } = req.body;

    // Validate images
    const imageKeys = ["image1", "image2", "image3", "image4"];
    for (const key of imageKeys) {
      if (!req.files[key]?.[0]) {
        return res.status(400).json({ message: `Missing image: ${key}` });
      }
    }

    // Upload images in parallel
    const uploadPromises = imageKeys.map(async (key) => {
      const localPath = req.files[key][0].path;
      const result = await uploadOnCloudinary(localPath);

      safeUnlink(localPath);

      if (!result?.url) {
        throw new Error(`Failed to upload ${key} to Cloudinary`);
      }

      return { key, url: result.url };
    });

    const uploadedImagesArray = await Promise.all(uploadPromises);
    const uploadedImages = uploadedImagesArray.reduce((acc, { key, url }) => {
      acc[key] = url;
      return acc;
    }, {});

    // Create product
    const product = await Product.create({
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: JSON.parse(sizes),
      bestSeller: bestSeller === "true",
      date: Date.now(),
      ...uploadedImages
    });

    return res.status(201).json({
      message: "Product added successfully",
      product
    });

  } catch (error) {
    console.error("Product add error:", error.message);
    return res.status(500).json({
      message: error.message || "Internal server error"
    });
  }
};


export const listProduct = async (req,res) =>{
  try {
    const product = await Product.find({})
    return res.status(200).json(product)
  } catch (error) {
    console.error(" List Product error:", error.message);
    return res.status(500).json({
      message: error.message || "Internal server error"
    });
    
    
  }
}

export const removeProduct = async (req,res) =>{
  try {
    const {id} = req.params;

    const product = await Product.findByIdAndDelete(id);
        return res.status(200).json(product)

    
  } catch (error) {
    console.error(" Remove Product error:", error.message);
    return res.status(500).json({
      message: error.message || "Internal server error"
    });
    
  }
}