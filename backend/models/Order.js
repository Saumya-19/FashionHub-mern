const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: [
    {
      id: String,
      title: String,
      price: Number,
      quantity: Number,
      image: String,
    },
  ],
      total: {
      type: Number,
      required: true,
    },

  shippingDetails: {
      name: String,
      email: String,
      phone: String,
      address: String,
    },
    
},
 { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);
