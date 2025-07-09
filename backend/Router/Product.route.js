import express from "express";
import { addProduct, listProduct, removeProduct } from "../Controller/product.Controller.js";
import upload from "../middleware/Multer.js";
import Adminauth from "../middleware/AdminAuth.js";

const productRouter = express.Router();

productRouter.post("/addproduct",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 }
  ]),
  addProduct
);


productRouter.get("/list",listProduct)
productRouter.post("/remove/:id",Adminauth,removeProduct)

export default productRouter;
