
import Layout from '../components/Layout';
import HeroBanner from '../components/HeroBanner';
import ProductCarousel from '../components/ProductCarousel';

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
      <div className="pt-32 px-6">
        <HeroBanner />
        
        <ProductCarousel 
          title="Deals & Special Offers"
          products={mockProducts}
          linkText="View All Deals"
        />
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Exclusive Sales</h2>
          <div className="grid grid-cols-2 gap-6">
            {exclusiveProducts.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="w-full h-32 bg-gray-200 rounded mb-3 flex items-center justify-center">
                  <span className="text-gray-400">Product Image</span>
                </div>
                <h3 className="font-medium text-gray-800 mb-2">{product.title}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-red-500">₹{product.price}</span>
                  <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <ProductCarousel 
          title="Fall in Love With Collections"
          products={mockProducts.slice(0, 6)}
        />
        
        <div className="text-center mb-6">
          <button className="bg-orange-500 text-white px-8 py-2 rounded-md hover:bg-orange-600">
            SHOW MORE
          </button>
        </div>
        
        <ProductCarousel 
          title="Most Searched Products"
          products={mostSearchedProducts}
        />
      </div>
    </Layout>
  );
}
