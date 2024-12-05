 
const products = [
  {
    id: 1,
    name: 'Classic Watch',
    description: 'A timeless design with a leather strap and gold finish.',
    price: '$199.99',
    imageUrl: 'https://via.placeholder.com/200x200?text=Classic+Watch',
  },
  {
    id: 2,
    name: 'Sporty Watch',
    description: 'Built for the active lifestyle, featuring a durable silicone strap.',
    price: '$129.99',
    imageUrl: 'https://via.placeholder.com/200x200?text=Sporty+Watch',
  },
  {
    id: 3,
    name: 'Luxury Watch',
    description: 'An elegant watch with a stainless steel band and premium design.',
    price: '$499.99',
    imageUrl: 'https://via.placeholder.com/200x200?text=Luxury+Watch',
  },
];

function ProductsPage() {
  return (
    <div className="py-12 px-4">
      <h1 className="text-3xl font-semibold text-center mb-8">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-sm text-gray-500 mt-2">{product.description}</p>
              <p className="text-lg font-semibold text-blue-600 mt-4">{product.price}</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
