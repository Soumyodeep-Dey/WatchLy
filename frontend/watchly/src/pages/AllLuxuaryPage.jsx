const allLuxuryProducts = [
    {
      id: 1,
      name: 'Luxury Watch 1',
      description: 'A premium design with a diamond-encrusted dial and stainless steel band.',
      price: '$1,299.99',
      imageUrl: 'https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-grid/c_limit,w_2440/v1/catalogue/2024/upright-bba-with-shadow/m128235-0075',
    },
    {
      id: 2,
      name: 'Luxury Watch 2',
      description: 'A luxurious design with a 24k gold-plated casing and black leather strap.',
      price: '$2,499.99',
      imageUrl: 'https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-grid/c_limit,w_2440/v1/catalogue/2024/upright-bba-with-shadow/m126234-0013',
    },
    {
      id: 3,
      name: 'Luxury Watch 3',
      description: 'A sophisticated watch with a diamond-studded bezel and sapphire glass.',
      price: '$3,799.99',
      imageUrl: 'https://www.theluxuryhut.com/admin/upload/1724418702secrets-of-rolex-watches.jpg',
    },
  ];
  
  function AllLuxuryPage() {
    return (
      <div className="bg-black text-white py-16 px-6">
        <h1 className="text-5xl font-bold text-center mb-12 text-gold">All Luxury Watches</h1>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {allLuxuryProducts.map((product) => (
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
  
  export default AllLuxuryPage;
  