import express from "express";
import Watch from "../models/watch.model.js"; // Import Watch model

const router = express.Router();

// ✅ Get all watches
router.get("/", async (req, res) => {
  try {
    const watches = await Watch.find();
    res.json(watches);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Get a single watch by ID
router.get("/:id", async (req, res) => {
  try {
    const watch = await Watch.findById(req.params.id);
    if (!watch) return res.status(404).json({ error: "Watch not found" });
    res.json(watch);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Create a new watch
router.post("/", async (req, res) => {
  try {
    const newWatch = new Watch(req.body);
    await newWatch.save();
    res.status(201).json(newWatch);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ✅ Update a watch
router.put("/:id", async (req, res) => {
  try {
    const updatedWatch = await Watch.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedWatch) return res.status(404).json({ error: "Watch not found" });
    res.json(updatedWatch);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Delete a watch
router.delete("/:id", async (req, res) => {
  try {
    const deletedWatch = await Watch.findByIdAndDelete(req.params.id);
    if (!deletedWatch) return res.status(404).json({ error: "Watch not found" });
    res.json({ message: "Watch deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
