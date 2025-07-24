const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: [
    {
      productId: String,
      title: String,
      price: Number,
      quantity: Number,
      image: String,
    },
  ],
});

module.exports = mongoose.model("Cart", cartSchema);
