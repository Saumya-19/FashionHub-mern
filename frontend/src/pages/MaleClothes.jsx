import { products } from "../data/products";
import { Link, useNavigate } from "react-router-dom";

const MaleClothes = () => {
  const navigate = useNavigate();
  const maleProducts = products.filter((p) => p.category === "male");

  const handleBuyNow = (product) => {
    const productWithQuantity = { ...product, quantity: 1 };
    navigate("/checkout", { state: { product: productWithQuantity } });
  };

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {maleProducts.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg shadow hover:shadow-lg transition"
        >
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[250px] object-contain pt-3"
            />
          </Link>

          <div className="p-4 text-center">
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-600 mt-1">₹{product.price}</p>

            <div className="flex justify-center">
              <button
                className="mt-3 mb-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                onClick={(e) => {
                  e.stopPropagation(); // prevent card click
                  handleBuyNow(product);
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MaleClothes;




