import React, { createContext, useContext, useState, useEffect } from "react";

// 1. Create the context
const AuthContext = createContext(null);

// 2. Provider
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("authUser");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setUser(parsed);
      } catch (err) {
        console.error("Failed to parse stored authUser:", err);
        localStorage.removeItem("authUser");
      }
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem("authUser", JSON.stringify(userData));
    setUser(userData);
    console.log("Login response:", userData);
  };

  const logout = () => {
    localStorage.removeItem("authUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// 3. Hook
function useAuth() {
  return useContext(AuthContext);
}

// 4. Export
export { AuthProvider, useAuth };

