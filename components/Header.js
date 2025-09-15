
import { useState } from 'react';
import Link from 'next/link';

export default function Header({ sidebarOpen, setSidebarOpen, scrolled }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
  
  const categories = [
    { name: 'Apparel Accessories', icon: '👕' },
    { name: 'Computer and Office', icon: '💻' },
    { name: 'Consumer Electronics', icon: '📱' },
    { name: 'Electronic Components', icon: '🔌' },
    { name: 'Home & Garden', icon: '🏡' },
    { name: 'Home Appliances', icon: '🔧' },
    { name: 'Home Improvement', icon: '🔨' },
    { name: 'Jewelry and Accessories', icon: '💎' },
    { name: 'Lights & Lighting', icon: '💡' },
    { name: 'Luggage & Bags', icon: '🎒' },
    { name: 'Shoes', icon: '👟' },
    { name: 'Office & School Supplies', icon: '📚' },
    { name: 'Security & Protection', icon: '🔒' },
    { name: 'Sports & Entertainment', icon: '⚽' },
    { name: 'Toys & Hobbies', icon: '🎮' },
  ];
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
      scrolled ? 'shadow-md' : 'shadow-sm'
    }`}>
      {/* Main Header */}
      <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 py-3">
        {/* Mobile: Two-row layout, Desktop: Single row */}
        <div className="block sm:flex sm:items-center sm:justify-between">
          {/* First Row - Logo and Icons */}
          <div className="flex items-center justify-between sm:flex-shrink-0">
            {/* Logo/Hamburger Menu - Left aligned */}
            <div className="flex-shrink-0">
              {scrolled ? (
                // Hamburger Menu when scrolled
                <div className="relative">
                  <div
                    className="inline-block"
                    onMouseEnter={() => setShowCategoriesDropdown(true)}
                    onMouseLeave={() => setShowCategoriesDropdown(false)}
                  >
                    <button className="flex flex-col space-y-1 p-2 hover:bg-gray-100 rounded-md transition-colors">
                      <div className="w-6 h-0.5 bg-gray-600"></div>
                      <div className="w-6 h-0.5 bg-gray-600"></div>
                      <div className="w-6 h-0.5 bg-gray-600"></div>
                    </button>

                    {/* Categories Dropdown */}
                    {showCategoriesDropdown && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                        <div className="p-3">
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
                                <span className="mr-2 text-sm">{category.icon}</span>
                                <span className="text-xs">{category.name}</span>
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
                <Link href="/" className="flex items-center">
                  <div className="bg-orange-500 text-white px-2 sm:px-3 py-2 rounded-md font-bold text-base sm:text-lg">
                    BonziCart
                  </div>
                </Link>
              )}
            </div>

            {/* Right Icons and Language - Only on mobile first row */}
            <div className="flex items-center space-x-2 sm:hidden">
              <div className="relative">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">0</span>
              </div>

              <div className="relative">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">0</span>
              </div>

              <div className="text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Second Row - Search Bar (Mobile), First Row (Desktop) */}
          <div className="mt-3 sm:mt-0 sm:flex-1 sm:max-w-2xl sm:mx-8">
            <div className="flex">
              <select className="px-2 py-2 border border-r-0 border-gray-300 bg-gray-50 text-gray-800 text-sm min-w-0 focus:outline-none focus:bg-white focus:border-orange-500 w-24 sm:w-32">
                <option value="">All Categories</option>
                {categories.map((category, index) => (
                  <option key={index} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-2 sm:px-4 py-2 border border-gray-300 focus:outline-none focus:border-orange-500 text-sm"
              />
              <button className="px-2 sm:px-4 py-2 bg-orange-500 text-white hover:bg-orange-600">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop: Right Icons and Language */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <div className="relative">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">0</span>
            </div>

            <div className="relative">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">0</span>
            </div>

            <div className="text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>

            <select className="text-sm text-gray-600 bg-transparent border-none focus:outline-none">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
        </div>
        
        {/* Navigation Links - Responsive with horizontal scroll on small screens */}
        <div className="mt-3">
          <div className="flex justify-center">
            {/* Desktop: Normal spacing */}
            <div className="hidden sm:flex sm:justify-center sm:space-x-8 text-sm">
              <Link href="/deals" className="text-gray-600 hover:text-orange-500 whitespace-nowrap">Deals & Special Offers</Link>
              <Link href="/exclusive" className="text-gray-600 hover:text-orange-500 whitespace-nowrap">Exclusive Sales</Link>
              <Link href="/diy" className="text-gray-600 hover:text-orange-500 whitespace-nowrap">DIY</Link>
              <Link href="/smart-home" className="text-gray-600 hover:text-orange-500 whitespace-nowrap">SMART HOME</Link>
            </div>

            {/* Mobile: Horizontal scroll */}
            <div className="sm:hidden overflow-x-auto scrollbar-hide">
              <div className="flex space-x-4 px-2 text-sm min-w-max">
                <Link href="/deals" className="text-gray-600 hover:text-orange-500 whitespace-nowrap">Deals & Special Offers</Link>
                <Link href="/exclusive" className="text-gray-600 hover:text-orange-500 whitespace-nowrap">Exclusive Sales</Link>
                <Link href="/diy" className="text-gray-600 hover:text-orange-500 whitespace-nowrap">DIY</Link>
                <Link href="/smart-home" className="text-gray-600 hover:text-orange-500 whitespace-nowrap">SMART HOME</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
