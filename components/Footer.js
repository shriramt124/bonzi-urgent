import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaPinterest, FaCcVisa, FaCcAmex, FaCcMastercard, FaGooglePlay, FaAppStoreIos } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Main Footer Content */}
      <div className="w-full py-6 sm:py-12 bg-white border-t border-gray-200 mt-8 sm:mt-16">
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-12">
            {/* App Download Section */}
            <div className="sm:col-span-1">
              <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-4">Download Our App</h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-4">Fancy Shopping on the go</p>
              <div className="flex flex-col space-y-2 sm:space-y-3">
                <a href="#" className="inline-flex items-center px-2 sm:px-4 py-1 sm:py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <FaGooglePlay className="h-4 w-4 sm:h-6 sm:w-6 text-orange-500 mr-2 sm:mr-3" />
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Get it on</div>
                    <div className="text-xs sm:text-sm font-medium text-gray-900">Google Play</div>
                  </div>
                </a>
                <a href="#" className="inline-flex items-center px-2 sm:px-4 py-1 sm:py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <FaAppStoreIos className="h-4 w-4 sm:h-6 sm:w-6 text-orange-500 mr-2 sm:mr-3" />
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Download on the</div>
                    <div className="text-xs sm:text-sm font-medium text-gray-900">App Store</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="sm:col-span-1">
              <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-4">Stay Updated</h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-4">Subscribe to get the latest deals and more</p>
              <form className="space-y-2 sm:space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-2 sm:px-4 py-1 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 text-xs sm:text-sm"
                />
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-1 sm:py-2 px-2 sm:px-4 rounded-lg transition-colors duration-200 text-xs sm:text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* About Us Section */}
            <div className="sm:col-span-1">
              <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-4">About Us</h3>
              <ul className="space-y-1 sm:space-y-1.5">
                <li><a href="https://www.bonzicart.com/about_us/" className="text-gray-600 hover:text-orange-500 transition-colors duration-200 text-xs sm:text-sm">About Bonzi Cart</a></li>
                <li><a href="https://www.bonzicart.com/Intellectual_property_claims/" className="text-gray-600 hover:text-orange-500 transition-colors duration-200 text-xs sm:text-sm">Intellectual Property</a></li>
                <li><a href="https://www.bonzicart.com/terms_and_condition/" className="text-gray-600 hover:text-orange-500 transition-colors duration-200 text-xs sm:text-sm">Terms & Conditions</a></li>
                <li><a href="https://www.bonzicart.com/privacy_policy/" className="text-gray-600 hover:text-orange-500 transition-colors duration-200 text-xs sm:text-sm">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Seller Section */}
            <div className="sm:col-span-1">
              <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-4">For Sellers</h3>
              <ul className="space-y-1 sm:space-y-1.5">
                <li><a href="https://www.bonzicart.com/seller/" className="text-gray-600 hover:text-orange-500 transition-colors duration-200 text-xs sm:text-sm">Become a Seller</a></li>
                <li><a href="https://www.bonzicart.com/seller/eligibility_to_sell/" className="text-gray-600 hover:text-orange-500 transition-colors duration-200 text-xs sm:text-sm">Eligibility to Sell</a></li>
                <li><a href="https://www.bonzicart.com/seller/seller_policy/" className="text-gray-600 hover:text-orange-500 transition-colors duration-200 text-xs sm:text-sm">Seller Policy</a></li>
                <li><a href="https://www.bonzicart.com/contact-us" className="text-gray-600 hover:text-orange-500 transition-colors duration-200 text-xs sm:text-sm">Contact Us</a></li>
              </ul>
            </div>

            {/* Buyer Section */}
            <div className="sm:col-span-1">
              <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-4">For Buyers</h3>
              <ul className="space-y-1 sm:space-y-1.5">
                <li><a href="https://www.bonzicart.com/buyer/terms_and_conditions/" className="text-gray-600 hover:text-orange-500 transition-colors duration-200 text-xs sm:text-sm">Terms & Conditions</a></li>
                <li><a href="https://www.bonzicart.com/buyer/protection/" className="text-gray-600 hover:text-orange-500 transition-colors duration-200 text-xs sm:text-sm">Buyer Protection</a></li>
                <li><a href="https://www.bonzicart.com/buyer/policy/" className="text-gray-600 hover:text-orange-500 transition-colors duration-200 text-xs sm:text-sm">Buyer Policy</a></li>
                <li><a href="https://www.bonzicart.com/buyer/return_policy/" className="text-gray-600 hover:text-orange-500 transition-colors duration-200 text-xs sm:text-sm">Shipping & Returns</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods Section */}
      

      {/* Copyright Section */}
      <div className="w-full bg-gray-900 text-white py-3 px-4 sm:py-6">
        <div className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
              <div className="flex items-center space-x-2 sm:space-x-4">
                <img src="/BonziLogo.png" alt="BonziCart Logo" className="h-6 w-6 sm:h-8 sm:w-auto" />
                <span className="text-xs sm:text-sm">© 2022–2025 BonziCart.com. All rights reserved.</span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-6">
                <span className="text-xs sm:text-sm text-gray-400">Follow Us</span>
                <div className="flex space-x-2 sm:space-x-4">
                  <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors duration-200">
                    <FaFacebookF className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                  <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors duration-200">
                    <FaInstagram className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                  <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors duration-200">
                    <FaTwitter className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                  <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors duration-200">
                    <FaLinkedinIn className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                  <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors duration-200">
                    <FaYoutube className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                  <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors duration-200">
                    <FaPinterest className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
       
    </footer>
  );
}