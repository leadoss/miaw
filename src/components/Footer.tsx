import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, ArrowRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-serif font-bold tracking-tighter text-brand-dark">
            LOULOUBROOM
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            Empowering women through comfortable, sensual, and confidence-boosting essentials. Designed for your everyday.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-brand-beige rounded-full hover:text-brand-accent transition-colors"><Instagram size={20} /></a>
            <a href="#" className="p-2 bg-brand-beige rounded-full hover:text-brand-accent transition-colors"><Facebook size={20} /></a>
            <a href="#" className="p-2 bg-brand-beige rounded-full hover:text-brand-accent transition-colors"><Twitter size={20} /></a>
          </div>
        </div>

        {/* Shop */}
        <div className="space-y-6">
          <h4 className="font-bold uppercase tracking-widest text-xs">Shop</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><Link to="/collection" className="hover:text-brand-dark transition-colors">All Products</Link></li>
            <li><Link to="/collection?cat=briefs" className="hover:text-brand-dark transition-colors">Briefs</Link></li>
            <li><Link to="/collection?cat=bralettes" className="hover:text-brand-dark transition-colors">Bralettes</Link></li>
            <li><Link to="/collection?cat=bundles" className="hover:text-brand-dark transition-colors">Bundles & Sets</Link></li>
            <li><Link to="/collection" className="hover:text-brand-dark transition-colors">New Arrivals</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div className="space-y-6">
          <h4 className="font-bold uppercase tracking-widest text-xs">Support</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><Link to="/about" className="hover:text-brand-dark transition-colors">Our Story</Link></li>
            <li><Link to="/faq" className="hover:text-brand-dark transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/faq" className="hover:text-brand-dark transition-colors">Size Guide</Link></li>
            <li><Link to="/contact" className="hover:text-brand-dark transition-colors">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:text-brand-dark transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-6">
          <h4 className="font-bold uppercase tracking-widest text-xs">Join the Club</h4>
          <p className="text-sm text-gray-500">Get 10% off your first order and stay updated on new drops.</p>
          <form className="relative">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full bg-brand-beige border-none rounded-full py-4 px-6 text-sm focus:ring-2 focus:ring-brand-accent outline-none"
            />
            <button className="absolute right-2 top-2 p-2 bg-brand-dark text-white rounded-full hover:bg-opacity-90 transition-all">
              <ArrowRight size={20} />
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-gray-400 uppercase tracking-widest">
        <p>© 2026 LoulouBroom. All rights reserved.</p>
        <div className="flex gap-6">
          <span>Secure Payments</span>
          <span>Eco-Friendly Packaging</span>
          <span>Designed in Paris</span>
        </div>
      </div>
    </footer>
  );
};
