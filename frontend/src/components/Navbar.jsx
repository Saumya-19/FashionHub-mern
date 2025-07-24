import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { useAuth } from "../context/AuthContext";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();
  const { clearCart } = useCart();
  const [open, setOpen] = useState(false);


  


  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">FashionHub</div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>

        {user ? (
          <>
            <span className="text-sm text-gray-200">Hi, {user.username}</span>

            <span className="relative">
      {user && (
        <div className="relative inline-block text-left">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
          >
             <ChevronDown size={16} />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
              <Link to="/order-history" className="block px-4 py-2 text-gray-700 hover:bg-gray-200 ">
                Order History
              </Link>
             
            </div>
          )}
        </div>
       )}
    </span>

            <button
              onClick={() => {
                logout();
                clearCart();
              }}
              className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600" to="/signup">Sign Up</Link>
          </>
        )}




        <Link to="/cart" className="relative">
          🛒
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
