import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";

// ⚠ Load .env variables at the top
dotenv.config();

// ✅ Configure Cloudinary once
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Helper: safe delete local file
const safeDelete = (filePath) => {
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  } catch (err) {
    console.error(`Failed to delete file ${filePath}:`, err.message);
  }
};

// Upload to Cloudinary
const uploadOnCloudinary = async (filePath) => {
  if (!filePath) {
    console.warn("No file path provided for Cloudinary upload");
    return null;
  }

  // Debug: log your env values ONCE to check if they are loaded
 

  try {
    const result = await cloudinary.uploader.upload(filePath)

    safeDelete(filePath);

    return result; // Contains url, public_id, etc.

  } catch (error) {
    console.error("Cloudinary upload error:", error.message);
    safeDelete(filePath);
    throw error; // Let caller handle the error
  }
};

export default uploadOnCloudinary;
