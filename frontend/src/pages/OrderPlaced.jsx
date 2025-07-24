import { useLocation, Link } from "react-router-dom";

export default function OrderPlaced() {
  const location = useLocation();
  const { form, total, items } = location.state || {};

  if (!form || !items) {
    return (
      <div className="text-center p-10">
        <h2 className="text-2xl font-bold mb-4">No Order Found</h2>
        <Link to="/" className="text-blue-600 underline">Go Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 text-center">
      <h2 className="text-3xl font-bold text-green-600 mb-4">🎉 Order Placed Successfully!</h2>
      <p className="text-gray-700 mb-4">Thank you, {form.name}. Your order has been placed.</p>

      <div className="text-left border p-4 rounded bg-gray-100 mb-6">
        <h3 className="font-semibold">Order Summary:</h3>
        <ul className="list-disc list-inside">
          {items.map(item => (
            <li key={item.id}>
              {item.title} x {item.quantity || 1} — ₹{item.price * (item.quantity || 1)}
            </li>
          ))}
        </ul>
        <p className="mt-2 font-bold">Total: ₹{total}</p>
      </div>

      <div className="text-left border p-4 rounded bg-gray-100">
        <h3 className="font-semibold">Delivery To:</h3>
        <p>{form.name}</p>
        <p>{form.email}</p>
        <p>{form.phone}</p>
        <p>{form.address}</p>
      </div>

      <Link to="/" className="mt-6 inline-block px-6 py-2 bg-green-600 text-white rounded hover:bg-blue-700 transition">
        Continue Shopping
      </Link>
    </div>
  );
}
