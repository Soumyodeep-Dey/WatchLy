import { Router } from "express";
import Wishlist from "../models/wishlist.model.js"; // Import Wishlist model
import { verifyToken } from "../middlewares/authMiddleware.js";

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

    const wishlistItems = await Wishlist.find({ userId }).populate({
      path: "productId",
      select: "name price imageUrl", // Select only the required fields
    });

    res.status(200).json({ wishlistItems });
  } catch (error) {
    console.error("Error fetching wishlist items:", error);
    res.status(500).json({ error: "Failed to fetch wishlist items" });
  }
});

export default router;