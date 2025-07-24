const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");
const protect = require("../middleware/Auth");

// Get cart for the logged-in user
router.get("/", protect, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id });
    res.json(cart || { userId: req.user.id, items: [] });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch cart" });
  }
});

// Add or update cart items
router.post("/", protect, async (req, res) => {
  const { items } = req.body;

  try {
    let cart = await Cart.findOne({ userId: req.user.id });

    if (cart) {
      cart.items = items;
    } else {
      cart = new Cart({ userId: req.user.id, items });
    }

    await cart.save();
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: "Failed to save cart" });
  }
});

// Clear cart
router.delete("/clear", protect, async (req, res) => {
  try {
    await Cart.findOneAndDelete({ userId: req.user.id });
    res.json({ message: "Cart cleared" });
  } catch (err) {
    res.status(500).json({ error: "Failed to clear cart" });
  }
});

module.exports = router;
