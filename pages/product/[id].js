
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Layout from '../../components/Layout';
import ContactSellerModal from '../../components/ContactSellerModal';
import ProductTabs from '../../components/product/ProductTabs';

// Dynamic imports for better performance
const RelatedProducts = dynamic(() => import('../../components/product/RelatedProducts'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-32 rounded"></div>
});

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [productDescription, setProductDescription] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [activeTab, setActiveTab] = useState('details');
  const [feedbackSubTab, setFeedbackSubTab] = useState('product');
  const [quantity, setQuantity] = useState(1);
  const [showBulkPrice, setShowBulkPrice] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    if (id) {
      fetchProductData();
    }
  }, [id]);

  const fetchProductData = async () => {
    try {
      setLoading(true);
      
      // Fetch product details
      const productResponse = await fetch(`https://api.glst.in/api/v2/product?product_id=${id}`);
      const productData = await productResponse.json();
      
      if (!productData.success) {
        throw new Error(productData.message || 'Failed to fetch product data');
      }

      // Fetch product description
      const descriptionResponse = await fetch(`https://api.glst.in/api/v1/product-description/${id}`);
      const descriptionData = await descriptionResponse.json();

      if (descriptionData.success) {
        setProductDescription(descriptionData.data);
      }

      // Transform API data to match component structure
      const transformedProduct = transformApiData(productData.data);
      setProduct(transformedProduct);
      
      // Set initial selected media
      if (transformedProduct.media && transformedProduct.media.length > 0) {
        setSelectedMedia(transformedProduct.media[0]);
      }

    } catch (err) {
      setError(err.message);
      console.error('Error fetching product data:', err);
    } finally {
      setLoading(false);
    }
  };

  const transformApiData = (apiData) => {
    // Transform API data structure to match existing component expectations
    const media = [];
    
    // Add product images as media
    if (apiData.product_image && apiData.product_image.length > 0) {
      apiData.product_image.forEach((img, index) => {
        media.push({
          type: 'image',
          url: img.ImageLink,
          thumbnail: img.ImageLink
        });
      });
    }

    // Create specifications object
    const specifications = {};
    if (apiData.product_specification && apiData.product_specification.length > 0) {
      apiData.product_specification.forEach(spec => {
        specifications[spec.PropertyName] = spec.PropertyValue;
      });
    }

    // Calculate bulk pricing from API data
    const bulkPricing = apiData.bulk_price && apiData.bulk_price.length > 0 
      ? apiData.bulk_price.map(bulk => ({
          from: bulk.min_qty || 0,
          to: bulk.max_qty || 999,
          price: parseFloat(bulk.price || 0)
        }))
      : [
          { from: 20, to: 49, price: parseFloat(apiData.display_min_price) * 0.95 },
          { from: 50, to: 99, price: parseFloat(apiData.display_min_price) * 0.90 }
        ];

    return {
      id: apiData.product_id,
      name: apiData.product_name,
      media: media,
      productImages: apiData.product_image ? apiData.product_image.map(img => img.ImageLink) : [],
      rating: parseFloat(apiData.feedback_rating?.avg_rate || 0),
      reviews: parseInt(apiData.feedback_rating?.total_feedback || 0),
      orders: parseInt(apiData.saleCount || 0),
      priceDetails: {
        mrp: parseFloat(apiData.display_min_mrp || 0),
        price: parseFloat(apiData.display_min_price || 0),
        finalPrice: parseFloat(apiData.display_min_price_with_tax || apiData.display_min_price || 0),
      },
      bulkPricing: bulkPricing,
      seller: apiData.business_detail?.CompanyName || 'Unknown Seller',
      positiveSentiment: 95, // Default value since not in API
      followers: 1200, // Default value since not in API
      shippingInfo: {
        Replacement: apiData.product?.product_return_period || '7 Days',
        Processing: apiData.product?.ProcessingTimeInDays ? `${apiData.product.ProcessingTimeInDays} days` : '15 days',
        Shipping: apiData.product?.shipping_template?.shipping_days ? `${apiData.product.shipping_template.shipping_days} days` : '4 days',
        Seller: apiData.business_detail?.state_detail?.name || 'India',
        Warranty: apiData.product?.HasWarranty === 'Yes' ? 'Available' : 'No',
      },
      stock: parseInt(apiData.stock || 0),
      codAvailable: apiData.isCOD === 1,
      specifications: specifications,
      productSpecifications: apiData.product_specification || [],
      feedbackRating: apiData.feedback_rating || {},
      description: apiData.short_desc || '',
      colors: apiData.product_color ? apiData.product_color.map(color => color.color) : ['Default'],
      discount_percentage: parseInt(apiData.discount_percentage || 0),
      relatedProducts: [] // This would need a separate API call for related products
    };
  };

  if (loading) {
    return (
      <Layout>
        <Head>
          <title>Loading Product... | BonziCart</title>
        </Head>
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
          <div className="text-sm sm:text-lg ml-3">Loading product details...</div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <Head>
          <title>Error | BonziCart</title>
        </Head>
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-sm sm:text-lg text-red-600">Error: {error}</div>
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <Head>
          <title>Product Not Found | BonziCart</title>
        </Head>
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-sm sm:text-lg">Product not found</div>
        </div>
      </Layout>
    );
  }

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(1, Math.min(product.stock || 999, prev + amount)));
  };

  const getSavePercentage = () => {
    const { mrp, finalPrice } = product.priceDetails;
    if (mrp && finalPrice) {
      return Math.round(((mrp - finalPrice) / mrp) * 100);
    }
    return product.discount_percentage || 0;
  };

  return (
    <>
      <Head>
        <title>{product.name} | BonziCart</title>
        <meta name="description" content={product.description || `Buy ${product.name} at best price from ${product.seller}`} />
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.media[0]?.url} />
        <meta property="og:type" content="product" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`https://bonzicart.com/product/${id}`} />
      </Head>

      <Layout>
        <div className="bg-gray-100 py-2 sm:py-4">
          <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">
            
            {/* Main Product Section */}
            <div className="bg-white p-2 sm:p-4 rounded-lg shadow-sm flex flex-col md:flex-row gap-2 sm:gap-4">
              {/* Left: Product Gallery */}
              <div className="w-full flex flex-col items-center">
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden mb-2 sm:mb-4">
                  {selectedMedia ? (
                    selectedMedia.type === 'video' ? (
                      <video src={selectedMedia.url} controls autoPlay muted loop className="w-full h-full object-contain" />
                    ) : (
                      <Image 
                        src={selectedMedia.url} 
                        alt={product.name} 
                        width={400}
                        height={400}
                        className="w-full h-full object-contain"
                        priority
                        quality={75}
                      />
                    )
                  ) : (
                    <div className="text-gray-400 text-xs sm:text-sm">No image available</div>
                  )}
                </div>
                <div className="flex gap-1 sm:gap-2 justify-center overflow-x-auto max-w-full">
                  {product.media.map((media, idx) => (
                    <button
                      key={idx}
                      className={`border-2 rounded-lg w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex items-center justify-center overflow-hidden flex-shrink-0 ${selectedMedia && selectedMedia.url === media.url ? 'border-orange-500' : 'border-gray-200'}`}
                      onClick={() => setSelectedMedia(media)}
                    >
                      {media.type === 'video' ? (
                        <Image 
                          src={media.thumbnail} 
                          alt="Video thumbnail" 
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Image 
                          src={media.url} 
                          alt="Thumbnail" 
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right: Product Info */}
              <div className="w-full flex flex-col gap-2">
                <h1 className="text-sm sm:text-lg font-semibold text-gray-800 leading-snug">{product.name}</h1>
                
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                  <span className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-xs sm:text-sm ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>⭐</span>
                    ))}
                  </span>
                  <span className="text-xs sm:text-sm">{product.rating} ({product.reviews} feedbacks)</span>
                  <span className="text-xs sm:text-sm">{product.orders} orders</span>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                  <div className="bg-gray-50 p-2 rounded-md flex-1">
                    <div className="flex items-center gap-2">
                        <div className="flex flex-col">
                            <span className="line-through text-gray-500 text-xs sm:text-sm">₹{product.priceDetails.mrp.toFixed(2)}</span>
                            <span className="text-green-600 font-semibold text-xs">Save {getSavePercentage()}%</span>
                        </div>
                        <div className="text-base sm:text-lg md:text-xl font-bold text-orange-600">₹{product.priceDetails.price.toFixed(2)}</div>
                    </div>
                    <div className="text-sm sm:text-base font-bold text-red-600">₹{product.priceDetails.finalPrice.toFixed(2)} <span className="text-xs sm:text-sm font-normal text-gray-600">/ Piece</span></div>
                  </div>

                  <div 
                    className="relative"
                    onMouseEnter={() => setShowBulkPrice(true)}
                    onMouseLeave={() => setShowBulkPrice(false)}
                  >
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-md font-semibold flex items-center gap-1 sm:gap-2 transition-colors duration-200 text-xs sm:text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Bulk Price
                    </button>
                    {showBulkPrice && (
                      <div className="absolute top-full right-0 mt-2 w-64 sm:w-72 bg-white border rounded-lg shadow-lg z-10 p-3">
                        <h4 className="font-bold text-xs sm:text-sm mb-2 text-gray-900">Seller Bulk Price Details:</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-xs text-left text-black">
                              <thead className="bg-gray-100">
                                  <tr>
                                      <th className="p-1 sm:p-2 font-semibold text-black text-xs">From</th>
                                      <th className="p-1 sm:p-2 font-semibold text-black text-xs">To</th>
                                      <th className="p-1 sm:p-2 font-semibold text-black text-xs">Bulk Price (₹)</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  {product.bulkPricing.map((tier, index) => (
                                      <tr key={index} className="border-b">
                                          <td className="p-1 sm:p-2 text-black text-xs">{tier.from}</td>
                                          <td className="p-1 sm:p-2 text-black text-xs">{tier.to}</td>
                                          <td className="p-1 sm:p-2 text-black text-xs">₹ {tier.price}</td>
                                      </tr>
                                  ))}
                              </tbody>
                          </table>
                        </div>
                        <p className="text-xs text-black mt-2">
                            <strong>Note:</strong> Once you adjust the quantity in BonziCart, the price will automatically update according to the bulk pricing offer by seller. BonziCart always suggests purchasing in bulk under a business name with a registered GST number to avail the GST benefits.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex md:grid md:grid-cols-5 gap-1 text-center text-xs border-y py-2 overflow-x-auto scrollbar-hide">
                  {[
                    { icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.664 0l3.181-3.183m-4.991-2.696a8.25 8.25 0 00-11.664 0l-3.181 3.183", title: "Replacement", value: product.shippingInfo.Replacement, color: "orange" },
                    { icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z", title: "Processing", value: product.shippingInfo.Processing, color: "blue" },
                    { icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-9m17.25 9v-9m-17.25-9l5.25-5.25h9l5.25 5.25m-17.25 0h17.25", title: "Shipping", value: product.shippingInfo.Shipping, color: "yellow" },
                    { icon: "M13.5 21v-7.5A2.25 2.25 0 0011.25 11.25H10.5a2.25 2.25 0 00-2.25 2.25V21M3 3h18M5.25 3v18m13.5-18v18M9 6.75h6.375a.75.75 0 01.75.75v3.375a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75V7.5a.75.75 0 01.75-.75z", title: "Seller", value: product.shippingInfo.Seller, color: "orange" },
                    { icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z", title: "Warranty", value: product.shippingInfo.Warranty, color: "green" }
                  ].map((item, index) => (
                    <div key={index} className="flex-shrink-0 w-16 sm:w-20 md:w-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 sm:h-5 sm:w-5 mx-auto text-${item.color}-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                      <div className={`font-semibold text-${item.color}-500 mt-1 text-xs`}>{item.title}</div>
                      <div className="text-gray-600 text-xs">{item.value}</div>
                    </div>
                  ))}
                </div>

                {/* Two-column layout starts here */}
                <div className="flex flex-col lg:flex-row gap-4">
                  {/* Left Column */}
                  <div className="w-full">
                    <div className="grid grid-cols-[auto,1fr] items-center gap-x-2 sm:gap-x-4 gap-y-2 sm:gap-y-3 text-xs sm:text-sm">
                      {/* Color */}
                      <span className="font-medium text-gray-500 text-xs sm:text-sm">Color</span>
                      <div className="flex gap-1 sm:gap-2 overflow-x-auto">
                        {product.colors.map((color) => (
                          <button key={color} className="px-1 sm:px-2 py-0.5 bg-gray-100 rounded border border-gray-300 text-gray-700 hover:bg-orange-100 text-xs flex-shrink-0">{color}</button>
                        ))}
                      </div>

                      {/* Quantity */}
                      <span className="font-medium text-gray-500 text-xs sm:text-sm">Quantity</span>
                      <div className="flex items-center">
                        <button className="px-1 sm:px-2 py-0.5 bg-gray-200 text-black rounded-l text-xs sm:text-sm" onClick={() => handleQuantityChange(-1)}>-</button>
                        <span className="px-2 sm:px-3 py-0.5 border-t border-b text-xs sm:text-sm">{quantity}</span>
                        <button className="px-1 sm:px-2 py-0.5 bg-gray-200 text-black rounded-r text-xs sm:text-sm" onClick={() => handleQuantityChange(1)}>+</button>
                        <span className="text-green-600 text-xs ml-1 sm:ml-2">(Stock {product.stock} pieces)</span>
                      </div>

                      {/* Empty cell for alignment */}
                      <span></span> 
                      <div className="text-xs text-orange-600">Want to buy in bulk? <a href="#" className="underline font-semibold">Click here</a></div>

                      {/* Shipping */}
                      <span className="font-medium text-gray-500 text-xs sm:text-sm">Shipping</span>
                      <span className="text-green-600 font-semibold text-xs sm:text-sm">Free Shipping</span>

                      {/* COD */}
                      <span className="font-medium text-gray-500 text-xs sm:text-sm">COD</span>
                      <span className="text-gray-500 font-semibold text-xs sm:text-sm">{product.codAvailable ? 'Available' : 'Not Available'}</span>

                      {/* Action */}
                      <span className="font-medium text-gray-500 text-xs sm:text-sm">Action</span>
                      <div className="flex flex-row gap-1 sm:gap-2 items-center">
                        <button className="w-16 sm:w-20 md:w-24 bg-orange-500 text-white px-1 py-1 sm:px-2 sm:py-1 md:px-3 md:py-1.5 rounded font-semibold shadow hover:bg-orange-600 text-xs">Buy Now</button>
                        <button className="w-16 sm:w-20 md:w-24 bg-white border border-orange-500 text-orange-500 px-1 py-1 sm:px-2 sm:py-1 md:px-3 md:py-1.5 rounded font-semibold shadow hover:bg-orange-50 text-xs">Add To Cart</button>
                        <button className="text-orange-500 text-base sm:text-lg hover:text-orange-600">♡</button>
                      </div>

                      {/* Promotions */}
                      <span className="font-medium text-gray-500 text-xs sm:text-sm">Promotions</span>
                      <button className="bg-gray-100 border border-gray-300 text-gray-700 px-1 py-1 sm:px-2 sm:py-1 md:px-3 md:py-1 rounded-lg shadow-sm flex items-center gap-1 sm:gap-2 text-xs hover:bg-gray-200 w-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                        </svg>
                        Get Seller Coupons
                      </button>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="w-full max-w-sm mx-auto lg:mx-0 lg:w-56 flex flex-col gap-2">
                    <div className="p-2 sm:p-3 bg-gray-50 rounded-lg flex flex-col gap-1 sm:gap-2" style={{ height: 'auto' }}>
                      <div className="text-xs text-gray-600">Sold By</div>
                      <div className="font-bold text-orange-600 text-sm md:text-xs">{product.seller}</div>
                      <div className="flex flex-col text-xs text-gray-700 gap-1">
                        <span>{product.positiveSentiment}% Positive Sentiment</span>
                        <span>{product.followers} Followers</span>
                      </div>
                      <div className="flex flex-col gap-1 sm:gap-2">
                        <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg font-semibold shadow text-xs sm:text-sm" onClick={() => setShowContactModal(true)}>Contact Seller</button>
                        <div className="flex gap-1">
                          <button className="flex-1 bg-white border border-gray-300 text-gray-700 px-1 py-1 sm:px-2 sm:py-1 rounded shadow text-xs">+ Follow</button>
                          <button className="flex-1 bg-white border border-gray-300 text-gray-700 px-1 py-1 sm:px-2 sm:py-1 rounded shadow text-xs">Visit Store</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2 text-xs sm:text-sm border-t pt-2 justify-between">
                  <span className="text-orange-600 font-semibold text-xs sm:text-sm">Seller Return Policy</span>
                  <span className="text-blue-600 font-semibold text-xs sm:text-sm">Buyer Protection</span>
                </div>
              </div>
            </div>

            <ProductTabs
              product={product}
              productDescription={productDescription}
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
    </>
  );
}

// Static Generation for better performance
export async function getStaticPaths() {
  // You can pre-generate pages for popular products
  return {
    paths: [], // No pre-generated paths, will be generated on-demand
    fallback: 'blocking' // Enable ISR (Incremental Static Regeneration)
  };
}

export async function getStaticProps({ params }) {
  try {
    // Fetch product data at build time for better performance
    const productResponse = await fetch(`https://api.glst.in/api/v2/product?product_id=${params.id}`);
    const productData = await productResponse.json();
    
    if (!productData.success) {
      return {
        notFound: true,
      };
    }

    // Fetch product description
    const descriptionResponse = await fetch(`https://api.glst.in/api/v1/product-description/${params.id}`);
    const descriptionData = await descriptionResponse.json();

    return {
      props: {
        productId: params.id,
        initialProductData: productData.data,
        initialDescription: descriptionData.success ? descriptionData.data : '',
      },
      revalidate: 3600, // Revalidate every hour
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
