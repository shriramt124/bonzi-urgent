
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

// Mock product data
const mockProductData = {
  1: {
    id: 1,
    title: "HIKMICRO Lightning Digital Scope Wireless Long-Distance Camera",
    price: 500.00,
    originalPrice: 800.00,
    rating: 4,
    reviews: 125,
    description: "Professional digital scope with wireless connectivity and long-distance capabilities. Perfect for outdoor activities and surveillance.",
    inStock: true,
    features: [
      "Wireless connectivity up to 500m range",
      "High-definition digital zoom",
      "Night vision capability",
      "Waterproof design",
      "Long battery life"
    ]
  },
  2: {
    id: 2,
    title: "Solar Jet Toy Car Electric Scientific Experiment Kit",
    price: 299.00,
    originalPrice: 399.00,
    rating: 5,
    reviews: 89,
    description: "Educational solar-powered toy car that demonstrates renewable energy principles. Perfect for learning and fun.",
    inStock: true,
    features: [
      "Solar-powered motor",
      "Educational assembly kit",
      "Eco-friendly design",
      "STEM learning tool",
      "Ages 8+"
    ]
  },
  // Add more products as needed
};

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  
  const product = mockProductData[id] || {
    id: id,
    title: "Sample Product",
    price: 299.00,
    originalPrice: 399.00,
    rating: 4,
    reviews: 50,
    description: "This is a sample product description.",
    inStock: true,
    features: ["Feature 1", "Feature 2", "Feature 3"]
  };

  return (
    <Layout>
      <div className="pt-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Images */}
            <div>
              <div className="w-full h-96 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-400">Product Image</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-full h-20 bg-gray-200 rounded flex items-center justify-center cursor-pointer hover:bg-gray-300">
                    <span className="text-xs text-gray-400">Thumb {i}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-4">{product.title}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-sm mr-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < product.rating ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
              </div>

              <div className="mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-bold text-red-500">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">₹{product.originalPrice}</span>
                  )}
                  {product.originalPrice && (
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">Description</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">Key Features</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex space-x-4">
                  <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors flex-1">
                    Add to Cart
                  </button>
                  <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors">
                    ♡ Wishlist
                  </button>
                </div>
              </div>

              <div className="border-t pt-4">
                <p className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                  {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
