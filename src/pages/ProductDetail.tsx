import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS, Product } from '../types';
import { useCart } from '../CartContext';
import { motion } from 'motion/react';
import { Star, Truck, RefreshCcw, ShieldCheck, ChevronRight, Plus, Minus, ShoppingBag, Heart } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';

export const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = PRODUCTS.find(p => p.id === id);
  
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors[0].name || '');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) return <div className="pt-40 text-center">Product not found</div>;

  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-24 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-8">
          <Link to="/" className="hover:text-brand-dark">Home</Link>
          <ChevronRight size={10} />
          <Link to="/collection" className="hover:text-brand-dark">Shop</Link>
          <ChevronRight size={10} />
          <span className="text-brand-dark">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-brand-beige relative">
              <motion.img 
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                src={product.images[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              {product.stockStatus === 'low-stock' && (
                <div className="absolute top-4 left-4 bg-red-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg animate-pulse">
                  Selling Fast - Low Stock
                </div>
              )}
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${activeImage === i ? 'border-brand-dark' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-brand-accent">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">4.9 (48 Reviews)</span>
              </div>
              <h1 className="text-4xl font-serif font-bold text-brand-dark">{product.name}</h1>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">${product.originalPrice}</span>
                )}
              </div>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Selectors */}
            <div className="space-y-6">
              {/* Colors */}
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                  <span>Color: <span className="text-gray-400">{selectedColor}</span></span>
                </div>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${selectedColor === color.name ? 'border-brand-dark scale-110' : 'border-transparent hover:scale-105'}`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                  <span>Size: <span className="text-gray-400">{selectedSize}</span></span>
                  <button className="text-brand-accent border-b border-brand-accent hover:text-brand-dark hover:border-brand-dark transition-all">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 rounded-xl text-sm font-bold transition-all border ${selectedSize === size ? 'bg-brand-dark text-white border-brand-dark' : 'bg-white text-brand-dark border-gray-200 hover:border-brand-dark'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex gap-4 pt-4">
                <div className="flex items-center border border-gray-200 rounded-full px-4 py-2">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 hover:text-brand-accent"><Minus size={18} /></button>
                  <span className="w-12 text-center font-bold">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:text-brand-accent"><Plus size={18} /></button>
                </div>
                <button 
                  onClick={() => addToCart(product, selectedSize, selectedColor, quantity)}
                  className="flex-1 btn-primary flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={20} /> Add to Bag
                </button>
                <button className="p-4 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
                  <Heart size={20} />
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 py-8 border-y border-gray-100">
              <div className="flex flex-col items-center text-center gap-2">
                <Truck size={20} className="text-brand-accent" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <RefreshCcw size={20} className="text-brand-accent" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Easy Returns</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <ShieldCheck size={20} className="text-brand-accent" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Secure Checkout</span>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <h4 className="font-bold uppercase tracking-widest text-xs">Key Benefits</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-32 space-y-12">
          <h2 className="text-3xl font-serif font-bold text-center">Complete the Set</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Mobile CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 z-40 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
        <button 
          onClick={() => addToCart(product, selectedSize, selectedColor, quantity)}
          className="w-full btn-primary flex items-center justify-center gap-2"
        >
          Add to Bag — ${product.price * quantity}
        </button>
      </div>
    </div>
  );
};
