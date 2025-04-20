import { Router } from "express";
import Wishlist from "../models/wishlist.model.js"; // Import Wishlist model
import { verifyToken } from "../middlewares/authMiddleware.js";
import { Types } from "mongoose"; // Import Types from mongoose

const router = Router();

// ✅ Add item to wishlist (Protected Route)
router.post("/", verifyToken, async (req, res) => {
  try {
    const { productId } = req.body;
    const userId = req.user.userId; // Extract user ID from token

    console.log("POST request received for wishlist with productId:", productId);
    console.log("User ID from token:", userId);

    // Check if the item already exists in the wishlist
    const existingItem = await Wishlist.findOne({ userId, productId });
    if (existingItem) {
      return res.status(400).json({ error: "Item already in wishlist" });
    }

    const wishlistItem = new Wishlist({ userId, productId });
    await wishlistItem.save();

    console.log("Item added to wishlist:", wishlistItem);
    res.status(201).json({ message: "Item added to wishlist", wishlistItem });
  } catch (error) {
    console.error("Error adding item to wishlist:", error);
    res.status(500).json({ error: "Failed to add item to wishlist" });
  }
});

// ✅ Get all items in wishlist (Protected Route)
router.get("/", verifyToken, async (req, res) => {
  try {
    const userId = req.user.userId; // Extract user ID from token

    console.log("Fetching wishlist items for userId:", userId);

    const wishlistItems = await Wishlist.find({ userId }).populate({
      path: "productId", // Populate the productId field
      select: "name price imageUrl", // Select only the required fields from the Watch model
    });

    console.log("Fetched wishlist items:", wishlistItems);

    res.status(200).json({ wishlistItems });
  } catch (error) {
    console.error("Error fetching wishlist items:", error);
    res.status(500).json({ error: "Failed to fetch wishlist items" });
  }
});

// ✅ Remove item from wishlist (Protected Route)
router.delete("/:productId", verifyToken, async (req, res) => {
  try {
    const userId = req.user.userId; // Extract user ID from token
    const { productId } = req.params;

    console.log("DELETE request received for productId:", productId);
    console.log("User ID from token:", userId);

    if (!Types.ObjectId.isValid(productId)) {
      console.error("Invalid product ID:", productId);
      return res.status(400).json({ error: "Invalid product ID" });
    }

    const result = await Wishlist.findOneAndDelete({ userId, productId });

    if (!result) {
      console.error("Item not found in wishlist for productId:", productId);
      return res.status(404).json({ error: "Item not found in wishlist" });
    }

    console.log("Item removed from wishlist:", result);
    res.status(200).json({ message: "Item removed from wishlist" });
  } catch (error) {
    console.error("Error removing item from wishlist:", error);
    res.status(500).json({ error: "Failed to remove item from wishlist" });
  }
});

export default router;