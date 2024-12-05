import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Classic Section',
    description: 'A timeless design with a leather strap and gold finish.',
    price: '$299.99 ~ $999.99',
    imageUrl: 'https://www.theluxuryhut.com/admin/upload/1711977693top-luxury-men-s-watches-for-spring-2024.jpg',
    category: 'classic',
  },
  {
    id: 2,
    name: 'Luxury Section',
    description: 'An elegant watch with a stainless steel band and premium design.',
    price: '$999.99 ~ $3999.99',
    imageUrl: 'https://media.licdn.com/dms/image/C5612AQHCfy4fSELdKw/article-cover_image-shrink_600_2000/0/1623931338114?e=2147483647&v=beta&t=-D_15dIb10p01nR_sRAI3sV1XhbGQRvzahdXux4mSs8',
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
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-60 object-cover rounded-t-xl transition-opacity hover:opacity-90"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gold">{product.name}</h2>
              <p className="text-sm text-gray-400 mt-2">{product.description}</p>
              <p className="text-lg font-semibold text-gold mt-4">{product.price}</p>
              <button
                onClick={() => handleRedirect(product.category)}
                className="mt-6 px-6 py-3 bg-gold text-black font-semibold rounded-lg hover:bg-black hover:text-gold transition-colors"
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
