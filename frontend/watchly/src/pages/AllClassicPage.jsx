import { useNavigate } from 'react-router-dom';

const allClassicProducts = [
  {
    id: 1,
    name: 'Rolex Oyster Perpetual Day-Date 36',
    description: 'Crafted in 18 kt yellow gold with a rainbow sapphire bezel and a diamond-paved dial.',
    price: '$299.99',
    imageUrl: 'https://hamiltonandinches.com/media/catalog/product/cache/52fad59d8736408bee5028687415c967/m/1/m128345rbr-0068_drp-upright-bba-with-shadow.png',
    path: 'Rolex+Oyster+Perpetual+Day-Date+36+Green', // Route path for the product
  },
  {
    id: 2,
    name: 'Rolex Lady-Datejust watch',
    description: 'A stainless steel and Everose gold masterpiece with a floral diamond dial​.',
    price: '$599.99',
    imageUrl: 'https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-grid/c_limit,w_2440/v1/catalogue/2024/upright-bba-with-shadow/m278288rbr-0006',
    path: 'Rolex+Lady-Datejust+watch', // Route path for the product
  },
  {
    id: 3,
    name: 'Rolex Oyster Perpetual Day-Date 36',
    description: 'Elegant in white gold with a diamond-set bezel and iconic President bracelet.',
    price: '$799.99',
    imageUrl: 'https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-grid/c_limit,w_2440/v1/catalogue/2024/upright-bba-with-shadow/m228239-0076',
    path: 'Rolex+Oyster+Perpetual+Day-Date+36+Blue', // Route path for the product
  },
];

function AllClassicPage() {
  const navigate = useNavigate();

  const handleViewDetails = (path) => {
    navigate(`/${path}`); // Navigate to the specific product's page
  };

  return (
    <div className="bg-black-rich text-white py-16 px-6">
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

export default AllClassicPage;
