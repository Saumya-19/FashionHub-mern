import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Eye, EyeOff } from "lucide-react";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  const navigate = useNavigate();

  const API = import.meta.env.VITE_API_URL;

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(`${API}/api/auth/register`, {
        username,
        email,
        password,
      });
      alert(`Welcome ${res.data.username}! Registration successful.`);

      
       login(res.data);

      navigate("/");
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        console.error(err);
         setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow-lg bg-white">
      <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">Create an Account</h2>

      {error && (
        <div className="bg-red-100 text-red-700 p-2 mb-4 rounded text-sm">{error}</div>
      )}

      <form onSubmit={handleSignup} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="relative">
        <input
           type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />
           
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-2 text-gray-500"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Sign Up
        </button>
      </form>

      <p className="mt-4 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link to="/signin" className="text-blue-600 hover:underline">
          Sign In
        </Link>
      </p>
    </div>
  );
}
