import { useState } from 'react';
import PostQuestionModal from './PostQuestionModal';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border border-gray-200 rounded-lg mb-3 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full text-left py-4 px-6 flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
      >
        <span className="font-semibold text-gray-800 text-sm pr-4">{question}</span>
        <svg
          className={`w-5 h-5 text-orange-500 transform transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="pb-4 px-6 text-gray-600 text-sm leading-relaxed bg-gray-50">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = ({ product }) => {
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqs = [
    {
      question: "What is the material and quality of this necklace?",
      answer: "This necklace is crafted from high-quality alloy with elegant silver plating. The material is durable, resistant to tarnishing, and designed to maintain its shine over time. Each piece undergoes quality checks to ensure it meets our standards for both aesthetics and longevity."
    },
    {
      question: "Is Cash on Delivery (COD) available for this product?",
      answer: product.codAvailable
        ? "Yes, Cash on Delivery is available for this product. You can pay in cash when your order is delivered to your doorstep. Please note that COD might have additional charges and availability depends on your location."
        : "Currently, we only accept online payments for this product through secure payment gateways including credit/debit cards, UPI, net banking, and digital wallets. COD is not available for this item at the moment."
    },
    {
      question: "What is the return and replacement policy?",
      answer: "We offer a comprehensive 7-day replacement policy for this item. If you receive a damaged, defective, or incorrect product, you can request a replacement within 7 days of delivery. For returns due to change of mind, please ensure the product is unused and in its original packaging. All returns are subject to inspection before processing."
    },
    {
      question: "How long does shipping take and what are the costs?",
      answer: "Processing typically takes 15 days from the time of order confirmation. Shipping usually takes an additional 4 days depending on your location. Total delivery time is approximately 19-20 days. Shipping costs are calculated based on your location and order weight. Free shipping is available on orders above ₹499."
    },
    {
      question: "Is this necklace suitable for sensitive skin or allergies?",
      answer: "This necklace is made from hypoallergenic materials and is generally safe for most skin types. However, if you have known allergies to metals or nickel, we recommend testing a small area first or consulting with a healthcare professional. The plating is designed to minimize skin reactions."
    },
    {
      question: "Does this necklace come with a warranty?",
      answer: "This product comes with a comprehensive warranty covering manufacturing defects. The warranty period depends on the specific product category. For jewelry items, we provide a 6-month warranty against plating wear and manufacturing defects. Warranty claims can be initiated through our customer service."
    },
    {
      question: "Can I customize the necklace or chain length?",
      answer: "Currently, this necklace comes in standard sizes. The chain length is approximately 18 inches (45 cm) with a 2-inch extension for adjustability. If you need a different size or have specific customization requirements, please contact our customer service team for assistance with custom orders."
    },
    {
      question: "How should I care for and maintain this jewelry?",
      answer: "To maintain the beauty of your necklace: 1) Store in a jewelry box or pouch when not wearing, 2) Avoid contact with perfumes, lotions, and chemicals, 3) Clean gently with a soft cloth, 4) Remove before swimming or strenuous activities, 5) Have it professionally cleaned every 6 months. Proper care will ensure long-lasting shine and quality."
    }
  ];

  const [showPostModal, setShowPostModal] = useState(false);

  const handlePostSubmit = (text) => {
    // TODO: replace with real API call - for now just log
    console.log('Posted question:', text);
  };

  return (
    <div className="space-y-4">
      {/* FAQ Items */}
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openItems.has(index)}
            onToggle={() => toggleItem(index)}
          />
        ))}
      </div>

      {/* Contact Support */}
      <div className="mt-8 p-4 bg-orange-50 rounded-lg border border-orange-200">
        <div className="text-center">
          <h4 className="font-semibold text-gray-800 mb-2">Still have questions?</h4>
          <p className="text-sm text-gray-600 mb-3">Our customer support team is here to help you</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors text-sm font-semibold">
              Contact Support
            </button>
            <button onClick={() => setShowPostModal(true)} className="border border-orange-500 text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors text-sm font-semibold">
              Post Question
            </button>
          </div>
        </div>
      </div>
      <PostQuestionModal open={showPostModal} onClose={() => setShowPostModal(false)} onSubmit={handlePostSubmit} />
    </div>
  );
};

export default FAQ;
