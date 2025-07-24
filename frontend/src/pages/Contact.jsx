import { useState } from "react";
import {  PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 p-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-2 text-green-700">Contact Us</h1>
      <p className="mb-8 text-gray-600 text-center max-w-xl">
        💬 Have questions, feedback, or facing an issue? We’re here to help!  
        <br />
        📧 Email us anytime at: <span className="font-medium text-green-700">support@fashionhub.com</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg space-y-6 animate-fade-in"
      >
        <div className="relative">
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            className="peer w-full border-b-2 border-gray-300 focus:outline-none focus:border-green-600 p-2"
          />
          <label className="absolute left-2 top-2 text-gray-400 text-sm transition-all peer-focus:text-xs peer-focus:-top-4 peer-focus:text-green-600">
            Your Name
          </label>
        </div>

        <div className="relative">
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="peer w-full border-b-2 border-gray-300 focus:outline-none focus:border-green-600 p-2"
          />
          <label className="absolute left-2 top-2 text-gray-400 text-sm transition-all peer-focus:text-xs peer-focus:-top-4 peer-focus:text-green-600">
            Email Address
          </label>
        </div>

        <div className="relative">
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows="4"
            className="peer w-full border-b-2 border-gray-300 focus:outline-none focus:border-green-600 p-2 resize-none"
          />
          <label className="absolute left-2 top-2 text-gray-400 text-sm transition-all peer-focus:text-xs peer-focus:-top-4 peer-focus:text-green-600">
            Your Message
          </label>
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all"
        >
          Send Message
        </button>
      </form>

      <div className="mt-8 text-gray-500 text-sm text-center">
        <div className="flex justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <PhoneIcon className="w-5 h-5 text-green-600" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPinIcon className="w-5 h-5 text-green-600" />
            <span>New Delhi, India</span>
          </div>
        </div>
      </div>
    </div>
  );
}
