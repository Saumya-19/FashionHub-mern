import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function OrderHistory() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/orders`, {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        });

        const data = await res.json();
        setOrders(data);
      } catch (err) {
        console.error("Error fetching orders:", err);
      }
    };

    if (user) fetchOrders();
  }, [user]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order, i) => (
          <div key={i} className="border p-4 mb-4 rounded shadow">
            
            <h3 className="font-semibold mb-2">Order #{i + 1}</h3>
            <p className="text-sm text-gray-600 mb-2">
              Placed on: {new Date(order.createdAt).toLocaleString()}
            </p>
            <ul className="mb-2">
              {order.items.map((item, index) => (
                <li key={index} className="text-sm">
                  {item.title} × {item.quantity} — ₹{item.price}
                </li>
              ))}
            </ul>
            <p className="font-semibold">Total: ₹{order.total}</p>
          </div>
        ))
      )}
    </div>
  );
}
