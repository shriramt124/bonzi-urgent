
import { useState } from 'react';
import Link from 'next/link';

export default function Header({ sidebarOpen, setSidebarOpen, scrolled }) {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <header className={`fixed top-0 w-full z-50 bg-white transition-all duration-300 ${
      scrolled ? 'shadow-md' : 'shadow-sm'
    }`}>
      {/* Main Header */}
      <div className="px-4 py-3">
        <div className="flex items-center">
          {/* Logo - Centered */}
          <div className="flex-1 flex justify-center">
            <Link href="/" className="flex items-center">
              <div className="bg-orange-500 text-white px-3 py-2 rounded-md font-bold text-lg">
                BonziCart
              </div>
            </Link>
          </div>
          
          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="flex">
              <select className="px-3 py-2 border border-r-0 border-gray-300 bg-gray-50 text-sm">
                <option>All</option>
                <option>Electronics</option>
                <option>Home</option>
              </select>
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 focus:outline-none focus:border-orange-500"
              />
              <button className="px-4 py-2 bg-orange-500 text-white hover:bg-orange-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Right Icons and Language */}
          <div className="flex-1 flex items-center justify-end space-x-4">
            <div className="text-sm text-gray-600">
              Select Language
            </div>
            
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
          </div>
        </div>
        
        {/* Navigation Links */}
        <div className="mt-3 flex space-x-8 text-sm">
          <Link href="/deals" className="text-gray-600 hover:text-orange-500">Deals & Special Offers</Link>
          <Link href="/exclusive" className="text-gray-600 hover:text-orange-500">Exclusive Sales</Link>
          <Link href="/diy" className="text-gray-600 hover:text-orange-500">DIY</Link>
          <Link href="/smart-home" className="text-gray-600 hover:text-orange-500">SMART HOME</Link>
        </div>
      </div>
    </header>
  );
}
