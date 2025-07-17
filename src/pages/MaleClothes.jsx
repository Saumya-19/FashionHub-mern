const products = [
  { id: 1, title: 'Casual Shirt', price: 799, image: '/images/male/shirt.jpg' },
  { id: 2, title: 'Leather Jacket', price: 2199, image: '/images/male/jacket.jpg' },
  { id: 3, title: 'Basic T-shirt', price: 499, image: '/images/male/tshirt.jpg' },
  { id: 4, title: 'Slim Jeans', price: 999, image: '/images/male/jeans.jpeg' },
  { id: 5, title: 'Formal Suit', price: 2999, image: '/images/male/suit.jpg' },
  { id: 6, title: 'Cotton Kurta', price: 899, image: '/images/male/kurta.jpg' },
  
  { id: 8, title: 'Casual Trousers', price: 849, image: '/images/male/trouser.jpg' },
  { id: 9, title: 'Blazer', price: 1999, image: '/images/male/blazror.jpg' },
  { id: 10, title: 'Joggers', price: 699, image: '/images/male/joggers.jpg' },
];

export default function MaleClothes() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Male Clothing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[250px] object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="font-semibold text-lg">{product.title}</h2>
              <p className="text-gray-700 mt-1">₹{product.price}</p>
            </div>
            <div className="flex justify-center"><button
  className="mt-3 mb-2  px-4  py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
  onClick={() => alert(`Buying ${product.title} for ₹${product.price}`)}
>
  Buy Now
</button></div>
          </div>
        ))}
      </div>
    </div>
  );
}
