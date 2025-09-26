import { useState } from 'react';
import Link from 'next/link';
import { 
  FaTshirt, FaLaptop, FaMobileAlt, FaMicrochip, FaHome, FaBlender, FaTools, FaGem, FaLightbulb, FaSuitcase, FaShoePrints, FaBook, FaShieldAlt, FaFutbol, FaGamepad 
} from 'react-icons/fa';

export default function Header({ sidebarOpen, setSidebarOpen, scrolled }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  
  const categories = [
    { name: 'Apparel Accessories', icon: <FaTshirt /> },
    { name: 'Computer and Office', icon: <FaLaptop /> },
    { name: 'Consumer Electronics', icon: <FaMobileAlt /> },
    { name: 'Electronic Components', icon: <FaMicrochip /> },
    { name: 'Home & Garden', icon: <FaHome /> },
    { name: 'Home Appliances', icon: <FaBlender /> },
    { name: 'Home Improvement', icon: <FaTools /> },
    { name: 'Jewelry and Accessories', icon: <FaGem /> },
    { name: 'Lights & Lighting', icon: <FaLightbulb /> },
    { name: 'Luggage & Bags', icon: <FaSuitcase /> },
    { name: 'Shoes', icon: <FaShoePrints /> },
    { name: 'Office & School Supplies', icon: <FaBook /> },
    { name: 'Security & Protection', icon: <FaShieldAlt /> },
    { name: 'Sports & Entertainment', icon: <FaFutbol /> },
    { name: 'Toys & Hobbies', icon: <FaGamepad /> },
  ];
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
      scrolled ? 'shadow-md' : 'shadow-sm'
    }`}>
      {/* Main Header */}
      <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 py-4">
        {/* Mobile: Two-row layout, Desktop: Single row */}
        <div className="block sm:flex sm:items-center sm:justify-between">
          {/* First Row - Logo and Icons */}
          <div className="flex items-center justify-between sm:flex-shrink-0">
            {/* Logo/Hamburger Menu - Left aligned */}
            <div className="flex-shrink-0" style={{ minWidth: 120 }}>
              {scrolled ? (
                // Hamburger Menu when scrolled
                <div className="relative flex items-center justify-center" style={{ minWidth: 120, minHeight: 40 }}>
                  <div
                    className="inline-block"
                    onMouseEnter={() => setShowCategoriesDropdown(true)}
                    onMouseLeave={() => setShowCategoriesDropdown(false)}
                  >
                    <button 
                      className="flex flex-col space-y-1 p-2 hover:bg-gray-100 rounded-md transition-colors"
                      aria-label="Open categories menu"
                    >
                      <div className="w-6 h-0.5 bg-gray-600"></div>
                      <div className="w-6 h-0.5 bg-gray-600"></div>
                      <div className="w-6 h-0.5 bg-gray-600"></div>
                    </button>

                    {/* Categories Dropdown */}
                    {showCategoriesDropdown && (
                      <div className="absolute top-full left-0 sm:left-1/2 sm:transform sm:-translate-x-1/2 -mt-1 w-64 sm:w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-w-[calc(100vw-2rem)]">
                        <div className="p-3 max-h-80 overflow-y-auto">
                          <h3 className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                            Categories
                          </h3>

                          <div className="space-y-0.5">
                            {categories.map((category, index) => (
                              <a
                                key={index}
                                href="#"
                                className="flex items-center py-1.5 px-2 text-gray-600 hover:bg-gray-100 hover:text-orange-500 rounded-md transition-colors text-xs"
                              >
                                <span className="mr-2 text-base">{category.icon}</span>
                                <span className="text-xs truncate">{category.name}</span>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                // Logo when not scrolled
                <Link href="/" className="flex items-center bg-white rounded-md px-2 py-1" style={{ minWidth: 120, minHeight: 40 }}>
                  <img
                    src="/BonziLogo.png"
                    alt="BonziCart Logo"
                    className="h-8 sm:h-10 w-auto object-contain"
                  />
                </Link>
              )}
            </div>

            {/* Right Icons and Language - Only on mobile first row */}
            <div className="flex items-center space-x-2 sm:hidden">
              <button 
                className="relative"
                aria-label="View wishlist"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">0</span>
              </button>

              <button 
                className="relative"
                aria-label="View shopping cart"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">0</span>
              </button>

              <button 
                className="text-gray-600"
                aria-label="User account menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Second Row - Search Bar (Mobile), First Row (Desktop) */}
          <div className="mt-3 sm:mt-0 sm:flex-1 sm:max-w-xl sm:mx-6">
            <div className="flex">
              <div className="relative group">
                <label htmlFor="category-select" className="sr-only">Select category</label>
                <select 
                  id="category-select"
                  className="px-2 py-1.5 pr-7 border border-r-0 border-gray-300 bg-gray-50 text-gray-800 text-sm min-w-0 focus:outline-none focus:bg-white focus:border-orange-500 w-14 sm:w-20 appearance-none custom-select-orange"
                >
                  <option value="">All</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-1.5 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <style jsx global>{`
                  select.custom-select-orange option:hover, select.custom-select-orange option:focus {
                    background-color: #fff7ed !important;
                    color: #ea580c !important;
                  }
                `}</style>
              </div>
              <label htmlFor="search-input" className="sr-only">Search for products</label>
              <input
                id="search-input"
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-2 sm:px-3 py-1.5 border border-gray-300 focus:outline-none focus:border-orange-500 text-sm text-black"
              />
              <button 
                className="px-2.5 sm:px-4 py-1.5 bg-orange-500 text-white hover:bg-orange-600"
                aria-label="Search"
              >
                <svg className="w-4 h-4 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop: Right Icons */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <button 
              className="relative"
              aria-label="View wishlist"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">0</span>
            </button>

            <button 
              className="relative"
              aria-label="View shopping cart"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">0</span>
            </button>

            <div className="relative">
              <button
                className="focus:outline-none"
                onClick={() => setShowUserDropdown((v) => !v)}
                tabIndex={0}
                aria-label="User account menu"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              {showUserDropdown && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50 p-0.5"
                     onMouseLeave={() => setShowUserDropdown(false)}>
                  <div className="divide-y divide-gray-200">
                    <div className="py-2">
                      <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50 text-sm transition-colors">
                        <span className="mr-2"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></span> My Account
                      </a>
                      <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50 text-sm transition-colors">
                        <span className="mr-2"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V7a2 2 0 00-2-2H6a2 2 0 00-2 2v6m16 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16 0H4" /></svg></span> My Orders
                      </a>
                      <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50 text-sm transition-colors">
                        <span className="mr-2"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h2m10-4H7a2 2 0 00-2 2v0a2 2 0 002 2h10a2 2 0 002-2v0a2 2 0 00-2-2z" /></svg></span> My Message
                      </a>
                    </div>
                    <div className="py-2 px-4">
                      <div className="text-black text-center font-semibold mb-2 text-sm">Buyer Central</div>
                      <Link href="/register" className="w-full block border border-orange-400 text-orange-600 rounded py-1 mb-2 font-semibold hover:bg-orange-50 text-sm text-center">
                        Register
                      </Link>
                      <Link href="/login" className="w-full block bg-orange-500 text-white rounded py-1 font-semibold hover:bg-orange-600 text-sm text-center">
                        Login
                      </Link>
                    </div>
                    <div className="py-2 px-4">
                      <div className="text-gray-700 text-center font-semibold mb-2 text-sm">Seller Central</div>
                      <Link href="/login" className="w-full block border border-orange-400 text-orange-600 rounded py-1 mb-2 font-semibold hover:bg-orange-50 text-sm text-center">
                        Login
                      </Link>
                      <button className="w-full bg-orange-500 text-white rounded py-1 font-semibold hover:bg-orange-600 text-sm">Create Account</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Navigation Links and Language Dropdown - Responsive with horizontal scroll on small screens */}
        <div className="mt-3">
          <div className="flex justify-between items-center">
            {/* Navigation Links */}
            <div className="flex justify-center flex-1">
              {/* Desktop: Normal spacing */}
              <div className="hidden sm:flex sm:justify-center sm:space-x-8 text-sm">
                <Link href="/deals" className="text-gray-600 hover:text-orange-500 bg-gray-100 hover:bg-orange-50 px-2 py-1.5 rounded transition-colors whitespace-nowrap">Deals & Special Offers</Link>
                <Link href="/exclusive" className="text-gray-600 hover:text-orange-500 bg-gray-100 hover:bg-orange-50 px-2 py-1.5 rounded transition-colors whitespace-nowrap">Exclusive Sales</Link>
                <Link href="/diy" className="text-gray-600 hover:text-orange-500 bg-gray-100 hover:bg-orange-50 px-2 py-1.5 rounded transition-colors whitespace-nowrap">DIY</Link>
                <Link href="/smart-home" className="text-gray-600 hover:text-orange-500 bg-gray-100 hover:bg-orange-50 px-2 py-1.5 rounded transition-colors whitespace-nowrap">SMART HOME</Link>
              </div>
              {/* Mobile: Horizontal scroll */}
              <div className="sm:hidden overflow-x-auto scrollbar-hide">
                <div className="flex space-x-4 px-2 text-sm min-w-max">
                  <Link href="/deals" className="text-gray-600 hover:text-orange-500 bg-gray-100 hover:bg-orange-50 px-2 py-1.5 rounded transition-colors whitespace-nowrap">Deals & Special Offers</Link>
                  <Link href="/exclusive" className="text-gray-600 hover:text-orange-500 bg-gray-100 hover:bg-orange-50 px-2 py-1.5 rounded transition-colors whitespace-nowrap">Exclusive Sales</Link>
                  <Link href="/diy" className="text-gray-600 hover:text-orange-500 bg-gray-100 hover:bg-orange-50 px-2 py-1.5 rounded transition-colors whitespace-nowrap">DIY</Link>
                  <Link href="/smart-home" className="text-gray-600 hover:text-orange-500 bg-gray-100 hover:bg-orange-50 px-2 py-1.5 rounded transition-colors whitespace-nowrap">SMART HOME</Link>
                </div>
              </div>
            </div>

            {/* Language Dropdown - Desktop only */}
            <div className="hidden sm:block">
              <label htmlFor="language-select" className="sr-only">Select language</label>
              <select 
                id="language-select"
                className="text-sm text-gray-600 bg-transparent border-none focus:outline-none"
              >
                <option>English</option>
                <option>Hindi</option>
                <option>Bengali</option>
                <option>Gujrati</option>
                <option>Kannada</option>
                <option>Marathi</option>
                <option>Odiya</option>
                <option>Punjabi</option>
                <option>Tamil</option>
                <option>Telugu</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
