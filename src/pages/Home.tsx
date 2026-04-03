import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, Zap, Heart, CheckCircle2, X } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../types';

export const Home = () => {
  const bestSellers = PRODUCTS.filter(p => p.isBestSeller);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1582533081021-75249939562b?auto=format&fit=crop&q=80&w=1920" 
            alt="LoulouBroom Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-beige/80 via-brand-beige/40 to-transparent" />
        </div>

        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm text-[10px] font-bold uppercase tracking-widest text-brand-accent">
              <Star size={12} fill="currentColor" /> Loved by 10,000+ women
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight text-brand-dark">
              Confidence <br /> <span className="italic text-brand-accent">Starts Within</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
              Experience the perfect blend of sensual aesthetics and all-day comfort. Premium essentials designed to make you feel as good as you look.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/collection" className="btn-primary flex items-center justify-center gap-2">
                Shop Best Sellers <ArrowRight size={20} />
              </Link>
              <Link to="/collection" className="btn-secondary flex items-center justify-center">
                Find Your Fit
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-white py-8 border-y border-gray-100 overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee items-center gap-12 text-xs font-bold uppercase tracking-[0.3em] text-gray-400">
          <span>Free Shipping Over $50</span>
          <span className="w-2 h-2 rounded-full bg-brand-accent" />
          <span>98% Customer Satisfaction</span>
          <span className="w-2 h-2 rounded-full bg-brand-accent" />
          <span>Eco-Friendly Packaging</span>
          <span className="w-2 h-2 rounded-full bg-brand-accent" />
          <span>Discreet Delivery</span>
          <span className="w-2 h-2 rounded-full bg-brand-accent" />
          <span>Free Shipping Over $50</span>
          <span className="w-2 h-2 rounded-full bg-brand-accent" />
          <span>98% Customer Satisfaction</span>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24 px-6 bg-brand-beige">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="space-y-4">
              <h2 className="text-4xl font-serif font-bold text-brand-dark">The Essentials</h2>
              <p className="text-gray-500 max-w-md">Our most-loved pieces, crafted for everyday confidence and ultimate comfort.</p>
            </div>
            <Link to="/collection" className="text-sm font-bold uppercase tracking-widest border-b-2 border-brand-dark pb-1 hover:text-brand-accent hover:border-brand-accent transition-all">
              View All Products
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4 text-center md:text-left">
            <div className="w-12 h-12 bg-brand-blush rounded-2xl flex items-center justify-center text-brand-accent mx-auto md:mx-0">
              <Heart size={24} />
            </div>
            <h3 className="font-bold text-lg">Ultra-Soft Fabric</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Premium micro-modal that feels like a second skin. Breathable, durable, and incredibly soft.</p>
          </div>
          <div className="space-y-4 text-center md:text-left">
            <div className="w-12 h-12 bg-brand-blush rounded-2xl flex items-center justify-center text-brand-accent mx-auto md:mx-0">
              <Zap size={24} />
            </div>
            <h3 className="font-bold text-lg">No Visible Lines</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Seamless edges designed to stay invisible under even the tightest clothing. Total confidence.</p>
          </div>
          <div className="space-y-4 text-center md:text-left">
            <div className="w-12 h-12 bg-brand-blush rounded-2xl flex items-center justify-center text-brand-accent mx-auto md:mx-0">
              <CheckCircle2 size={24} />
            </div>
            <h3 className="font-bold text-lg">Perfect Fit Guarantee</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Not the right fit? Exchange it for free. We're committed to finding your perfect match.</p>
          </div>
          <div className="space-y-4 text-center md:text-left">
            <div className="w-12 h-12 bg-brand-blush rounded-2xl flex items-center justify-center text-brand-accent mx-auto md:mx-0">
              <ShieldCheck size={24} />
            </div>
            <h3 className="font-bold text-lg">Discreet Packaging</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Your privacy matters. All orders are shipped in plain, eco-friendly packaging.</p>
          </div>
        </div>
      </section>

      {/* Problem -> Solution */}
      <section className="py-24 px-6 bg-brand-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              Say Goodbye to <br /> <span className="text-brand-accent italic">Uncomfortable Days</span>
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
                  <X size={14} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">The Old Way</h4>
                  <p className="text-sm text-gray-400">Visible panty lines, itchy lace, and fabric that loses shape after two washes.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                  <CheckCircle2 size={14} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">The LoulouBroom Way</h4>
                  <p className="text-sm text-gray-400">Seamless construction, premium breathable materials, and a fit that moves with you.</p>
                </div>
              </div>
            </div>
            <Link to="/collection" className="btn-primary bg-white text-brand-dark hover:bg-brand-beige inline-block">
              Experience the Difference
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1000" 
                alt="Comfortable Underwear" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-brand-accent p-8 rounded-3xl hidden md:block max-w-xs">
              <p className="text-xl font-serif italic mb-4">"I forgot I was even wearing them. Truly the most comfortable underwear I've ever owned."</p>
              <p className="text-xs font-bold uppercase tracking-widest">— Sarah J., Verified Buyer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bundle Offer */}
      <section className="py-24 px-6 bg-brand-blush">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-serif font-bold text-brand-dark">Stock Up & Save</h2>
          <p className="text-lg text-gray-600">Build your perfect rotation. Mix and match any styles and colors.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Starter Pack</span>
              <h4 className="text-2xl font-bold mb-4">Buy 3 Pairs</h4>
              <p className="text-brand-accent font-bold text-3xl mb-6">Save 15%</p>
              <button className="btn-secondary w-full py-3">Shop Briefs</button>
            </div>
            <div className="bg-brand-dark text-white p-8 rounded-3xl shadow-xl scale-105 relative flex flex-col items-center">
              <div className="absolute -top-4 bg-brand-accent text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">Most Popular</div>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">The Essentials Set</span>
              <h4 className="text-2xl font-bold mb-4">Buy 5 Pairs</h4>
              <p className="text-brand-accent font-bold text-3xl mb-6">Save 25%</p>
              <button className="btn-primary w-full py-3 bg-white text-brand-dark">Shop All</button>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Complete Drawer</span>
              <h4 className="text-2xl font-bold mb-4">Buy 10 Pairs</h4>
              <p className="text-brand-accent font-bold text-3xl mb-6">Save 40%</p>
              <button className="btn-secondary w-full py-3">Shop Bundles</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-serif font-bold text-brand-dark">Real Women, Real Confidence</h2>
            <div className="flex items-center justify-center gap-1 text-brand-accent">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              <span className="ml-2 font-bold">4.9/5 Based on 2,400+ Reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Jessica R.", text: "The seamless briefs are a game changer. I can finally wear my silk dresses without worrying about lines. Plus, they're so soft!", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" },
              { name: "Elena M.", text: "I've tried every premium brand out there, and LoulouBroom is the only one that actually stays comfortable all day long. Worth every penny.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" },
              { name: "Maya W.", text: "Beautiful, sensual, and so comfortable. It's rare to find underwear that makes you feel sexy without sacrificing comfort. Love it!", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200" }
            ].map((t, i) => (
              <div key={i} className="bg-brand-beige p-8 rounded-3xl space-y-6">
                <div className="flex items-center gap-4">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-sm">{t.name}</h4>
                    <div className="flex text-brand-accent"><Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" /></div>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 bg-brand-blush">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-serif font-bold text-brand-dark">Join the Loulou Club</h2>
          <p className="text-lg text-gray-600">Get 10% off your first order, early access to new drops, and exclusive self-care tips.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-white border-none rounded-full py-4 px-6 text-sm focus:ring-2 focus:ring-brand-accent outline-none shadow-sm"
              required
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Get My 10% Off
            </button>
          </form>
          <p className="text-[10px] text-gray-400 uppercase tracking-widest">By signing up, you agree to our Terms & Privacy Policy.</p>
        </div>
      </section>
    </div>
  );
};
