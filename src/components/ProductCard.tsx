import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { motion } from 'motion/react';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <Link to={`/product/${product.id}`} className="block overflow-hidden rounded-2xl aspect-[3/4] bg-gray-100 relative">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {product.images[1] && (
          <img 
            src={product.images[1]} 
            alt={product.name} 
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          />
        )}
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isBestSeller && (
            <span className="bg-white/90 backdrop-blur-sm text-brand-dark text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
              Best Seller
            </span>
          )}
          {product.originalPrice && (
            <span className="bg-brand-accent text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
              Sale
            </span>
          )}
        </div>

        {/* Quick Add (Desktop) */}
        <div className="absolute bottom-4 left-4 right-4 translate-y-12 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hidden lg:block">
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product, product.sizes[0], product.colors[0].name, 1);
            }}
            className="w-full bg-white text-brand-dark font-bold py-3 rounded-xl shadow-lg hover:bg-brand-dark hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag size={18} /> Quick Add
          </button>
        </div>
      </Link>

      <div className="mt-4 space-y-1">
        <div className="flex items-center gap-1 text-brand-accent">
          {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
          <span className="text-[10px] text-gray-400 ml-1">(48)</span>
        </div>
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-medium text-brand-dark group-hover:text-brand-accent transition-colors">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">${product.price}</span>
          {product.originalPrice && (
            <span className="text-gray-400 line-through text-sm">${product.originalPrice}</span>
          )}
        </div>
        
        {/* Color dots */}
        <div className="flex gap-1.5 mt-2">
          {product.colors.map((color) => (
            <div 
              key={color.name}
              className="w-3 h-3 rounded-full border border-gray-200"
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
