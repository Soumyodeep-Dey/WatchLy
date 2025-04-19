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

    console.log("POST request received for cart with productId:", productId);
    console.log("User ID from token:", userId);

    if (!Types.ObjectId.isValid(productId)) {
      console.error("Invalid product ID:", productId);
      return res.status(400).json({ error: "Invalid product ID" });
    }

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

// ✅ Get all items in cart (Protected Route)
router.get("/", verifyToken, async (req, res) => {
  try {
    const userId = req.user.userId; // Extract user ID from token

    const cartItems = await Cart.find({ userId }).populate({
      path: "watchtId",
      select: "name price imageUrl", // Select only the required fields
    });
    res.status(200).json({ cartItems });
  } catch (error) {
    console.error("Error fetching cart items:", error);
    res.status(500).json({ error: "Failed to fetch cart items" });
  }
});

// ✅ Remove item from cart (Protected Route)
router.delete("/:productId", verifyToken, async (req, res) => {
  try {
    const userId = req.user.userId; // Extract user ID from the token
    const { productId } = req.params;

    console.log("DELETE request received for productId:", productId);
    console.log("User ID from token:", userId);

    if (!Types.ObjectId.isValid(productId)) {
      console.error("Invalid product ID:", productId);
      return res.status(400).json({ error: "Invalid product ID" });
    }

    const result = await Cart.findOneAndDelete({ userId, productId });

    if (!result) {
      console.error("Item not found in cart for productId:", productId);
      return res.status(404).json({ error: "Item not found in cart" });
    }

    console.log("Item removed from cart:", result);
    res.status(200).json({ message: "Item removed from cart" });
  } catch (error) {
    console.error("Error removing item from cart:", error);
    res.status(500).json({ error: "Failed to remove item from cart" });
  }
});

// ✅ Update quantity of an item in the cart (Protected Route)
router.patch("/:productId", verifyToken, async (req, res) => {
  try {
    const userId = req.user.userId; // Extract user ID from the token
    const { productId } = req.params;
    const { quantityChange } = req.body;

    console.log("PATCH request received for productId:", productId);
    console.log("User ID from token:", userId);
    console.log("Quantity change:", quantityChange);

    if (!Types.ObjectId.isValid(productId)) {
      console.error("Invalid product ID:", productId);
      return res.status(400).json({ error: "Invalid product ID" });
    }

    const cartItem = await Cart.findOne({ userId, productId });

    if (!cartItem) {
      console.error("Item not found in cart for productId:", productId);
      return res.status(404).json({ error: "Item not found in cart" });
    }

    console.log("Current cart item:", cartItem);

    cartItem.quantity += quantityChange;

    if (cartItem.quantity <= 0) {
      await Cart.findOneAndDelete({ userId, productId });
      console.log("Item removed from cart due to zero quantity:", productId);
      return res.status(200).json({ message: "Item removed from cart" });
    }

    await cartItem.save();
    console.log("Cart item updated:", cartItem);
    res.status(200).json({ message: "Cart item updated", cartItem });
  } catch (error) {
    console.error("Error updating cart item quantity:", error);
    res.status(500).json({ error: "Failed to update cart item quantity" });
  }
});

export default router;
