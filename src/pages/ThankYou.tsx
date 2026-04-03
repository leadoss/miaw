import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Instagram, Mail, Package } from 'lucide-react';
import { motion } from 'motion/react';

export const ThankYou = () => {
  const orderNumber = Math.floor(Math.random() * 90000) + 10000;

  return (
    <div className="pt-40 pb-24 px-6 bg-brand-beige min-h-screen flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white p-12 rounded-[40px] shadow-xl text-center space-y-8">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', damping: 12 }}
          className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto"
        >
          <CheckCircle2 size={48} />
        </motion.div>

        <div className="space-y-4">
          <h1 className="text-4xl font-serif font-bold text-brand-dark">Thank You for Your Order!</h1>
          <p className="text-gray-500">Order #{orderNumber} has been received and is being prepared with love.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 border-y border-gray-100">
          <div className="space-y-2">
            <Mail size={24} className="text-brand-accent mx-auto" />
            <h4 className="text-xs font-bold uppercase tracking-widest">Confirmation</h4>
            <p className="text-[10px] text-gray-400">Sent to your email</p>
          </div>
          <div className="space-y-2">
            <Package size={24} className="text-brand-accent mx-auto" />
            <h4 className="text-xs font-bold uppercase tracking-widest">Preparation</h4>
            <p className="text-[10px] text-gray-400">1-2 business days</p>
          </div>
          <div className="space-y-2">
            <Instagram size={24} className="text-brand-accent mx-auto" />
            <h4 className="text-xs font-bold uppercase tracking-widest">Join Us</h4>
            <p className="text-[10px] text-gray-400">@louloubroom</p>
          </div>
        </div>

        <div className="space-y-4 pt-4">
          <Link to="/collection" className="btn-primary w-full flex items-center justify-center gap-2">
            Continue Shopping <ArrowRight size={18} />
          </Link>
          <p className="text-xs text-gray-400">Questions? Contact us at hello@louloubroom.com</p>
        </div>
      </div>
    </div>
  );
};
