
const express = require("express");


const Order = require("../models/Order");
const authMiddleware = require( "../middleware/Auth.js"); 

const router = express.Router();

// Save new order
router.post("/", authMiddleware, async (req, res) => {

console.log("Received order:", req.body); 

  const { items, total, shippingDetails } = req.body;

  if (!items || !total || !shippingDetails) {
    return res.status(400).json({ message: "Missing order data" });
  }

  try {
    const { items, total, shippingDetails } = req.body;

    const newOrder = new Order({
      userId: req.user._id, // from auth middleware
      items,
      total,
      shippingDetails,
    });

    await newOrder.save();
    res.status(201).json({ message: "Order placed successfully" });
  } catch (error) {
    console.error("Order save error:", error);
    res.status(500).json({ message: "Server error while saving order" });
  }
});


// Get all orders for a user
router.get("/", authMiddleware, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user._id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    console.error("Failed to fetch orders:", err);
    res.status(500).json({ message: "Server error while fetching orders" });
  }
});

module.exports = router;
