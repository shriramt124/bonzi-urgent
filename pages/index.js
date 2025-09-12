
import Layout from '../components/Layout';
import HeroBanner from '../components/HeroBanner';
import ProductCarousel from '../components/ProductCarousel';
import ProductCard from '../components/ProductCard';

// Mock data for products
const mockProducts = [
  {
    id: 1,
    title: "HIKMICRO Lightning Digital Scope Wireless Long-Distance...",
    price: 500.00,
    originalPrice: 800.00,
    rating: 4,
    reviews: 125
  },
  {
    id: 2,
    title: "Solar Jet Toy Car Electric Scientific Experiment...",
    price: 299.00,
    originalPrice: 399.00,
    rating: 5,
    reviews: 89
  },
  {
    id: 3,
    title: "114 Intelligent Manual Magnetic Cards Building Vehicle...",
    price: 252.00,
    originalPrice: 350.00,
    rating: 4,
    reviews: 256
  },
  {
    id: 4,
    title: "Mini Excavator Toy Building Vehicle 4-CH Remote...",
    price: 650.00,
    originalPrice: 850.00,
    rating: 5,
    reviews: 143
  },
  {
    id: 5,
    title: "3D Assembly Manual Magnetic Cards Building Vehicle Toys Manual...",
    price: 635.00,
    originalPrice: 835.00,
    rating: 4,
    reviews: 198
  },
  {
    id: 6,
    title: "Virtual Mouse Anti-Sleep Automatic Cursor Move Keep",
    price: 465.00,
    originalPrice: 1200.00,
    rating: 4,
    reviews: 67
  },
  {
    id: 7,
    title: "Itchy Scratcher Portable Extendable Itchy",
    price: 205.00,
    originalPrice: 305.00,
    rating: 5,
    reviews: 34
  },
  {
    id: 8,
    title: "Gold Imitation Floral Drop Earrings Elegant and Fashion",
    price: 465.00,
    originalPrice: 695.00,
    rating: 4,
    reviews: 89
  }
];

const exclusiveProducts = [
  {
    id: 9,
    title: "Large Capacity Modular Storage Box",
    price: 2999,
    originalPrice: 6960,
    rating: 4,
    reviews: 145
  },
  {
    id: 10,
    title: "Magnetic Tea Separation Cup",
    price: 3480,
    originalPrice: 7400,
    rating: 5,
    reviews: 78
  }
];

const mostSearchedProducts = [
  {
    id: 11,
    title: "Travel Cosmetic Bags Waterproof Makeup Bag",
    price: 299,
    rating: 4,
    reviews: 234
  },
  {
    id: 12,
    title: "4DRC V17 EPP Foam RC airplane 2.4GHz Remote Control",
    price: 1299,
    rating: 5,
    reviews: 156
  },
  {
    id: 13,
    title: "Handheld Portable 500x Fixed Magnification Microscope",
    price: 899,
    rating: 4,
    reviews: 89
  },
  {
    id: 14,
    title: "Rotatable Grain Storage Box Separated Storage",
    price: 599,
    rating: 5,
    reviews: 123
  },
  {
    id: 15,
    title: "Wall Mounted Iron Board Holder with Steel Hooks",
    price: 399,
    rating: 4,
    reviews: 67
  },
  {
    id: 16,
    title: "Nordic Light Luxury Home Furnishing Astronaut",
    price: 1299,
    rating: 5,
    reviews: 234
  }
];

export default function Home() {
  return (
    <Layout>
      <div className="pt-32 flex">
        {/* Main Content Area */}
        <div className="flex-1 px-6">
          <HeroBanner />
          
          {/* Navigation Tabs */}
          <div className="bg-white rounded-lg mb-6">
            <div className="flex border-b">
              <button className="px-6 py-3 text-orange-500 border-b-2 border-orange-500 font-medium">
                Deals & Special Offers
              </button>
              <button className="px-6 py-3 text-gray-600 hover:text-orange-500">
                Exclusive Sales
              </button>
              <button className="px-6 py-3 text-gray-600 hover:text-orange-500">
                DIY
              </button>
              <button className="px-6 py-3 text-gray-600 hover:text-orange-500">
                SMART HOME
              </button>
            </div>
            
            {/* Product Grid */}
            <div className="p-6">
              <div className="grid grid-cols-5 gap-4">
                {mockProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
          
          <ProductCarousel 
            title="Fall in Love With Collections"
            products={mockProducts.slice(0, 6)}
          />
        </div>
        
        {/* Right Sidebar - Exclusive Sales */}
        <div className="w-80 px-4">
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm mr-2">Exclusive Sales</span>
            </h3>
            
            <div className="space-y-4">
              {exclusiveProducts.map((product) => (
                <div key={product.id} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                  <div className="w-full h-24 bg-gray-200 rounded mb-2 flex items-center justify-center">
                    <span className="text-gray-400 text-xs">Product Image</span>
                  </div>
                  <h4 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">{product.title}</h4>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm line-through text-gray-500">₹{product.originalPrice}</span>
                      <span className="text-lg font-bold text-red-500 ml-2">₹{product.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
