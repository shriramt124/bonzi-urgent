
export default function HeroBanner() {
  return (
    <div className="bg-gradient-to-r from-orange-100 to-orange-300 rounded-lg overflow-hidden mb-6 relative" style={{ height: '400px' }}>
      {/* Left Content */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10">
        <div className="max-w-md">
          <p className="text-orange-600 text-sm font-medium mb-2 uppercase">Chic Black Solid Tee</p>
          <h1 className="text-5xl font-bold text-gray-800 mb-2">FASHION</h1>
          <h2 className="text-5xl font-bold text-gray-800 mb-4">TRENDSETTER</h2>
          <p className="text-gray-700 text-lg mb-6">
            New arrival and best seller collection<br />
            now available for sale.
          </p>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors">
            SHOP NOW →
          </button>
        </div>
      </div>
      
      {/* Right Content - Model Image */}
      <div className="absolute right-0 top-0 h-full w-1/2">
        <div className="relative h-full">
          {/* Circular background */}
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 w-80 h-80 bg-orange-200 rounded-full opacity-60"></div>
          
          {/* Model placeholder */}
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 w-64 h-80 bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-center">Fashion Model<br />Image</span>
          </div>
        </div>
      </div>
      
      {/* Navigation dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
}
