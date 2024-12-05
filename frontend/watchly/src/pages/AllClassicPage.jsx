 

const allClassicProducts = [
  {
    id: 1,
    name: 'Classic Watch 1',
    description: 'A luxurious classic design with a leather strap.',
    price: '$299.99',
    imageUrl: 'https://via.placeholder.com/400x400?text=Classic+Watch+1',
  },
  {
    id: 2,
    name: 'Classic Watch 2',
    description: 'Timeless elegance with a stainless steel band.',
    price: '$499.99',
    imageUrl: 'https://via.placeholder.com/400x400?text=Classic+Watch+2',
  },
  {
    id: 3,
    name: 'Classic Watch 3',
    description: 'A sophisticated design with a gold finish.',
    price: '$799.99',
    imageUrl: 'https://via.placeholder.com/400x400?text=Classic+Watch+3',
  },
];

function AllClassicPage() {
    return (
      <div className="bg-black text-white py-16 px-6">
        <h1 className="text-5xl font-bold text-center mb-12 text-gold">All Classic Watches</h1>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {allClassicProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-xl rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h2 className="text-3xl font-bold text-black">{product.name}</h2>
                <p className="text-lg text-gray-600 mt-2">{product.description}</p>
                <p className="text-2xl font-semibold text-gold mt-4">{product.price}</p>
                <button className="mt-6 px-8 py-3 bg-black text-white font-semibold text-lg rounded-lg hover:bg-gold hover:text-black transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
export default AllClassicPage;
  