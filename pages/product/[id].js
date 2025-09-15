import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { useState } from 'react';
import FAQ from '../../components/FAQ';

// Mock product data based on the provided screenshots
const mockProductData = {
  1: {
    id: 1,
    name: "Stylish Silver Bow Pendant Necklace Perfect Gift for Women Elegant and Timeless Jewellery for Special Occasions",
    media: [
      { type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', thumbnail: 'https://i.imgur.com/tis2t1L.png' },
      { type: 'image', url: 'https://i.imgur.com/tis2t1L.png' },
      { type: 'image', url: 'https://i.imgur.com/8OKw2v2.png' },
      { type: 'image', url: 'https://i.imgur.com/Kk2wzcb.png' },
      { type: 'image', url: 'https://i.imgur.com/Kk2wzcb.png' },
    ],
    productImages: [
      'https://i.imgur.com/tis2t1L.png',
      'https://i.imgur.com/8OKw2v2.png',
      'https://i.imgur.com/Kk2wzcb.png',
      'https://i.imgur.com/8OKw2v2.png',
    ],
    rating: 0,
    reviews: 0,
    orders: 1,
    priceDetails: {
      mrp: 299.00,
      price: 165.00,
      finalPrice: 169.95,
    },
    seller: 'Flippycart',
    positiveSentiment: 0,
    followers: 1,
    shippingInfo: {
      Replacement: '7 Days',
      Processing: '15 days',
      Shipping: '4 days',
      Seller: 'Delhi',
      Warranty: 'No',
    },
    stock: 21,
    codAvailable: false,
    specifications: {
      Color: 'Silver',
      Material: 'Alloy',
      Occasion: 'Special Occasions',
      Style: 'Pendant Necklace',
    },
    description: "This **Stylish Silver Bow Pendant Necklace** is a perfect gift for women. Its elegant and timeless design makes it suitable for any special occasion. Crafted with high-quality materials, this jewellery piece adds a touch of sophistication to any outfit.",
    sizeChart: { /* ... */ },
    keyFeatures: [ /* ... */ ],
    pros: [ /* ... */ ],
    cons: [ /* ... */ ],
    relatedProducts: [
      {
        id: 2,
        name: "Elegant Gold Plated Drop Earrings",
        price: 120.00,
        originalPrice: 150.00,
        discount: 20,
        media: [
          { type: 'image', url: 'https://i.imgur.com/8OKw2v2.png', thumbnail: 'https://i.imgur.com/8OKw2v2.png' },
        ],
      },
      {
        id: 3,
        name: "Classic Pearl Stud Earrings",
        price: 80.00,
        originalPrice: 100.00,
        discount: 20,
        media: [
          { type: 'image', url: 'https://i.imgur.com/Kk2wzcb.png', thumbnail: 'https://i.imgur.com/Kk2wzcb.png' },
        ],
      },
      // Add more related products as needed
    ]
  },
  // Add more products as needed
};

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const product = mockProductData[id] || mockProductData[1]; // Fallback to product 1
  const [selectedMedia, setSelectedMedia] = useState(product.media[0]);
  const [activeTab, setActiveTab] = useState('details');
  const [feedbackSubTab, setFeedbackSubTab] = useState('product');
  const [quantity, setQuantity] = useState(1);
  const [showBulkCalculator, setShowBulkCalculator] = useState(false);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(1, Math.min(product.stock, prev + amount)));
  };

  const getSavePercentage = () => {
    return Math.round(((product.priceDetails.mrp - product.priceDetails.price) / product.priceDetails.mrp) * 100);
  };

  return (
    <Layout>
      <div className="pt-16 sm:pt-20 md:pt-24 pb-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm">
            {/* Main Product Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 min-h-[400px]">
              {/* Image Gallery */}
              <div className="flex flex-col h-full">
                <div className="mb-2 flex-1">
                  {selectedMedia.type === 'video' ? (
                    <video
                      key={selectedMedia.url}
                      src={selectedMedia.url}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <img
                      src={selectedMedia.url}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  )}
                </div>
                <div className="flex space-x-1 overflow-x-auto pb-1">
                  {product.media.map((mediaItem, index) => (
                    <div
                      key={index}
                      className="relative cursor-pointer flex-shrink-0"
                      onClick={() => setSelectedMedia(mediaItem)}
                    >
                      <img
                        src={mediaItem.thumbnail || mediaItem.url}
                        alt={`${product.name} thumbnail ${index + 1}`}
                        className={`w-12 h-12 object-cover rounded border-2 transition-all duration-200 ${
                          selectedMedia.url === mediaItem.url ? 'border-orange-500' : 'border-gray-200 hover:border-gray-400'
                        }`}
                      />
                      {mediaItem.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded pointer-events-none">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" /></svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Details */}
              <div className="flex flex-col h-full space-y-2">
                <div className="flex justify-between items-start">
                  <h1 className="text-lg font-bold text-gray-900 pr-3 leading-tight">{product.name}</h1>
                  <button className="p-1 rounded-full hover:bg-gray-100 transition-colors flex-shrink-0">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.368a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" /></svg>
                  </button>
                </div>
                
                <div className="flex items-center text-xs text-gray-600 space-x-2">
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-sm">★★★★★</span>
                    <span className="ml-1">({product.reviews} reviews)</span>
                  </div>
                  <span className="text-gray-300">|</span>
                  <span>{product.orders} sold</span>
                </div>

                <div className="py-2 space-y-1">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500 text-xs line-through">₹{product.priceDetails.mrp.toFixed(2)}</span>
                      <span className="text-green-600 text-xs font-semibold bg-green-50 px-1.5 py-0.5 rounded">Save {getSavePercentage()}%</span>
                    </div>
                    <button className="bg-orange-500 text-white px-4 py-1.5 rounded-md text-sm font-semibold hover:bg-orange-600 transition-colors" onClick={() => setShowBulkCalculator(!showBulkCalculator)}>Bulk Price</button>
                  </div>
                  
                  {/* Bulk Pricing Calculator */}
                  {showBulkCalculator && (
                    <div className="mt-2 p-2 bg-orange-50 rounded border border-orange-200">
                      <h4 className="text-xs font-semibold text-gray-800 mb-1">Bulk Pricing Calculator</h4>
                      <div className="grid grid-cols-3 gap-1 text-xs">
                        <div className="text-center">
                          <div className="font-semibold text-orange-600 text-xs">10-49 pcs</div>
                          <div className="text-gray-600 text-xs">₹{(product.priceDetails.finalPrice * 0.95).toFixed(2)}/pc</div>
                          <div className="text-green-600 font-semibold text-xs">Save 5%</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-orange-600 text-xs">50-99 pcs</div>
                          <div className="text-gray-600 text-xs">₹{(product.priceDetails.finalPrice * 0.9).toFixed(2)}/pc</div>
                          <div className="text-green-600 font-semibold text-xs">Save 10%</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-orange-600 text-xs">100+ pcs</div>
                          <div className="text-gray-600 text-xs">₹{(product.priceDetails.finalPrice * 0.85).toFixed(2)}/pc</div>
                          <div className="text-green-600 font-semibold text-xs">Save 15%</div>
                        </div>
                      </div>
                      <button className="w-full mt-2 bg-orange-500 text-white px-3 py-1.5 rounded text-xs font-semibold hover:bg-orange-600 transition-colors">Get Custom Quote</button>
                    </div>
                  )}
                  <div className="text-xl font-bold text-orange-600">₹{product.priceDetails.finalPrice.toFixed(2)} <span className="text-sm font-normal text-gray-500">/ piece</span></div>
                </div>

                <div className="grid grid-cols-5 gap-1 text-center text-xs text-gray-600 py-1">
                  {Object.entries(product.shippingInfo).map(([key, value]) => (
                    <div key={key} className="flex flex-col items-center p-0.5">
                      <span className="text-base mb-0.5">🚚</span>
                      <span className="font-medium text-xs">{key}</span>
                      <span className="text-gray-500 text-xs">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700 text-sm">Quantity</span>
                    <div className="flex items-center space-x-1 mt-1">
                      <button onClick={() => handleQuantityChange(-1)} className="w-6 h-6 border rounded bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-sm">-</button>
                      <span className="font-semibold min-w-[1.5rem] text-center text-sm">{quantity}</span>
                      <button onClick={() => handleQuantityChange(1)} className="w-6 h-6 border rounded bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-sm">+</button>
                      <span className="text-xs text-gray-500 ml-1">{product.stock} in stock</span>
                    </div>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700 text-sm">Shipping</span>
                    <p className="text-gray-600 mt-1 font-medium text-sm">Free delivery</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700 text-sm">Payment</span>
                    <p className="text-gray-600 mt-1 text-sm">{product.codAvailable ? 'COD available' : 'Online payment'}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-orange-600 font-semibold text-xs">Bulk orders? <a href="#" className="underline hover:text-orange-700">Get quote</a></p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 pt-1">
                  <button className="flex-1 bg-orange-500 text-white px-4 py-2 rounded font-semibold hover:bg-orange-600 transition-colors text-sm">Buy Now</button>
                  <button className="flex-1 border-2 border-orange-500 text-orange-500 px-4 py-2 rounded font-semibold hover:bg-orange-50 transition-colors text-sm">Add to Cart</button>
                  <button className="p-2 border rounded hover:bg-gray-100 transition-colors group">
                    <svg className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg>
                  </button>
                </div>

                {/* Share and Compare */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-1">
                    <span className="text-xs text-gray-600">Share:</span>
                    <div className="flex space-x-0.5">
                      <button className="p-1.5 rounded-full bg-green-100 hover:bg-green-200 transition-colors" title="WhatsApp">
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>
                      </button>
                      <button className="p-1.5 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors" title="Facebook">
                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                      </button>
                      <button className="p-1.5 rounded-full bg-sky-100 hover:bg-sky-200 transition-colors" title="Twitter">
                        <svg className="w-3 h-3 text-sky-600" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                      </button>
                      <button className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors" title="Copy Link">
                        <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                      </button>
                    </div>
                  </div>
                  <button className="text-xs text-gray-600 hover:text-orange-600 transition-colors flex items-center space-x-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                    <span className="text-xs">Compare</span>
                  </button>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-600 pt-1 border-t">
                  <button className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-full text-xs hover:bg-gray-200 transition-colors">Get Coupons</button>
                  <div className="flex space-x-3">
                    <a href="#" className="hover:text-orange-600 transition-colors text-xs">Returns</a>
                    <a href="#" className="hover:text-orange-600 transition-colors text-xs">Protection</a>
                  </div>
                </div>

                <div className="pt-2 flex-1">
                  <div className="bg-gray-50 rounded-lg p-3 h-full">
                    <p className="text-xs text-gray-600 mb-1">Sold by</p>
                    <p className="font-bold text-orange-600 mb-2 text-base">{product.seller}</p>
                    <div className="flex justify-between text-xs text-gray-600 mb-3">
                      <span className="bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full text-xs">{product.positiveSentiment}% positive</span>
                      <span className="text-xs">{product.followers} followers</span>
                    </div>
                    
                    {/* Contact Options */}
                    <div className="grid grid-cols-2 gap-1.5 mb-3">
                      <button className="flex items-center justify-center space-x-1 bg-blue-500 text-white px-2 py-1.5 rounded text-xs font-semibold hover:bg-blue-600 transition-colors">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                        <span>Call</span>
                      </button>
                      <button className="flex items-center justify-center space-x-1 bg-green-500 text-white px-2 py-1.5 rounded text-xs font-semibold hover:bg-green-600 transition-colors">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 12H7v-2h10v2zm0-3H7V9h10v2zm0-3H7V6h10v2z"/></svg>
                        <span>Chat</span>
                      </button>
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="flex-1 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-3 py-2 rounded text-xs font-semibold hover:opacity-90 transition-opacity">Contact Seller</button>
                      <button className="flex-1 border border-gray-300 px-3 py-2 rounded text-xs font-semibold hover:bg-gray-100 transition-colors">Visit Store</button>
                    </div>
                    
                    {/* Additional Seller Info */}
                    <div className="mt-2 pt-2 border-t border-gray-200">
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>Response: <strong className="text-gray-700">1h</strong></span>
                        <span>Active: <strong className="text-gray-700">2m ago</strong></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Details, Feedback, FAQ Section */}
          <div className="mt-6 bg-white p-3 sm:p-4 rounded-lg shadow-sm">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-6" aria-label="Tabs">
                <button onClick={() => setActiveTab('details')} className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${activeTab === 'details' ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  Details
                </button>
                <button onClick={() => setActiveTab('feedback')} className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${activeTab === 'feedback' ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                  Feedback
                </button>
                <button onClick={() => setActiveTab('faq')} className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${activeTab === 'faq' ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4c0-1.165.398-2.206 1.058-3.001.29-.283.552-.58.772-.898z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 13a3 3 0 100-6 3 3 0 000 6z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  FAQ
                </button>
              </nav>
            </div>

            <div className="mt-6">
              {activeTab === 'details' && (
                <div className="space-y-8">
                  {/* Specifications */}
                  <div>
                    <h3 className="text-base font-bold text-gray-800 mb-3">Specification</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-3 text-sm">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key}><span className="font-semibold text-gray-600">{key}:</span> <span className="text-gray-800">{value}</span></div>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-base font-bold text-gray-800 mb-3">Description</h3>
                    <p className="text-gray-600 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: product.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                  </div>

                  {/* Product Images */}
                  <div>
                    <h3 className="text-base font-bold text-gray-800 mb-3">Product Images</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {product.productImages.map((img, index) => (
                        <img key={index} src={img} alt={`Product image ${index + 1}`} className="rounded-lg w-full object-cover" />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 'feedback' && (
                <div className="space-y-6">
                  {/* Overall Rating Summary */}
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-orange-600">4.2</div>
                          <div className="flex items-center justify-center mb-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg key={star} className={`w-4 h-4 ${star <= 4 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <div className="text-sm text-gray-600">Based on 24 reviews</div>
                        </div>
                        <div className="flex-1 ml-6">
                          <div className="space-y-2">
                            {[5, 4, 3, 2, 1].map((stars) => (
                              <div key={stars} className="flex items-center space-x-2">
                                <span className="text-sm w-8">{stars}★</span>
                                <div className="flex-1 bg-gray-200 rounded-full h-2">
                                  <div
                                    className="bg-orange-500 h-2 rounded-full"
                                    style={{
                                      width: stars === 5 ? '45%' : stars === 4 ? '30%' : stars === 3 ? '15%' : stars === 2 ? '5%' : '5%'
                                    }}
                                  ></div>
                                </div>
                                <span className="text-sm text-gray-600 w-6 text-right">
                                  {stars === 5 ? '11' : stars === 4 ? '7' : stars === 3 ? '4' : stars === 2 ? '1' : '1'}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>24 reviews • 18 with photos</span>
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          85% positive
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 text-blue-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Verified purchases
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Feedback Tabs */}
                  <div className="border-b border-gray-200">
                    <div className="flex space-x-8">
                      <button
                        onClick={() => setFeedbackSubTab('product')}
                        className={`py-3 px-1 border-b-2 font-medium text-sm ${
                          feedbackSubTab === 'product'
                            ? 'border-orange-500 text-orange-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        Product Reviews (18)
                      </button>
                      <button
                        onClick={() => setFeedbackSubTab('all')}
                        className={`py-3 px-1 border-b-2 font-medium text-sm ${
                          feedbackSubTab === 'all'
                            ? 'border-orange-500 text-orange-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        All Reviews (24)
                      </button>
                    </div>
                  </div>

                  {/* Reviews List */}
                  <div className="space-y-4">
                    {/* Mock Reviews */}
                    {[
                      {
                        id: 1,
                        name: "Priya Sharma",
                        rating: 5,
                        date: "2 days ago",
                        verified: true,
                        review: "Absolutely love this necklace! The quality is excellent and it looks even better in person. Perfect for special occasions.",
                        helpful: 12,
                        images: ['https://i.imgur.com/tis2t1L.png']
                      },
                      {
                        id: 2,
                        name: "Rahul Kumar",
                        rating: 4,
                        date: "1 week ago",
                        verified: true,
                        review: "Good quality jewelry. The pendant is beautiful and the chain is sturdy. Only complaint is that it took longer than expected for delivery.",
                        helpful: 8,
                        images: []
                      },
                      {
                        id: 3,
                        name: "Anjali Patel",
                        rating: 5,
                        date: "2 weeks ago",
                        verified: true,
                        review: "This necklace exceeded my expectations! The craftsmanship is amazing and it arrived well-packaged. Will definitely buy more from this seller.",
                        helpful: 15,
                        images: ['https://i.imgur.com/8OKw2v2.png', 'https://i.imgur.com/Kk2wzcb.png']
                      }
                    ].map((review) => (
                      <div key={review.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                              <span className="text-orange-600 font-semibold text-sm">
                                {review.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="font-semibold text-sm">{review.name}</span>
                                {review.verified && (
                                  <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">
                                    Verified Purchase
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center space-x-2 mt-1">
                                <div className="flex">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <svg key={star} className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                  ))}
                                </div>
                                <span className="text-sm text-gray-500">{review.date}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-700 mb-3 leading-relaxed">{review.review}</p>

                        {review.images.length > 0 && (
                          <div className="flex space-x-2 mb-3">
                            {review.images.map((img, idx) => (
                              <img key={idx} src={img} alt="Review image" className="w-16 h-16 object-cover rounded border" />
                            ))}
                          </div>
                        )}

                        <div className="flex items-center justify-between">
                          <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-orange-600">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.993 0-1.85-1.02-1.85-2.25V10.5A2.25 2.25 0 0111.5 8h.75M10 8V3a1 1 0 011-1h2a1 1 0 011 1v5m-3 0h3" />
                            </svg>
                            <span>Helpful ({review.helpful})</span>
                          </button>
                          <button className="text-sm text-gray-500 hover:text-orange-600">Report</button>
                        </div>
                      </div>
                    ))}

                    {/* Load More Button */}
                    <div className="text-center pt-4">
                      <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors text-sm font-semibold">
                        Load More Reviews
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 'faq' && (
                <FAQ product={product} />
              )}
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Related Products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {product.relatedProducts.map(related => (
                <div key={related.id} className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-shadow duration-200">
                  <div className="w-full h-24 bg-gray-100 rounded-md mb-3 relative">
                    <span className="absolute top-1.5 right-1.5 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">-{related.discount}%</span>
                  </div>
                  <h4 className="text-xs font-semibold text-gray-700 mb-1.5 truncate">{related.name}</h4>
                  <div className="flex justify-center items-baseline space-x-1.5">
                    <span className="text-sm font-bold text-orange-600">₹{related.price.toFixed(2)}</span>
                    <span className="text-xs text-gray-500 line-through">₹{related.originalPrice.toFixed(2)}</span>
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
