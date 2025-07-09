import { User } from "../Models/User.Model.js";

// ADD TO CART
export const addToCart = async (req, res) => {
  try {
    const { itemId, size } = req.body;

    const userData = await User.findById(req.userId);

    if (!userData) {
      return res.status(404).json({ message: "User Not Found" });
    }

    let cartData = userData.cartData || {};

    if (!cartData[itemId]) {
      cartData[itemId] = {};
    }

    cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;

    await User.findByIdAndUpdate(req.userId, { cartData });

    return res.status(201).json({ message: "Cart added successfully" });
  } catch (error) {
    console.error("Add to cart error:", error);
    return res.status(500).json({ message: "Add to cart error" });
  }
};

// UPDATE CART
export const updateCart = async (req, res) => {
  try {
    const { itemId, size, quantity } = req.body;

    const userData = await User.findById(req.userId);

    if (!userData) {
      return res.status(404).json({ message: "User Not Found" });
    }

    let cartData = userData.cartData || {};

    if (!cartData[itemId]) {
      cartData[itemId] = {};
    }

    cartData[itemId][size] = quantity;

    await User.findByIdAndUpdate(req.userId, { cartData });

    return res.status(200).json({ message: "Cart updated successfully" });
  } catch (error) {
    console.error("Update cart error:", error);
    return res.status(500).json({ message: "Update cart error" });
  }
};

// GET CURRENT CART
export const getCurrentCart = async (req, res) => {
  try {
    const userData = await User.findById(req.userId);

    if (!userData) {
      return res.status(404).json({ message: "User Not Found" });
    }

    const cartData = userData.cartData || {};

    return res.status(200).json(cartData);
  } catch (error) {
    console.error("Get cart error:", error);
    return res.status(500).json({ message: "Get cart error" });
  }
};
