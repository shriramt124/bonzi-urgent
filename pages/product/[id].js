import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { useState } from 'react';
import ContactSellerModal from '../../components/ContactSellerModal';
import ProductTabs from '../../components/product/ProductTabs';
import RelatedProducts from '../../components/product/RelatedProducts';

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
    bulkPricing: [
      { from: 20, to: 49, price: 205 },
      { from: 50, to: 99, price: 199 },
    ],
    seller: 'Flippycart',
    positiveSentiment: 95,
    followers: 1200,
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
  const [showBulkPrice, setShowBulkPrice] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(1, Math.min(product.stock, prev + amount)));
  };

  const getSavePercentage = () => {
    const { mrp, finalPrice } = product.priceDetails;
    return Math.round(((mrp - finalPrice) / mrp) * 100);
  };

  return (
    <Layout>
      <div className="bg-gray-50 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Product Section */}
          <div className="bg-gray-300 p-2 md:p-4 rounded-lg shadow-sm flex flex-col md:flex-row gap-4">
            {/* Left: Product Gallery */}
            <div className="w-full flex flex-col items-center">
              <div className="w-full max-w-sm md:max-w-md aspect-square bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden mb-4">
                {selectedMedia.type === 'video' ? (
                  <video src={selectedMedia.url} controls autoPlay muted loop className="w-full h-full object-contain" />
                ) : (
                  <img src={selectedMedia.url} alt={product.name} className="w-full h-full object-contain" />
                )}
              </div>
              <div className="flex gap-1 md:gap-2 justify-center">
                {product.media.map((media, idx) => (
                  <button
                    key={idx}
                    className={`border-2 rounded-lg w-12 h-12 md:w-16 md:h-16 flex items-center justify-center overflow-hidden ${selectedMedia.url === media.url ? 'border-orange-500' : 'border-gray-200'}`}
                    onClick={() => setSelectedMedia(media)}
                  >
                    {media.type === 'video' ? (
                      <img src={media.thumbnail} alt="Video thumbnail" className="w-full h-full object-cover" />
                    ) : (
                      <img src={media.url} alt="Thumbnail" className="w-full h-full object-cover" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="w-full flex flex-col gap-2">
              <h1 className="text-sm md:text-lg font-semibold text-gray-800 leading-snug">{product.name}</h1>
              
              <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                <span className="flex items-center">⭐⭐⭐⭐⭐</span>
                <span>{product.rating} ({product.reviews} feedbacks)</span>
                <span>{product.orders} orders</span>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                <div className="bg-gray-50 p-2 rounded-md flex-1">
                  <div className="flex items-center gap-2">
                      <div className="flex flex-col">
                          <span className="line-through text-gray-500 text-xs md:text-sm">₹{product.priceDetails.mrp.toFixed(2)}</span>
                          <span className="text-green-600 font-semibold text-xs">Save {getSavePercentage()}%</span>
                      </div>
                      <div className="text-lg md:text-xl font-bold text-orange-600">₹{product.priceDetails.price.toFixed(2)}</div>
                  </div>
                  <div className="text-sm md:text-md font-bold text-red-600">₹{product.priceDetails.finalPrice.toFixed(2)} <span className="text-xs md:text-sm font-normal text-gray-600">/ Piece</span></div>
                </div>

                <div 
                  className="relative"
                  onMouseEnter={() => setShowBulkPrice(true)}
                  onMouseLeave={() => setShowBulkPrice(false)}
                >
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 md:px-4 md:py-2 rounded-md font-semibold flex items-center gap-2 transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Bulk Price
                  </button>
                  {showBulkPrice && (
                    <div className="absolute top-full right-0 mt-2 w-72 bg-white border rounded-lg shadow-lg z-10 p-3">
                      <h4 className="font-bold text-sm mb-2 text-gray-900">Seller Bulk Price Details:</h4>
                      <table className="w-full text-xs text-left text-black">
                          <thead className="bg-gray-100">
                              <tr>
                                  <th className="p-2 font-semibold text-black">From</th>
                                  <th className="p-2 font-semibold text-black">To</th>
                                  <th className="p-2 font-semibold text-black">Bulk Price (₹)</th>
                              </tr>
                          </thead>
                          <tbody>
                              {product.bulkPricing.map((tier, index) => (
                                  <tr key={index} className="border-b">
                                      <td className="p-2 text-black">{tier.from}</td>
                                      <td className="p-2 text-black">{tier.to}</td>
                                      <td className="p-2 text-black">₹ {tier.price}</td>
                                  </tr>
                              ))}
                          </tbody>
                      </table>
                      <p className="text-xs text-black mt-2">
                          <strong>Note:</strong> Once you adjust the quantity in BonziCart, the price will automatically update according to the bulk pricing offer by seller. BonziCart always suggests purchasing in bulk under a business name with a registered GST number to avail the GST benefits.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex md:grid md:grid-cols-5 gap-1 text-center text-xs border-y py-2 overflow-x-auto scrollbar-hide">
                <div className="flex-shrink-0 w-20 md:w-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.664 0l3.181-3.183m-4.991-2.696a8.25 8.25 0 00-11.664 0l-3.181 3.183" />
                  </svg>
                  <div className="font-semibold text-orange-500 mt-1 text-xs md:text-sm">Replacement</div>
                  <div className="text-gray-600 text-xs md:text-sm">{product.shippingInfo.Replacement}</div>
                </div>
                <div className="flex-shrink-0 w-20 md:w-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="font-semibold text-blue-500 mt-1 text-xs md:text-sm">Processing</div>
                  <div className="text-gray-600 text-xs md:text-sm">{product.shippingInfo.Processing}</div>
                </div>
                <div className="flex-shrink-0 w-20 md:w-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-9m17.25 9v-9m-17.25-9l5.25-5.25h9l5.25 5.25m-17.25 0h17.25" />
                  </svg>
                  <div className="font-semibold text-yellow-500 mt-1 text-xs md:text-sm">Shipping</div>
                  <div className="text-gray-600 text-xs md:text-sm">{product.shippingInfo.Shipping}</div>
                </div>
                <div className="flex-shrink-0 w-20 md:w-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-orange-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5A2.25 2.25 0 0011.25 11.25H10.5a2.25 2.25 0 00-2.25 2.25V21M3 3h18M5.25 3v18m13.5-18v18M9 6.75h6.375a.75.75 0 01.75.75v3.375a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75V7.5a.75.75 0 01.75-.75z" />
                  </svg>
                  <div className="font-semibold text-orange-700 mt-1 text-xs md:text-sm">Seller</div>
                  <div className="text-gray-600 text-xs md:text-sm">{product.shippingInfo.Seller}</div>
                </div>
                <div className="flex-shrink-0 w-20 md:w-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
                  </svg>
                  <div className="font-semibold text-green-500 mt-1 text-xs md:text-sm">Warranty</div>
                  <div className="text-gray-600 text-xs md:text-sm">{product.shippingInfo.Warranty}</div>
                </div>
              </div>

              {/* Two-column layout starts here */}
              <div className="flex flex-col md:flex-row gap-4">
                {/* Left Column */}
                <div className="w-full">
                  <div className="grid grid-cols-[auto,1fr] items-center gap-x-2 md:gap-x-4 gap-y-2 md:gap-y-3 text-xs md:text-sm">
                    {/* Color */}
                    <span className="font-medium text-gray-500 text-xs md:text-sm">Color</span>
                    <div className="flex gap-2">
                      {['White', 'Warm yellow', 'Yellow'].map((color) => (
                        <button key={color} className="px-1 md:px-2 py-0.5 bg-gray-100 rounded border border-gray-300 text-gray-700 hover:bg-orange-100 text-xs">{color}</button>
                      ))}
                    </div>

                    {/* Quantity */}
                    <span className="font-medium text-gray-500 text-xs md:text-sm">Quantity</span>
                    <div className="flex items-center">
                      <button className="px-1 md:px-2 py-0.5 bg-gray-200 text-black rounded-l text-xs md:text-sm" onClick={() => handleQuantityChange(-1)}>-</button>
                      <span className="px-3 py-0.5 border-t border-b text-xs md:text-sm">{quantity}</span>
                      <button className="px-1 md:px-2 py-0.5 bg-gray-200 text-black rounded-r text-xs md:text-sm" onClick={() => handleQuantityChange(1)}>+</button>
                      <span className="text-green-600 text-xs ml-2">(Stock {product.stock} pieces)</span>
                    </div>

                    {/* Empty cell for alignment */}
                    <span></span> 
                    <div className="text-xs text-orange-600">Want to buy in bulk? <a href="#" className="underline font-semibold">Click here</a></div>

                    {/* Shipping */}
                    <span className="font-medium text-gray-500 text-xs md:text-sm">Shipping</span>
                    <span className="text-green-600 font-semibold text-xs md:text-sm">Free Shipping</span>

                    {/* COD */}
                    <span className="font-medium text-gray-500 text-xs md:text-sm">COD</span>
                    <span className="text-gray-500 font-semibold text-xs md:text-sm">{product.codAvailable ? 'Available' : 'Not Available'}</span>

                    {/* Action */}
                    <span className="font-medium text-gray-500 text-xs md:text-sm">Action</span>
                    <div className="flex flex-row gap-2 items-center">
                      <button className="w-20 md:w-24 bg-orange-500 text-white px-2 py-1 md:px-3 md:py-1.5 rounded font-semibold shadow hover:bg-orange-600 text-xs">Buy Now</button>
                      <button className="w-20 md:w-24 bg-white border border-orange-500 text-orange-500 px-2 py-1 md:px-3 md:py-1.5 rounded font-semibold shadow hover:bg-orange-50 text-xs">Add To Cart</button>
                      <button className="text-orange-500 text-lg hover:text-orange-600">♡</button>
                    </div>

                    {/* Promotions */}
                    <span className="font-medium text-gray-500 text-xs md:text-sm">Promotions</span>
                    <button className="bg-gray-100 border border-gray-300 text-gray-700 px-2 py-1 md:px-3 md:py-1 rounded-lg shadow-sm flex items-center gap-2 text-xs hover:bg-gray-200 w-fit">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                      </svg>
                      Get Seller Coupons
                    </button>
                  </div>
                </div>

                {/* Right Column */}
                <div className="w-full max-w-sm mx-auto md:mx-0 md:w-56 flex flex-col gap-2">
                  <div className="p-3 md:p-2 bg-gray-50 rounded-lg flex flex-col gap-2 md:gap-1" style={{ height: 'auto' }}>
                    <div className="text-xs text-gray-600">Sold By</div>
                    <div className="font-bold text-orange-600 text-sm md:text-xs">{product.seller}</div>
                    <div className="flex flex-col text-xs text-gray-700 gap-1">
                      <span>{product.positiveSentiment}% Positive Sentiment</span>
                      <span>{product.followers} Followers</span>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-1">
                      <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-2 md:px-2 md:py-1 rounded-lg font-semibold shadow text-sm md:text-xs" onClick={() => setShowContactModal(true)}>Contact Seller</button>
                      <div className="flex gap-2 md:gap-1">
                        <button className="flex-1 bg-white border border-gray-300 text-gray-700 px-2 py-1 md:px-1 md:py-0.5 rounded shadow text-xs md:text-xs">+ Follow</button>
                        <button className="flex-1 bg-white border border-gray-300 text-gray-700 px-2 py-1 md:px-1 md:py-0.5 rounded shadow text-xs md:text-xs">Visit Store</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-2 text-xs sm:text-sm border-t pt-2 justify-between">
                <span className="text-orange-600 font-semibold text-xs md:text-sm">Seller Return Policy</span>
                <span className="text-blue-600 font-semibold text-xs md:text-sm">Buyer Protection</span>
              </div>
            </div>
          </div>

          <ProductTabs
            product={product}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            feedbackSubTab={feedbackSubTab}
            setFeedbackSubTab={setFeedbackSubTab}
          />

          <RelatedProducts relatedProducts={product.relatedProducts} />

  </div>
  <ContactSellerModal open={showContactModal} onClose={() => setShowContactModal(false)} />
      </div>
    </Layout>
  );
}
