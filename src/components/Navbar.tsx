import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, User } from 'lucide-react';
import { useCart } from '../CartContext';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
          <Link to="/collection" className="hover:text-brand-accent transition-colors">Shop All</Link>
          <Link to="/collection?cat=briefs" className="hover:text-brand-accent transition-colors">Briefs</Link>
          <Link to="/collection?cat=bralettes" className="hover:text-brand-accent transition-colors">Bralettes</Link>
        </div>

        {/* Logo */}
        <Link to="/" className="text-2xl font-serif font-bold tracking-tighter text-brand-dark">
          LOULOUBROOM
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:text-brand-accent transition-colors hidden sm:block">
            <Search size={20} />
          </button>
          <button className="p-2 hover:text-brand-accent transition-colors hidden sm:block">
            <User size={20} />
          </button>
          <button 
            className="p-2 hover:text-brand-accent transition-colors relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-dark text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-6 lg:hidden shadow-xl"
          >
            <div className="flex flex-col gap-6 text-lg font-medium">
              <Link to="/collection">Shop All</Link>
              <Link to="/collection?cat=briefs">Briefs</Link>
              <Link to="/collection?cat=bralettes">Bralettes</Link>
              <Link to="/about">Our Story</Link>
              <Link to="/faq">FAQ</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
