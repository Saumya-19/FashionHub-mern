

import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

export function CartProvider({ children }) {
  const { user } = useAuth() || {};
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (user && user.token) {
      fetchCart();
    } else {
      setCartItems([]);
    }
  }, [user]);

  const fetchCart = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/cart`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setCartItems(res.data.items || []);
    } catch (err) {
      console.error("Error fetching cart:", err);
    }
  };

  const saveCart = async (items) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/cart`,
        { items },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
    } catch (err) {
      console.error("Error saving cart:", err);
    }
  };

  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      const updated = exists
        ? prev.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prev, { ...product, quantity: 1 }];
      saveCart(updated);
      return updated;
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      saveCart(updated);
      return updated;
    });
  };

  const updateQuantity = (id, qty) => {
    setCartItems((prev) => {
      const updated = prev.map((item) =>
        item.id === id ? { ...item, quantity: qty } : item
      );
      saveCart(updated);
      return updated;
    });
  };

  const clearCart = async () => {
    setCartItems([]);
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/cart/clear`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
    } catch (err) {
      console.error("Error clearing cart:", err);
    }
  };

  const getTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
