
export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="px-6 py-8">
        {/* App Download Section */}
        <div className="mb-8">
          <p className="text-gray-600 mb-4">Fancy Shopping on the go</p>
          <div className="flex space-x-4">
            <div className="bg-black text-white px-4 py-2 rounded-md flex items-center space-x-2">
              <span className="text-xs">Get it on</span>
              <span className="font-semibold">Google Play</span>
            </div>
            <div className="bg-black text-white px-4 py-2 rounded-md flex items-center space-x-2">
              <span className="text-xs">Download on the</span>
              <span className="font-semibold">App Store</span>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mb-8">
          <p className="text-gray-600 mb-4">Subscribe to get the latest deals and more</p>
          <div className="flex max-w-md">
            <input
              type="email"
              placeholder="Enter email to subscribe"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-green-500"
            />
            <button className="bg-green-500 text-white px-6 py-2 rounded-r-md hover:bg-green-600">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">About Us</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-orange-500">About Bonzi Cart</a></li>
              <li><a href="#" className="hover:text-orange-500">Intellectual property claims</a></li>
              <li><a href="#" className="hover:text-orange-500">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-orange-500">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Seller</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-orange-500">Become a Seller</a></li>
              <li><a href="#" className="hover:text-orange-500">Eligibility to sell</a></li>
              <li><a href="#" className="hover:text-orange-500">Seller policy</a></li>
              <li><a href="#" className="hover:text-orange-500">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Buyer</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-orange-500">Buyer Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-orange-500">Buyer Protection</a></li>
              <li><a href="#" className="hover:text-orange-500">Buyer policy</a></li>
              <li><a href="#" className="hover:text-orange-500">Shipping & Return Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t pt-6">
          <p className="text-sm text-gray-600 mb-3">Accept Payment</p>
          <div className="flex space-x-2 text-xs text-gray-500">
            <span className="bg-blue-500 text-white px-2 py-1 rounded">VISA</span>
            <span className="bg-blue-600 text-white px-2 py-1 rounded">Master</span>
            <span className="bg-orange-500 text-white px-2 py-1 rounded">PayTM</span>
            <span className="bg-purple-500 text-white px-2 py-1 rounded">UPI</span>
            <span className="bg-green-500 text-white px-2 py-1 rounded">PayPal</span>
          </div>
        </div>

        <div className="border-t mt-6 pt-4 text-center text-xs text-gray-500">
          <p>https://www.bonzicart.com/seller/</p>
        </div>
      </div>
    </footer>
  );
}
