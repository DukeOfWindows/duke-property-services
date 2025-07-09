import React, { useState } from 'react';

export default function FAQSection({ faqItems }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-cursive font-bold text-duke text-center mb-10 relative after:block after:w-20 after:h-[3px] after:bg-duke-brown after:rounded-full after:mt-2 after:mx-auto">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left px-6 py-4 text-lg font-semibold text-duke focus:outline-none focus:ring-2 focus:ring-duke"
              >
                <span>{item.question}</span>
                <span
                  className={`transform transition-transform duration-300 text-xl font-bold ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-4 text-gray-700 text-base">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
