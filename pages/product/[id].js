
import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from '../../components/Layout';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [quantity, setQuantity] = useState(1);

  // Mock product data - in real app, fetch based on id
  const product = {
    id: id,
    title: "HIKMICRO Lightning Digital Scope Wireless Long-Distance Thermal Imaging Camera",
    price: 500.00,
    originalPrice: 800.00,
    rating: 4,
    reviews: 125,
    description: "High-quality thermal imaging camera with wireless connectivity and long-distance capabilities. Perfect for professional use.",
    specifications: [
      "Wireless connectivity",
      "Long-distance imaging",
      "High resolution display",
      "Portable design"
    ],
    inStock: true,
    shippingInfo: "Free shipping on orders above ₹500"
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
                  <div key={i} className="w-full h-20 bg-gray-200 rounded flex items-center justify-center">
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
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-3xl font-bold text-red-500">₹{product.price}</span>
                  <span className="text-xl text-gray-500 line-through">₹{product.originalPrice}</span>
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
                </div>
                <p className="text-green-600 text-sm">{product.shippingInfo}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">Description</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">Specifications</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {product.specifications.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <label className="font-semibold text-gray-800">Quantity:</label>
                  <div className="flex items-center border border-gray-300 rounded">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border-x">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="flex-1 bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 font-semibold">
                    Add to Cart
                  </button>
                  <button className="flex-1 bg-red-500 text-white py-3 rounded-md hover:bg-red-600 font-semibold">
                    Buy Now
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
