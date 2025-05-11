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
    <div className="min-h-screen w-full bg-black-rich text-white relative overflow-hidden">
      {/* Enhanced background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-95"></div>
      
      {/* Premium animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gold opacity-5 animate-spin-slow"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gold opacity-5 animate-spin-slow-reverse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 w-full h-screen">
        <div className="h-full flex flex-col">
          <h1 className="text-6xl font-bold text-center py-12 text-gold relative">
            Our Exclusive Collections
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></span>
          </h1>

          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 pb-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-gray-800/40 backdrop-blur-md border border-gold/20 rounded-3xl overflow-hidden 
                  transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-gold/20 transition-all duration-500
                  hover:border-gold/40 h-full flex flex-col"
              >
                <div className="relative flex-1 overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={`Image of ${product.name}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="p-8 bg-gray-900/50 backdrop-blur-sm">
                  <h2 className="text-3xl font-bold text-gold mb-4 group-hover:text-gold-light transition-colors duration-300">{product.name}</h2>
                  <p className="text-gray-300 text-lg mb-6 group-hover:text-gray-200 transition-colors duration-300">{product.description}</p>
                  <p className="text-2xl font-semibold text-gold mb-8 group-hover:text-gold-light transition-colors duration-300">{product.price}</p>
                  <button
                    onClick={() => handleRedirect(product.category)}
                    className="w-full py-4 bg-gradient-to-r from-gold-light to-gold-dark text-black font-semibold text-lg 
                      rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-gold/30
                      focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-gray-800
                      hover:from-gold hover:to-gold-dark"
                  >
                    View All {product.name.split(" ")[0]} Products
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;