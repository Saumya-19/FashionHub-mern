const products = [
  { id: 1, title: 'Cartoon T-shirt', price: 399, image: '/images/children/cartoon-tshirt.jpg' },
  { id: 2, title: 'Kids Jeans', price: 549, image: '/images/children/kids-jeans.jpg' },
  { id: 3, title: 'Party Dress', price: 799, image: '/images/children/party-dress.jpg' },
  
  { id: 6, title: 'Printed Frock', price: 699, image: '/images/children/frock.jpg' },
  { id: 7, title: 'Boys Kurta Set', price: 849, image: '/images/children/boys-kurta.jpg' },
  { id: 8, title: 'Girls Lehenga', price: 999, image: '/images/children/girls-lehenga.jpg' },
  { id: 9, title: 'Dungaree', price: 799, image: '/images/children/dungaree.jpg' },
  { id: 10, title: 'Hoodie & Jogger Set', price: 899, image: '/images/children/hoodie-jogger.jpg' },
];

export default function ChildrenClothes() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Children Clothing</h1>
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
