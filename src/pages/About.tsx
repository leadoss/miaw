import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, ShieldCheck, Zap, Star } from 'lucide-react';

export const About = () => {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 bg-brand-beige">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-dark leading-tight">
              Designed for <br /> <span className="italic text-brand-accent">Every Body</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              LoulouBroom was born from a simple realization: underwear should be the most comfortable thing you wear, without ever sacrificing how it makes you feel.
            </p>
            <div className="flex gap-4">
              <Link to="/collection" className="btn-primary">Shop the Collection</Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1594235412402-9f99b217bb27?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Mission" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[40px] shadow-xl hidden md:block max-w-xs border border-gray-100">
              <p className="text-3xl font-serif font-bold text-brand-accent mb-2">10k+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Women empowered and counting</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <div className="inline-block p-4 bg-brand-blush rounded-full text-brand-accent mb-4">
            <Heart size={32} />
          </div>
          <h2 className="text-4xl font-serif font-bold text-brand-dark">Our Story</h2>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              It started in a small studio in Paris. We were tired of the "comfort vs. sexy" trade-off. Why did everyday essentials have to be boring, and why did beautiful lingerie have to be so uncomfortable?
            </p>
            <p>
              We spent two years sourcing the finest micro-modal fabrics and perfecting our seamless construction. We tested our designs on real women of all shapes and sizes to ensure that LoulouBroom doesn't just look good on a mannequin—it feels incredible on you.
            </p>
            <p>
              Today, LoulouBroom is more than just an underwear brand. It's a community of women who value self-care, body confidence, and the simple luxury of feeling great in their own skin.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 px-6 bg-brand-beige">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif font-bold text-brand-dark">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-12 rounded-[40px] shadow-sm space-y-6 text-center">
              <div className="w-16 h-16 bg-brand-blush rounded-2xl flex items-center justify-center text-brand-accent mx-auto">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold">Uncompromising Quality</h3>
              <p className="text-gray-500 text-sm leading-relaxed">We don't cut corners. From the stitching to the fabric, every detail is crafted to last and provide ultimate comfort.</p>
            </div>
            <div className="bg-white p-12 rounded-[40px] shadow-sm space-y-6 text-center">
              <div className="w-16 h-16 bg-brand-blush rounded-2xl flex items-center justify-center text-brand-accent mx-auto">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold">Radical Confidence</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Our designs are meant to empower. We believe that when you feel comfortable, you radiate confidence from the inside out.</p>
            </div>
            <div className="bg-white p-12 rounded-[40px] shadow-sm space-y-6 text-center">
              <div className="w-16 h-16 bg-brand-blush rounded-2xl flex items-center justify-center text-brand-accent mx-auto">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-bold">Inclusive Design</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Beauty comes in all forms. We are committed to expanding our size range and representing real diversity in everything we do.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
