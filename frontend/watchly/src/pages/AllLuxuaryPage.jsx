import { useNavigate } from 'react-router-dom';

const allLuxuryProducts = [
  {
    id: 1,
    name: 'Rolex Yacht Master II',
    description: 'A premium design with a diamond-encrusted dial and stainless steel band.',
    price: '$12,000.00',
    imageUrl: 'https://images.jdmagicbox.com/quickquotes/images_main/rolex-yacht-master-ii-oyster-44-mm-oystersteel-and-everose-gold-184502099-txmzv.png',
    path: 'Rolex+Yacht+Master+II', // Route path for the product
  },
  {
    id: 2,
    name: 'Rolex GMT-Master II',
    description: 'A luxurious design with a 24k gold-plated casing and black leather strap.',
    price: '$12,000.00',
    imageUrl: 'https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_2440/v1/catalogue/2024/upright-c/m126720vtnr-0001',
    path: 'Rolex+GMT+Master+II', // Route path for the product
  },
  {
    id: 3,
    name: 'Rolex Submariner',
    description: 'A sophisticated watch with a diamond-studded bezel and sapphire glass.',
    price: '$10,500.00',
    imageUrl: 'https://timeavenue.com/wp-content/uploads/2024/06/m126613lb-0002_drp-upright-bba-with-shadow.webp',
    path: 'Rolex+Submariner', // Route path for the product
  },
];

function AllLuxuryPage() {
  const navigate = useNavigate();

  const handleViewDetails = (path) => {
    navigate(`/${path}`); // Navigate to the specific product's page
  };

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
              <button
                className="mt-6 px-8 py-3 bg-black text-white font-semibold text-lg rounded-lg hover:bg-gold hover:text-black transition-colors"
                onClick={() => handleViewDetails(product.path)} // Pass the path dynamically
              >
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
