
export default function Sidebar({ isOpen }) {
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
    { name: 'Toys & Hobbies', icon: '🎮' },
  ];

  return (
    <div className={`fixed left-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-40 ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    }`} style={{ marginTop: '120px' }}>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-800 mb-4 flex items-center bg-gray-50 p-2 rounded">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
          </svg>
          Categories
        </h3>
        
        <div className="space-y-1">
          {categories.map((category, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center p-2 text-gray-600 hover:bg-orange-50 hover:text-orange-500 rounded-md transition-colors text-sm border-b border-gray-100 last:border-b-0"
            >
              <span className="mr-3 text-base">{category.icon}</span>
              <span>{category.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
