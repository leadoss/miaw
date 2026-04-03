import React, { useState } from 'react';
import { Plus, Minus, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left gap-4 group"
      >
        <h3 className="text-lg font-medium text-brand-dark group-hover:text-brand-accent transition-colors">{question}</h3>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown size={20} className="text-gray-400" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-gray-500 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ = () => {
  const faqs = [
    {
      category: "Shipping & Delivery",
      items: [
        { question: "How long does shipping take?", answer: "Standard shipping typically takes 3-5 business days within the US and 7-14 business days internationally. You'll receive a tracking number as soon as your order ships." },
        { question: "Do you offer free shipping?", answer: "Yes! We offer free standard shipping on all orders over $50. For orders under $50, a flat rate of $10 applies." },
        { question: "Is your packaging discreet?", answer: "Absolutely. All LoulouBroom orders are shipped in plain, unbranded eco-friendly packaging to ensure your privacy." }
      ]
    },
    {
      category: "Returns & Exchanges",
      items: [
        { question: "What is your return policy?", answer: "We offer a 'Perfect Fit Guarantee'. If you're not happy with your first pair, you can exchange it for a different size or style for free within 30 days. For hygiene reasons, subsequent pairs must be unworn and in their original packaging." },
        { question: "How do I start an exchange?", answer: "Simply visit our returns portal with your order number and email address. We'll provide a prepaid shipping label for your exchange." }
      ]
    },
    {
      category: "Sizing & Fit",
      items: [
        { question: "How do I find my size?", answer: "We recommend checking our detailed Size Guide available on every product page. If you're between sizes, we generally suggest sizing up for the most comfortable fit." },
        { question: "Do your styles run true to size?", answer: "Yes, our styles are designed to be true to standard US sizing. Our seamless fabrics have a generous stretch that accommodates many body types." }
      ]
    },
    {
      category: "Care & Fabric",
      items: [
        { question: "How should I wash my LoulouBroom underwear?", answer: "For the longest life, we recommend machine washing on a cold, gentle cycle in a mesh laundry bag. Lay flat to dry. Avoid bleach and fabric softeners." },
        { question: "What materials do you use?", answer: "Most of our essentials are made from a premium blend of micro-modal and elastane. Our lace styles use high-quality, soft-touch nylon lace that won't itch." }
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 bg-brand-beige min-h-screen">
      <div className="max-w-3xl mx-auto">
        <div className="text-center space-y-6 mb-20">
          <h1 className="text-5xl font-serif font-bold text-brand-dark">Frequently Asked Questions</h1>
          <p className="text-gray-500 text-lg">
            Everything you need to know about LoulouBroom. Can't find what you're looking for? <button className="text-brand-accent underline">Contact our support team</button>.
          </p>
        </div>

        <div className="space-y-16">
          {faqs.map((section, i) => (
            <div key={i} className="space-y-6">
              <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-4">{section.category}</h2>
              <div className="space-y-2">
                {section.items.map((item, j) => (
                  <FAQItem key={j} question={item.question} answer={item.answer} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
