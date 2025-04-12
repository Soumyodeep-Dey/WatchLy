import { Router } from "express";
import Cart from "../models/cart.model.js"; // Import Cart model
import { Types } from "mongoose";
import { verifyToken } from "../middlewares/authMiddleware.js"; // Import auth middleware

const router = Router();

// ✅ Add item to cart (Protected Route)
router.post("/", verifyToken, async (req, res) => {
  try {
    const { productId } = req.body;
    const userId = req.user.userId; // Extract user ID from token

    console.log("Received productId:", productId);
    console.log("Decoded userId from token:", userId);

    if (!Types.ObjectId.isValid(productId)) {
      console.error("Invalid product ID:", productId);
      return res.status(400).json({ error: "Invalid product ID" });
    }

    // Check if item already exists in cart
    let cartItem = await Cart.findOne({ userId, productId });

    if (cartItem) {
      cartItem.quantity += 1; // Increase quantity
    } else {
      cartItem = new Cart({ userId, productId, quantity: 1 });
    }

    await cartItem.save();
    console.log("Cart item saved:", cartItem);
    res.status(201).json({ message: "Item added to cart", cartItem });
  } catch (error) {
    console.error("Error adding item to cart:", error);
    res.status(500).json({ error: "Failed to add item to cart" });
  }
});

export default router;
