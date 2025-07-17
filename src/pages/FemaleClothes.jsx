const products = [
  { id: 1, title: 'Red Dress', price: 999, image: '/images/female/red-dress.jpg' },
  { id: 2, title: 'Floral Kurti', price: 749, image: '/images/female/kurti.jpg' },
  
  { id: 4, title: 'Pink Saree', price: 1199, image: '/images/female/saree.jpg' },
  { id: 5, title: 'Anarkali Suit', price: 1399, image: '/images/female/anarkali.jpg' },
  { id: 6, title: 'Jeans Combo', price: 899, image: '/images/female/jeans.jpg' },
  { id: 7, title: 'White Blouse', price: 599, image: '/images/female/blouse.jpg' },
  { id: 8, title: 'Ethnic Gown', price: 1499, image: '/images/female/gown.jpg' },
  { id: 9, title: 'Printed Skirt', price: 699, image: '/images/female/skirt.jpg' },
  { id: 10, title: 'Lehenga Choli', price: 1799, image: '/images/female/lehenga.jpg' },
];

export default function FemaleClothes() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Female Clothing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300">
            <img src={product.image} alt={product.title} className="w-full h-[250px] object-cover" />
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
