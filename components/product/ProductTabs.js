import FAQ from '../FAQ';

export default function ProductTabs({ product, activeTab, setActiveTab, feedbackSubTab, setFeedbackSubTab }) {
  return (
    <div className="mt-6 bg-white p-3 sm:p-4 rounded-lg shadow-sm">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-6" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('details')}
            className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
              activeTab === 'details'
                ? 'border-orange-500 text-orange-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Details
          </button>
          <button
            onClick={() => setActiveTab('feedback')}
            className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
              activeTab === 'feedback'
                ? 'border-orange-500 text-orange-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Feedback
          </button>
          <button
            onClick={() => setActiveTab('faq')}
            className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
              activeTab === 'faq'
                ? 'border-orange-500 text-orange-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            FAQ
          </button>
        </nav>
      </div>

      <div className="mt-6">
        {activeTab === 'details' && (
          <div className="space-y-8">
            <div>
              <h3 className="text-base font-bold text-gray-800 mb-3">Specification</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-3 text-sm">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key}>
                    <span className="font-semibold text-gray-600">{key}:</span>{' '}
                    <span className="text-gray-800">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-800 mb-3">Description</h3>
              <p
                className="text-gray-600 leading-relaxed text-sm"
                dangerouslySetInnerHTML={{
                  __html: product.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
                }}
              />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-800 mb-3">Product Images</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {product.productImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Product image ${index + 1}`}
                    className="rounded-lg w-full object-cover"
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        {activeTab === 'feedback' && (
          <div className="border border-orange-400 rounded-b-lg bg-white" style={{ borderTop: 'none' }}>
            <div className="p-0">
              <div className="flex flex-col gap-2 px-4 pt-4">
                <div className="text-orange-600 font-semibold text-base">
                  0 (0 feedback) <span className="text-xs">|</span> <span className="text-orange-600">0 Orders</span>
                </div>
                <div className="flex items-center gap-4 mb-2">
                  <span className="flex items-center gap-1 text-gray-500 text-sm">
                    <svg width="18" height="18" fill="currentColor" className="inline"><path d="M14 9v1a5 5 0 01-10 0V9"/></svg> 0
                  </span>
                  <span className="flex items-center gap-1 text-gray-500 text-sm">
                    <svg width="18" height="18" fill="currentColor" className="inline"><path d="M10 9v1a5 5 0 01-10 0V9"/></svg> 0
                  </span>
                </div>
                <div className="font-bold text-gray-800 mb-2">0 Out Of 5 Stars</div>
                <div className="space-y-1 mb-4">
                  {[5,4,3,2,1].map(star => (
                    <div key={star} className="flex items-center gap-2 text-xs">
                      <span className="w-16 text-right">{star} stars :</span>
                      <div className="flex-1 h-1 bg-gray-200 rounded mx-2" />
                      <span className="w-8 text-center">0</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex w-full mt-8 border-t border-orange-400">
                <div className="flex-1 text-center py-3 text-orange-600 font-semibold text-lg border-r border-orange-400" style={{ background: 'none' }}>
                  Product Feedback
                </div>
                <div className="flex-1 text-center py-3 text-orange-600 font-semibold text-lg bg-gray-50">
                  All FeedBack
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'faq' && <FAQ product={product} />}
      </div>
    </div>
  );
}