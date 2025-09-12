
import { useState } from 'react';
import ProductCard from './ProductCard';

export default function ProductCarousel({ title, products, linkText = "View All" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 5;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerPage >= products.length ? 0 : prev + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - itemsPerPage < 0 ? Math.max(0, products.length - itemsPerPage) : prev - itemsPerPage
    );
  };

  return (
    <div className="bg-white rounded-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <a href="#" className="text-orange-500 hover:text-orange-600 text-sm font-medium">
          {linkText} →
        </a>
      </div>
      
      <div className="relative">
        <div className="flex space-x-4 overflow-hidden">
          {products.slice(currentIndex, currentIndex + itemsPerPage).map((product, index) => (
            <div key={index} className="flex-none w-1/5">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
        {products.length > itemsPerPage && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-50"
              disabled={currentIndex === 0}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-50"
              disabled={currentIndex + itemsPerPage >= products.length}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
