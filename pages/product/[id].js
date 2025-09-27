
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import toast from 'react-hot-toast';
import Layout from '../../components/Layout';
import ContactSellerModal from '../../components/ContactSellerModal';
import ProductTabs from '../../components/product/ProductTabs';
import { useCart } from '../../contexts/CartContext';

import RelatedProducts from '../../components/product/RelatedProducts';

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
  const [isFollowing, setIsFollowing] = useState(false);
  const [isFollowLoading, setIsFollowLoading] = useState(false);
  const [priceData, setPriceData] = useState(null);
  const [priceLoading, setPriceLoading] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const { addToCart, cartLoading } = useCart();

  // Store access token in localStorage
  useEffect(() => {
    const accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5MjBjMTIwZS0zY2IwLTQ3OGMtOTY0Yi1hM2ZhZmFjMDFhNGIiLCJqdGkiOiI1MTYwYzgzMTI1NjRiODEzYWQ0MDZmN2UzZDIxYzc1NGI4YWFiNjM5Y2ZmN2MxOGRhN2UwNTc3NDJjZGMyZWZmMWEyY2U4OWU2N2MxYzBjMiIsImlhdCI6MTc1ODk4MDkxNi4wNDcyODUsIm5iZiI6MTc1ODk4MDkxNi4wNDcyOSwiZXhwIjoxNzkwNTE2OTE2LjAwNjgwMiwic3ViIjoiNSIsInNjb3BlcyI6WyIqIl19.jVO8NQ6MG24sbDGcsFoC7-sNocL3GSOmavqYIjJLg594ldPL7DX7vDI1hJ68l8oBuUROYOJMi9UqcVZxqthpKlGb2uWXpmMXxl2hezyijR348Zoz4jwncJ3qumbLhZNIMadUiXahZhzvRk0HVEGrBH0RA_c2D5WxyeYNONgyURuO1MsCvgNqNjgus7fpK7-N3HYqggmRk6BMIU1oSTeghxKD-32aRXylPgfH5abhiDbkp_LzxScFcXgCU8GVNdXIm3mPgeZTQdXqtqxGsKp4fYSfIdnBjRxVLOBH_7w2PMPGmi6nG2PNAtyT1KnYdMqIDNlhHzmtqvQuXPLbvf5m3X5noPp8z_SUW523NeFe3t1J4VLAJMlFg6R34XMPOxGXEJBiBVXwOUjD5sVzo4dN07OYbM0-abPc9IknmaXDVLUnTIFvdDEjJvtWpUdW8PsfJO3IU7bhblWqHCKH3s1iNZF7LWYJmC1UH2M7Yn-oSUh1u4VYuu-mQXLu-6GeP_8CeON9CxLmaYm9QvXJvOEyTKd63vQzyv1edzun53zCHCgVPDCPNhvpHoS3oifK2GLnk1kS0etmq8FoESmS26Q2jKv_zFIDhi05xbuWSzTs3wj7AvZqkEmYdvBhzUrtclFX706rjwb1hLEmVr_16uorBpccOq5YfcYPPT1f_bzpJoE";
    localStorage.setItem('access_token', accessToken);
  }, []);

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
      if (transformedProduct.media && Array.isArray(transformedProduct.media) && transformedProduct.media.length > 0) {
        setSelectedMedia(transformedProduct.media[0]);
      }

      // Fetch initial price data with quantity 1
      await fetchPriceData(1);

    } catch (err) {
      setError(err.message);
      console.error('Error fetching product data:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchPriceData = async (qty = quantity) => {
    if (!id) return;
    
    try {
      setPriceLoading(true);
      const response = await fetch(`https://api.glst.in/api/v2/get-product-price?product_id=${id}&product_qty=${qty}`);
      const data = await response.json();
      
      if (data.success) {
        setPriceData(data.data);
      } else {
        console.error('Price API Error:', data.message);
        toast.error('Failed to load price information');
      }
    } catch (error) {
      console.error('Price fetch error:', error);
      toast.error('Failed to load price information');
    } finally {
      setPriceLoading(false);
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
      store_id: apiData.store_id,
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
      colors: apiData.product_color ? apiData.product_color.map(color => ({
        id: color.product_variation_colorid,
        name: color.color,
        image: color.image
      })) : [],
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
    const newQuantity = Math.max(1, Math.min(product.stock || 999, quantity + amount));
    setQuantity(newQuantity);
  };

  const handleAddToCart = async () => {
    if (!product || !product.id) return;

    const result = await addToCart(
      product.id,
      quantity,
      selectedColor,
      selectedSize
    );

    if (result.success) {
      toast.success('Product added to cart successfully!');
    } else {
      toast.error(`Failed to add to cart: ${result.message}`);
    }
  };

  const handleVisitStore = () => {
    if (product && product.store_id) {
      window.open(`https://www.bonzicart.com/store?store=${product.store_id}`, '_blank');
    }
  };

  const handleFollowToggle = async () => {
    if (!product || !product.store_id) return;
    
    setIsFollowLoading(true);
    try {
      const accessToken = localStorage.getItem('access_token');
      const response = await fetch('https://api.glst.in/api/v1/store/follow-unfollow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          store_id: product.store_id,
          status: !isFollowing // Toggle the current status
        })
      });

      const data = await response.json();
      
      if (data.success) {
        setIsFollowing(!isFollowing);
        // Optional: Show success message
        console.log(data.message || 'Follow status updated successfully');
      } else {
        console.error('API Error:', data.message);
        toast.error(`Failed to ${!isFollowing ? 'follow' : 'unfollow'} seller: ${data.message}`);
      }
    } catch (error) {
      console.error('Network Error:', error);
      toast.error('Network error. Please try again later.');
    } finally {
      setIsFollowLoading(false);
    }
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
        <meta property="og:image" content={product.media && Array.isArray(product.media) && product.media[0]?.url} />
        <meta property="og:type" content="product" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`https://bonzicart.com/product/${id}`} />
      </Head>

      <Layout>
        <div className="w-full bg-gray-100 py-2 sm:py-4 md:py-6 pt-16 sm:pt-20 md:pt-24">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
            
            {/* Main Product Section */}
            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-sm flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8">
              {/* Left: Product Gallery */}
              <div className="w-full lg:w-1/2 flex flex-col items-center">
                <div className="w-full max-w-sm sm:max-w-md md:max-w-lg aspect-square bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden mb-3 sm:mb-4 md:mb-6">
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
                    <div className="text-gray-400 text-sm md:text-base">No image available</div>
                  )}
                </div>
                <div className="flex gap-2 sm:gap-3 justify-center overflow-x-auto max-w-full scrollbar-hide">
                  {product.media && product.media.length > 0 && product.media.map((media, idx) => (
                    <button
                      key={idx}
                      className={`border-2 rounded-lg w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 flex items-center justify-center overflow-hidden flex-shrink-0 ${selectedMedia && selectedMedia.url === media.url ? 'border-orange-500' : 'border-gray-200'}`}
                      onClick={() => setSelectedMedia(media)}
                      aria-label={`View ${media.type === 'video' ? 'video' : 'image'} ${idx + 1} of ${product.media.length}`}
                    >
                      {media.type === 'video' ? (
                        <Image 
                          src={media.thumbnail} 
                          alt="Video thumbnail" 
                          width={72}
                          height={72}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Image 
                          src={media.url} 
                          alt="Thumbnail" 
                          width={72}
                          height={72}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right: Product Info */}
              <div className="w-full lg:w-1/2 flex flex-col gap-3 sm:gap-4">
                <div className="flex items-start justify-between gap-3">
                  <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800 leading-tight flex-1">{product.name}</h1>
                  <button
                    className="p-2 rounded hover:bg-gray-100 text-orange-500 border border-gray-200 flex-shrink-0"
                    aria-label="Share product"
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: product.name,
                          text: product.description,
                          url: window.location.href
                        });
                      } else {
                        alert('Sharing is not supported on this browser.');
                      }
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <circle cx="18" cy="5" r="2" fill="currentColor" />
                      <circle cx="6" cy="12" r="2" fill="currentColor" />
                      <circle cx="18" cy="19" r="2" fill="currentColor" />
                      <line x1="8" y1="12" x2="16" y2="6" stroke="currentColor" strokeWidth="2" />
                      <line x1="8" y1="12" x2="16" y2="19" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </button>
                </div>
                
                <div className="flex items-center gap-3 text-sm sm:text-base text-gray-600">
                  <span className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-sm sm:text-base ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>⭐</span>
                    ))}
                  </span>
                  <span className="text-xs sm:text-sm">{product.rating} ({product.reviews} feedbacks)</span>
                  <span className="text-xs sm:text-sm">{product.orders} orders</span>
                </div>
                
                <div className="flex flex-col gap-3">
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-md">
                    {priceLoading ? (
                      <div className="flex items-center justify-center h-20">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
                      </div>
                    ) : priceData ? (
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="line-through text-gray-500 text-sm sm:text-base">MRP: ₹{priceData.mrp}</span>
                          <span className="text-green-600 font-semibold text-sm">Save {priceData.save_percentage}%</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="text-lg sm:text-xl md:text-2xl font-bold text-orange-600">Price: ₹{priceData.sale_price ? parseFloat(priceData.sale_price.replace('INR ', '')).toFixed(2) : 'N/A'}</span>
                          <span className="text-xs sm:text-sm text-gray-500">(Exclusive of all taxes)</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="text-base sm:text-lg font-bold text-red-600">₹{priceData.sale_price_with_tax ? parseFloat(priceData.sale_price_with_tax.replace('INR ', '')).toFixed(2) : 'N/A'} / Piece</span>
                          <span className="text-xs sm:text-sm text-gray-500">(Inclusive of all taxes)</span>
                        </div>
                        {priceData.stock < 10 && (
                          <div className="text-sm text-red-600 mt-2 font-semibold">
                            Only {priceData.stock} left in stock!
                          </div>
                        )}
                      </div>
                    ) : (
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="line-through text-gray-500 text-sm sm:text-base">MRP: ₹{product.priceDetails.mrp.toFixed(2)}</span>
                          <span className="text-green-600 font-semibold text-sm">Save {getSavePercentage()}%</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="text-lg sm:text-xl md:text-2xl font-bold text-orange-600">Price: ₹{product.priceDetails.price.toFixed(2)}</span>
                          <span className="text-xs sm:text-sm text-gray-500">(Exclusive of all taxes)</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="text-base sm:text-lg font-bold text-red-600">₹{product.priceDetails.finalPrice.toFixed(2)} / Piece</span>
                          <span className="text-xs sm:text-sm text-gray-500">(Inclusive of all taxes)</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div 
                    className="relative w-fit"
                    onMouseEnter={() => setShowBulkPrice(true)}
                    onMouseLeave={() => setShowBulkPrice(false)}
                  >
                    <button 
                      className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-md font-semibold flex items-center gap-2 transition-colors duration-200 text-sm sm:text-base"
                      aria-label="View bulk pricing options"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Bulk Price
                    </button>
                    {showBulkPrice && (
                      <div className="absolute top-full right-0 mt-2 w-72 sm:w-80 bg-white border rounded-lg shadow-lg z-10 p-4">
                        <h4 className="font-bold text-sm mb-3 text-gray-900">Seller Bulk Price Details:</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm text-left text-black">
                              <thead className="bg-gray-100">
                                  <tr>
                                      <th className="p-2 font-semibold text-black">From</th>
                                      <th className="p-2 font-semibold text-black">To</th>
                                      <th className="p-2 font-semibold text-black">Bulk Price (₹)</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  {(priceData?.bulk_price || product.bulkPricing).map((tier, index) => (
                                      <tr key={index} className="border-b">
                                          <td className="p-2 text-black">{tier.bulk_price_from || tier.from}</td>
                                          <td className="p-2 text-black">{tier.bulk_price_to || tier.to}</td>
                                          <td className="p-2 text-black">₹ {tier.bulk_price_amount || tier.price}</td>
                                      </tr>
                                  ))}
                              </tbody>
                          </table>
                        </div>
                        <p className="text-sm text-black mt-3">
                            <strong>Note:</strong> Once you adjust the quantity in BonziCart, the price will automatically update according to the bulk pricing offer by seller. BonziCart always suggests purchasing in bulk under a business name with a registered GST number to avail the GST benefits.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3 text-center text-xs sm:text-sm border-y py-3">
                  {[
                    { icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.664 0l3.181-3.183m-4.991-2.696a8.25 8.25 0 00-11.664 0l-3.181 3.183", title: "Replacement", value: product.shippingInfo.Replacement, color: "orange" },
                    { icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z", title: "Processing", value: product.shippingInfo.Processing, color: "blue" },
                    { icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-9m17.25 9v-9m-17.25-9l5.25-5.25h9l5.25 5.25m-17.25 0h17.25", title: "Shipping", value: product.shippingInfo.Shipping, color: "yellow" },
                    { icon: "M13.5 21v-7.5A2.25 2.25 0 0011.25 11.25H10.5a2.25 2.25 0 00-2.25 2.25V21M3 3h18M5.25 3v18m13.5-18v18M9 6.75h6.375a.75.75 0 01.75.75v3.375a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75V7.5a.75.75 0 01.75-.75z", title: "Seller", value: product.shippingInfo.Seller, color: "orange" },
                    { icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z", title: "Warranty", value: product.shippingInfo.Warranty, color: "green" }
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 sm:h-6 sm:w-6 mx-auto text-${item.color}-500 mb-1`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                      <div className={`font-semibold text-${item.color}-500 mb-1 text-xs sm:text-sm`}>{item.title}</div>
                      <div className="text-gray-600 text-xs sm:text-sm">{item.value}</div>
                    </div>
                  ))}
                </div>

                {/* Product Options and Actions Layout */}
                <div className="flex flex-col xl:flex-row gap-4 sm:gap-6">
                  {/* Left Column - Product Options */}
                  <div className="flex-1">
                    <div className="space-y-4">
                      {/* Color - Only show if colors exist */}
                      {product.colors && Array.isArray(product.colors) && product.colors.length > 0 && (
                        <div>
                          <span className="font-medium text-gray-700 text-sm sm:text-base mb-2 block">Color</span>
                          <div className="flex gap-2 flex-wrap">
                            {product.colors.map((color) => (
                              <button 
                                key={color.id} 
                                className={`px-3 py-1.5 bg-gray-100 rounded border text-gray-700 hover:bg-orange-100 text-sm ${
                                  selectedColor === color.id ? 'border-orange-500 bg-orange-50' : 'border-gray-300'
                                }`}
                                onClick={() => {
                                  setSelectedColor(color.id);
                                  if (color.image) {
                                    setSelectedMedia({
                                      type: 'image',
                                      url: color.image,
                                      thumbnail: color.image
                                    });
                                  }
                                }}
                                aria-label={`Select ${color.name} color`}
                              >
                                {color.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Quantity */}
                      <div>
                        <span className="font-medium text-gray-700 text-sm sm:text-base mb-2 block">Quantity</span>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center">
                            <button 
                              className="px-3 py-2 bg-gray-200 text-black rounded-l text-sm sm:text-base hover:bg-gray-300" 
                              onClick={() => handleQuantityChange(-1)}
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            <span className="px-4 py-2 border-t border-b text-sm sm:text-base bg-white">{quantity}</span>
                            <button 
                              className="px-3 py-2 bg-gray-200 text-black rounded-r text-sm sm:text-base hover:bg-gray-300" 
                              onClick={() => handleQuantityChange(1)}
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                          <span className="text-green-600 text-sm">(Stock {priceData?.stock || product.stock} pieces)</span>
                        </div>
                      </div>

                      {/* Bulk pricing link */}
                      <div className="text-sm text-orange-600">
                        Want to buy in bulk? <a href="#" className="underline font-semibold">Learn about bulk pricing options</a>
                      </div>

                      {/* Shipping and COD */}
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-700">Shipping:</span>
                          <span className="text-green-600 font-semibold">Free Shipping</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-700">COD:</span>
                          <span className="text-gray-700 font-semibold">{product.codAvailable ? 'Available' : 'Not Available'}</span>
                        </div>
                      </div>

                      {/* Total Price */}
                      <div className="bg-green-50 p-3 rounded-lg">
                        <span className="font-medium text-gray-700 text-sm sm:text-base block mb-1">Total Price</span>
                        {priceData ? (
                          (() => {
                            try {
                              const unitPriceWithTax = priceData.sale_price_with_tax ? parseFloat(priceData.sale_price_with_tax.replace('INR ', '')) : 0;
                              const totalPrice = (quantity * unitPriceWithTax).toFixed(2);
                              return (
                                <span className="text-green-600 font-bold text-lg sm:text-xl">
                                  ₹{totalPrice} 
                                  <span className="text-gray-600 font-normal ml-2 text-sm">(incl. tax)</span>
                                </span>
                              );
                            } catch (error) {
                              return (
                                <span className="text-green-600 font-bold text-lg sm:text-xl">
                                  ₹{(product.priceDetails.finalPrice * quantity).toFixed(2)}
                                  <span className="text-gray-600 font-normal ml-2 text-sm">(Qty: {quantity})</span>
                                </span>
                              );
                            }
                          })()
                        ) : (
                          <span className="text-green-600 font-bold text-lg sm:text-xl">
                            ₹{(product.priceDetails.finalPrice * quantity).toFixed(2)}
                            <span className="text-gray-600 font-normal ml-2 text-sm">(Qty: {quantity})</span>
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 items-stretch">
                        <button 
                          className="flex-1 bg-orange-500 text-white px-4 py-3 rounded font-semibold shadow hover:bg-orange-600 text-sm sm:text-base"
                          aria-label="Buy this product now"
                        >
                          Buy Now
                        </button>
                        <button 
                          className="flex-1 bg-white border-2 border-orange-500 text-orange-500 px-4 py-3 rounded font-semibold shadow hover:bg-orange-50 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                          onClick={handleAddToCart}
                          disabled={cartLoading}
                          aria-label="Add this product to cart"
                        >
                          {cartLoading ? 'Adding...' : 'Add To Cart'}
                        </button>
                        <button 
                          className="p-3 bg-white border border-gray-300 text-orange-500 rounded hover:bg-gray-50 text-xl"
                          aria-label="Add to wishlist"
                        >
                          ♡
                        </button>
                      </div>

                      {/* Promotions */}
                      <div>
                        <button 
                          className="bg-gray-100 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow-sm flex items-center gap-2 text-sm hover:bg-gray-200"
                          aria-label="View available seller coupons"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                          </svg>
                          Get Seller Coupons
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Seller Info */}
                  <div className="w-full xl:w-72 flex flex-col">
                    <div className="p-4 bg-gray-50 rounded-lg flex flex-col gap-3 h-full">
                      <div className="text-sm text-gray-600">Sold By</div>
                      <div className="font-bold text-orange-600 text-base">{product.seller}</div>
                      <div className="flex flex-col text-sm text-gray-700 gap-1">
                        <span>{product.positiveSentiment}% Positive Sentiment</span>
                        <span>{product.followers} Followers</span>
                      </div>
                      <div className="flex flex-col gap-2 mt-auto">
                        <button 
                          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2.5 rounded-lg font-semibold shadow text-sm"
                          onClick={() => setShowContactModal(true)}
                          aria-label="Contact the seller"
                        >
                          Contact Seller
                        </button>
                        <div className="grid grid-cols-2 gap-2">
                          <button 
                            className={`px-3 py-2 rounded shadow text-sm transition-colors ${
                              isFollowing 
                                ? 'bg-red-500 text-white border border-red-500 hover:bg-red-600' 
                                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                            } ${isFollowLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={handleFollowToggle}
                            disabled={isFollowLoading}
                            aria-label={isFollowing ? "Unfollow this seller" : "Follow this seller"}
                          >
                            {isFollowLoading ? (
                              <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-1 h-3 w-3 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                ...
                              </span>
                            ) : (
                              isFollowing ? 'Unfollow' : '+ Follow'
                            )}
                          </button>
                          <button 
                            className="bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded shadow text-sm hover:bg-gray-50" 
                            onClick={handleVisitStore}
                            aria-label="Visit seller's store"
                          >
                            Visit Store
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-4 text-sm sm:text-base border-t pt-4 justify-between">
                  <span className="text-orange-600 font-semibold">Seller Return Policy</span>
                  <span className="text-blue-600 font-semibold">Buyer Protection</span>
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

            {/* <RelatedProducts relatedProducts={product.relatedProducts} /> */}

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
