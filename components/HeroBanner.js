
export default function HeroBanner() {
  return (
    <div className="bg-gradient-to-r from-orange-100 to-orange-200 rounded-lg p-8 mb-6 relative overflow-hidden">
      <div className="relative z-10">
        <div className="max-w-md">
          <p className="text-orange-600 text-sm font-medium mb-2">TRACK SMARTER, LIVE WELL</p>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">SMART RING</h1>
          <button className="bg-white text-gray-800 px-6 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-shadow">
            DISCOUNT UP TO 50% OFF
          </button>
          <p className="text-gray-600 text-sm mt-2">Available Now - Grab Yours</p>
        </div>
      </div>
      
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
        <div className="w-64 h-48 bg-gray-300 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">Smart Ring Image</span>
        </div>
      </div>
    </div>
  );
}
