import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { useEffect } from "react";

export default function CheckoutPage() {

  

const { user } = useAuth();
useEffect(() => {
  if (!user) {
    alert("Please sign in to checkout.");
    navigate("/signin");
  }
}, [user]);


  const location = useLocation();
  const navigate = useNavigate();
  const buyNowProduct = location.state?.product;
  const { cartItems, getTotal } = useCart();

  const itemsToCheckout = buyNowProduct?.price ? [buyNowProduct] : cartItems;

const total = itemsToCheckout.reduce(
  (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
  0
);

  // form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const { clearCart } = useCart(); 

const handleSubmit = async () => {
  if (!form.name || !form.email || !form.address || !form.phone) {
    alert("Please fill all fields!");
    return;
  }

  try {
    // ✅ Save the order to backend
await axios.post(
  `${import.meta.env.VITE_API_URL}/api/orders`,
  {
    items: itemsToCheckout,
    total,
    shippingDetails: form,
  },
  {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user?.token}`,
    },
  }
);


    // ✅ Clear cart only if this is not a "Buy Now" item
    if (!buyNowProduct) {
      await fetch(`${import.meta.env.VITE_API_URL}/api/cart/clear`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });

      clearCart(); // clear context
    }

    // ✅ Navigate to Order Success Page
    navigate("/order-placed", {
      state: { form, total, items: itemsToCheckout },
    });
  } catch (err) {
    console.error("Failed to place order:", err);
    alert("Something went wrong while placing the order.");
  }
};


  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      {itemsToCheckout.map((item) => (
        <div key={item.id} className="flex items-center justify-between border-b pb-4 mb-4">
          <div className="flex items-center gap-4">
            <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded" />
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">₹{item.price}</p>
            </div>
          </div>
          <p>Qty: {item.quantity || 1}</p>
        </div>
      ))}

      <form className="space-y-4 mb-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleInput}
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleInput}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleInput}
          className="w-full border p-2 rounded"
        />
        <textarea
          name="address"
          placeholder="Delivery Address"
          value={form.address}
          onChange={handleInput}
          className="w-full border p-2 rounded"
        />
      </form>

      <div className="text-right">
        <h3 className="text-xl font-bold">Total: ₹{total}</h3>
        <button
          onClick={handleSubmit}
          className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
