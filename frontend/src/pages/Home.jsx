import { products } from "../data/products";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function HomePage() {
  const navigate = useNavigate();

  const trendingItems = products
  .filter(p => ["male", "female", "children"].includes(p.category))
  .sort(() => 0.5 - Math.random())
  .slice(0, 3); 

  return (
    <div>
      {/* 🔵 Top Hero Banner */}
      <section className="bg-[url('/images/banner.png')] bg-cover bg-center h-[400px] flex items-center justify-center text-white  px-4">
        <div className="bg-black bg-opacity-60 p-6 rounded text-center">
          <h1 className="text-4xl font-bold mb-3">Upgrade Your Wardrobe</h1>
          <p className="text-lg mb-5">Fresh Fashion Picks Just for You</p>
          <button
            onClick={() => navigate("/female")}
            className="bg-pink-500 px-6 py-2 rounded hover:bg-pink-600 transition"
          >
            Shop Now
          </button>
        </div>
      </section>


      {/* 👗 Category Buttons */}
<section className="max-w-6xl mx-auto px-6 py-10">
  <h2 className="text-2xl font-bold text-center mb-6">Choose Your Category</h2>
  <div className="flex flex-col md:flex-row justify-center items-center gap-6">
    <button
      className="w-64 py-4 text-white font-semibold bg-pink-500 rounded hover:bg-pink-600 transition"
      onClick={() => navigate("/female")}
    >
      Female Clothes
    </button>
    <button
      className="w-64 py-4 text-white font-semibold bg-blue-500 rounded hover:bg-blue-600 transition"
      onClick={() => navigate("/male")}
    >
      Male Clothes
    </button>
    <button
      className="w-64 py-4 text-white font-semibold bg-green-500 rounded hover:bg-green-600 transition"
      onClick={() => navigate("/children")}
    >
      Children Clothes
    </button>
  </div>
</section>

      {/* 🔥 Trending Items */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Trending Now
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {trendingItems.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg overflow-hidden shadow hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-contain p-4"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-green-700 font-medium mb-2">
                  ₹{item.price}
                </p>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  onClick={() => navigate(`/product/${item.id}`)}
                >
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔻 Footer */}
      <footer className="bg-gray-100 border-t mt-16 py-6 text-center text-gray-600 text-sm">
        <p className="mb-2">© 2025 FashionHub. All rights reserved.</p>
        <div className="flex justify-center gap-4 text-xl">
          <FaFacebook className="hover:text-blue-600 cursor-pointer" />
          <FaTwitter className="hover:text-sky-500 cursor-pointer" />
          <FaInstagram className="hover:text-pink-500 cursor-pointer" />
        </div>
      </footer>
    </div>
  );
}

