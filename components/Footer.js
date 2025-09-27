
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaPinterest, FaCcVisa, FaCcAmex, FaCcMastercard, FaGooglePlay, FaAppStoreIos } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Main Footer Content */}
      <div className="w-full py-6 sm:py-12 bg-white border-t border-gray-200 mt-8 sm:mt-16">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            {/* Download Our App */}
            <div className="col-span-1">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">Download Our App</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">Fancy Shopping on the go</p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="bg-orange-500 p-1.5 sm:p-2 rounded">
                    <span className="text-white text-xs sm:text-sm font-bold">▶</span>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Get it on</div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-800">Google Play</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="bg-black p-1.5 sm:p-2 rounded">
                    <span className="text-white text-xs sm:text-sm font-bold">🍎</span>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Download on the</div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-800">App Store</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stay Updated */}
            <div className="col-span-1">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">Stay Updated</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">Subscribe to get the latest deals and more</p>
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-l-md sm:rounded-r-none rounded-r-md mb-2 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="bg-orange-500 text-white px-4 py-2 text-xs sm:text-sm rounded-r-md sm:rounded-l-none rounded-l-md hover:bg-orange-600 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* About Us */}
            <div className="col-span-1">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">About Us</h3>
              <ul className="space-y-2">
                <li><a href="https://www.bonzicart.com/about_us/" className="text-xs sm:text-sm text-gray-600 hover:text-orange-600 transition-colors">About Bonzi Cart</a></li>
                <li><a href="https://www.bonzicart.com/Intellectual_property_claims/" className="text-xs sm:text-sm text-gray-600 hover:text-orange-600 transition-colors">Intellectual Property</a></li>
                <li><a href="https://www.bonzicart.com/terms_and_condition/" className="text-xs sm:text-sm text-gray-600 hover:text-orange-600 transition-colors">Terms & Conditions</a></li>
                <li><a href="https://www.bonzicart.com/privacy_policy/" className="text-xs sm:text-sm text-gray-600 hover:text-orange-600 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            {/* For Sellers */}
            <div className="col-span-1">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">For Sellers</h3>
              <ul className="space-y-2">
                <li><a href="https://www.bonzicart.com/seller/" className="text-xs sm:text-sm text-gray-600 hover:text-orange-600 transition-colors">Become a Seller</a></li>
                <li><a href="https://www.bonzicart.com/seller/eligibility_to_sell/" className="text-xs sm:text-sm text-gray-600 hover:text-orange-600 transition-colors">Eligibility to Sell</a></li>
                <li><a href="https://www.bonzicart.com/seller/seller_policy/" className="text-xs sm:text-sm text-gray-600 hover:text-orange-600 transition-colors">Seller Policy</a></li>
                <li><a href="https://www.bonzicart.com/contact-us" className="text-xs sm:text-sm text-gray-600 hover:text-orange-600 transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* For Buyers */}
            <div className="col-span-1">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">For Buyers</h3>
              <ul className="space-y-2">
                <li><a href="https://www.bonzicart.com/buyer/terms_and_conditions/" className="text-xs sm:text-sm text-gray-600 hover:text-orange-600 transition-colors">Terms & Conditions</a></li>
                <li><a href="https://www.bonzicart.com/buyer/protection/" className="text-xs sm:text-sm text-gray-600 hover:text-orange-600 transition-colors">Buyer Protection</a></li>
                <li><a href="https://www.bonzicart.com/buyer/policy/" className="text-xs sm:text-sm text-gray-600 hover:text-orange-600 transition-colors">Buyer Policy</a></li>
                <li><a href="https://www.bonzicart.com/buyer/return_policy/" className="text-xs sm:text-sm text-gray-600 hover:text-orange-600 transition-colors">Shipping & Returns</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
