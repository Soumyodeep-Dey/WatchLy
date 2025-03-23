import { Router } from "express";
import Cart from "../models/cart.model.js"; // Import Cart model
import { Types } from "mongoose";

const router = Router();

// ✅ Add item to cart
router.post("/", async (req, res) => {
  try {
    const { productId, userId } = req.body;

    if (!Types.ObjectId.isValid(productId) || !Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ error: "Invalid product or user ID" });
    }

    // Check if item already exists in cart
    let cartItem = await Cart.findOne({ userId, productId }); // Use Cart.findOne()

    if (cartItem) {
      cartItem.quantity += 1; // Increase quantity if already exists
    } else {
      cartItem = new Cart({ userId, productId, quantity: 1 });
    }

    await cartItem.save();

    res.status(201).json({ message: "Item added to cart", cartItem });
  } catch (error) {
    console.error("Error adding item to cart:", error);
    res.status(500).json({ error: "Failed to add item to cart" });
  }
});

export default router;
