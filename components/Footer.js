
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaPinterest, FaCcVisa, FaCcAmex, FaCcMastercard, FaGooglePlay, FaAppStoreIos } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* App Download Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Download Our App</h3>
            <p className="text-gray-600 text-sm mb-4">Fancy Shopping on the go</p>
            <div className="flex flex-col space-y-3">
              <a href="#" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <FaGooglePlay className="h-6 w-6 text-orange-500 mr-3" />
                <div className="text-left">
                  <div className="text-xs text-gray-500">Get it on</div>
                  <div className="text-sm font-medium text-gray-900">Google Play</div>
                </div>
              </a>
              <a href="#" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <FaAppStoreIos className="h-6 w-6 text-orange-500 mr-3" />
                <div className="text-left">
                  <div className="text-xs text-gray-500">Download on the</div>
                  <div className="text-sm font-medium text-gray-900">App Store</div>
                </div>
              </a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Stay Updated</h3>
            <p className="text-gray-600 text-sm mb-4">Subscribe to get the latest deals and more</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
              />
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* About Us Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">About Us</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-200 text-sm">About Bonzi Cart</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-200 text-sm">Intellectual Property</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-200 text-sm">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-200 text-sm">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Seller Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">For Sellers</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-200 text-sm">Become a Seller</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-200 text-sm">Eligibility to Sell</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-200 text-sm">Seller Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-200 text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Buyer Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">For Buyers</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-200 text-sm">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-200 text-sm">Buyer Protection</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-200 text-sm">Buyer Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-200 text-sm">Shipping & Returns</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Payment Methods Section */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Accepted Payment Methods</h3>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <FaCcVisa className="h-10 w-10 text-orange-500 hover:text-orange-600 transition-colors duration-200" />
              <FaCcAmex className="h-10 w-10 text-orange-500 hover:text-orange-600 transition-colors duration-200" />
              <FaCcMastercard className="h-10 w-10 text-orange-500 hover:text-orange-600 transition-colors duration-200" />
              <div className="flex items-center space-x-2">
                <span className="text-orange-500 font-medium text-sm">Bank Transfer</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-orange-500 font-medium text-sm">Paytm</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-orange-500 font-medium text-sm">UPI</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-orange-500 font-medium text-sm">Maestro</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <img src="/BonziLogo.png" alt="BonziCart Logo" className="h-8 w-auto" />
              <span className="text-sm">© 2022–2025 BonziCart.com. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-sm text-gray-400">Follow Us</span>
              <div className="flex space-x-4">
                <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors duration-200">
                  <FaFacebookF className="h-5 w-5" />
                </a>
                <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors duration-200">
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors duration-200">
                  <FaTwitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors duration-200">
                  <FaLinkedinIn className="h-5 w-5" />
                </a>
                <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors duration-200">
                  <FaYoutube className="h-5 w-5" />
                </a>
                <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors duration-200">
                  <FaPinterest className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
