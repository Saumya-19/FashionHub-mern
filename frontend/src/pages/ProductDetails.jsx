import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import {
  FaStar,
  FaTruck,
  FaUndo,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const sizes = ["S", "M", "L", "XL"];
  const [selectedSize, setSelectedSize] = useState("M");

  // Review State
  const [reviews, setReviews] = useState([
    { name: "Amit", rating: 5, comment: "Excellent product!" },
    { name: "Riya", rating: 4, comment: "Really comfortable and stylish." },
  ]);
  const [newName, setNewName] = useState("");
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  if (!product)
    return <div className="text-center p-6 text-red-600">Product not found</div>;

  const handleAdd = () => {
    addToCart({ ...product, quantity, size: selectedSize });
    setQuantity(1);
  };

  const handleBuyNow = () => {
    navigate("/checkout", {
      state: { product, quantity, size: selectedSize },
    });
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newName && newComment && newRating) {
      setReviews([
        ...reviews,
        { name: newName, comment: newComment, rating: newRating },
      ]);
      setNewName("");
      setNewComment("");
      setNewRating(0);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Breadcrumb */}
      <nav className="mb-4 text-gray-500 text-sm">
        Home / {product.category} /{" "}
        <span className="text-black font-semibold">{product.title}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-[400px] object-contain rounded shadow-md transition-transform duration-300 hover:scale-105"
        />

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <div className="flex items-center text-yellow-400 mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="ml-2 text-gray-600 text-sm">(120 reviews)</span>
          </div>
          <p className="text-xl font-semibold text-green-700 mb-2">
            ₹{product.price}
          </p>
          <p className="text-gray-700 mb-4">{product.description}</p>

          {/* Sizes */}
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Available Sizes:</h4>
            <div className="flex gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 border rounded ${
                    selectedSize === size
                      ? "bg-blue-600 text-white"
                      : "hover:border-blue-600"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Cart Buttons */}
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="px-3 py-1 bg-gray-300 rounded text-lg"
            >
              -
            </button>
            <span className="text-lg">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="px-3 py-1 bg-gray-300 rounded text-lg"
            >
              +
            </button>
          </div>

          <div className="flex gap-4 mb-6">
            <button
              onClick={handleAdd}
              className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="px-5 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              Buy Now
            </button>
          </div>

          {/* Shipping & Return Info */}
          <div className="flex gap-6 text-sm text-gray-600 mb-4">
            <p className="flex items-center gap-2">
              <FaTruck /> Free shipping in 3-5 days
            </p>
            <p className="flex items-center gap-2">
              <FaUndo /> 7-day return policy
            </p>
          </div>

          {/* Social Share */}
          <div className="mt-4 text-gray-500 flex items-center gap-4">
            Share:
            <FaFacebook className="cursor-pointer hover:text-blue-600" />
            <FaTwitter className="cursor-pointer hover:text-sky-400" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
          </div>
        </div>
      </div>

      {/* Review Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>

        {/* Review List */}
        <div className="space-y-4 mb-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-gray-100 p-4 rounded shadow-sm">
              <div className="flex items-center mb-1">
                {[...Array(5)].map((_, star) => (
                  <FaStar
                    key={star}
                    className={`${
                      star < r.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-700">{r.name}</span>
              </div>
              <p className="text-gray-800">{r.comment}</p>
            </div>
          ))}
        </div>

        {/* Review Form */}
        <form
          onSubmit={handleReviewSubmit}
          className="bg-white p-6 border rounded shadow space-y-4"
        >
          <h3 className="text-xl font-semibold">Write a Review</h3>

          {/* Star Rating Input */}
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => {
              const ratingVal = i + 1;
              return (
                <FaStar
                  key={i}
                  className={`cursor-pointer text-2xl ${
                    ratingVal <= (hoverRating || newRating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                  onClick={() => setNewRating(ratingVal)}
                  onMouseEnter={() => setHoverRating(ratingVal)}
                  onMouseLeave={() => setHoverRating(0)}
                />
              );
            })}
          </div>

          <input
            type="text"
            placeholder="Your Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />
          <textarea
            placeholder="Write your review..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            rows="4"
            className="w-full px-4 py-2 border rounded"
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
}
