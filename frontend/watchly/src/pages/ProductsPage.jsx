import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Classic Section',
    description: 'A timeless design with a leather strap and gold finish.',
    price: '$299.99 ~ $9,999.99',
    imageUrl: 'https://cdn.prod.website-files.com/63b937f7cb69a848fab5e097/66a9f0588f2f4cb3de3d0e19_Lead%20Image%20%20(4)%20(1).jpg',
    category: 'classic',
  },
  {
    id: 2,
    name: 'Luxury Section',
    description: 'An elegant watch with a stainless steel band and premium design.',
    price: '$9,999.99 ~ $1,99,999.99',
    imageUrl: 'https://media.gq-magazine.co.uk/photos/5efa1c8687e549a3c50639f7/master/pass/20200629-rolex-04.jpg',
    category: 'luxury',
  },
];

function ProductsPage() {
  const navigate = useNavigate();

  const handleRedirect = (category) => {
    if (category === 'classic') {
      navigate('/all-classic-products');
    } else if (category === 'luxury') {
      navigate('/all-luxury-products');
    }
  };

  return (
    <div className="py-16 px-6 bg-black">
      <h1 className="text-4xl font-bold text-center mb-12 text-gold">Our Exclusive Collections</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-black shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl border border-gold"
          >
            <div className="p-4"> {/* Added padding here */}
              <img
                src={product.imageUrl}
                alt={`Image of ${product.name}`}
                className="w-full h-72 object-cover rounded-t-xl transition-opacity hover:opacity-90" // Adjusted height to 72
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gold">{product.name}</h2>
              <p className="text-sm text-gray-400 mt-2">{product.description}</p>
              <p className="text-lg font-semibold text-gold mt-4">{product.price}</p>
              <button
                onClick={() => handleRedirect(product.category)}
                className="mt-6 px-6 py-3 bg-gold text-black font-semibold rounded-lg hover:bg-black hover:text-gold transition-colors duration-300"
              >
                View All {product.name.split(" ")[0]} Products
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;