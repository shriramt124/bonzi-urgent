
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold text-xl mb-4 inline-block">
                BonziCart
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Your trusted online marketplace for quality products at the best prices.
                Shop with confidence and discover amazing deals every day.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="mb-6">
              <h4 className="text-gray-800 font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="bg-gray-100 hover:bg-orange-500 hover:text-white p-2 rounded-full transition-colors duration-300 text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="bg-gray-100 hover:bg-orange-500 hover:text-white p-2 rounded-full transition-colors duration-300 text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="bg-gray-100 hover:bg-orange-500 hover:text-white p-2 rounded-full transition-colors duration-300 text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.749.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.017z"/>
                  </svg>
                </a>
                <a href="#" className="bg-gray-100 hover:bg-orange-500 hover:text-white p-2 rounded-full transition-colors duration-300 text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.749.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.017z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-800 font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300 text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300 text-sm">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300 text-sm">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300 text-sm">Shipping Info</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300 text-sm">Returns & Exchanges</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300 text-sm">Size Guide</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-gray-800 font-semibold text-lg mb-6">Customer Service</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300 text-sm">My Account</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300 text-sm">Order Tracking</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300 text-sm">Wishlist</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300 text-sm">Customer Reviews</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300 text-sm">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300 text-sm">Live Chat</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-gray-800 font-semibold text-lg mb-6">Stay Connected</h3>

            {/* Contact Info */}
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <svg className="w-4 h-4 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span className="text-gray-600 text-sm">123 Shopping Street, City, State 12345</span>
              </div>
              <div className="flex items-center mb-3">
                <svg className="w-4 h-4 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span className="text-gray-600 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span className="text-gray-600 text-sm">support@bonzicart.com</span>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-gray-600 text-sm mb-3">Subscribe for exclusive deals</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-100 border border-gray-300 rounded-l-md text-gray-800 placeholder-gray-500 focus:outline-none focus:border-orange-500 text-sm"
                />
                <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-r-md transition-colors duration-300 text-sm font-medium">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

            {/* Payment Methods */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 text-sm font-medium">We Accept:</span>
              <div className="flex space-x-2">
                <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">VISA</div>
                <div className="bg-blue-700 text-white px-2 py-1 rounded text-xs font-bold">MC</div>
                <div className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">PayTM</div>
                <div className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-bold">UPI</div>
                <div className="bg-green-600 text-white px-2 py-1 rounded text-xs font-bold">PayPal</div>
              </div>
            </div>

            {/* App Download */}
            <div className="flex items-center space-x-3">
              <span className="text-gray-600 text-sm">Download App:</span>
              <div className="flex space-x-2">
                <div className="bg-black text-white px-3 py-1 rounded-md flex items-center space-x-1 text-xs">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.523 15.3414c-.5511 0-.9993-.4482-.9993-.9993s.4482-.9993.9993-.9993.9993.4482.9993.9993-.4482.9993-.9993.9993zm-11.046 0c-.5511 0-.9993-.4482-.9993-.9993s.4482-.9993.9993-.9993.9993.4482.9993.9993-.4482.9993-.9993.9993z"/>
                  </svg>
                  <span>Google Play</span>
                </div>
                <div className="bg-black text-white px-3 py-1 rounded-md flex items-center space-x-1 text-xs">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span>App Store</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © 2025 BonziCart. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
