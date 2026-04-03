import React from 'react';
import { useCart } from '../CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, Lock, ChevronLeft, CreditCard, Truck } from 'lucide-react';

export const Checkout = () => {
  const { cart, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const shipping = subtotal > 50 ? 0 : 10;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    navigate('/thank-you');
  };

  if (cart.length === 0) {
    return (
      <div className="pt-40 pb-24 px-6 text-center space-y-6">
        <h1 className="text-3xl font-serif font-bold">Your bag is empty</h1>
        <Link to="/collection" className="btn-primary inline-block">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 bg-brand-beige min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <Link to="/" className="text-2xl font-serif font-bold tracking-tighter text-brand-dark mr-8">
            LOULOUBROOM
          </Link>
          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
            <span className="text-brand-dark">Information</span>
            <span className="text-gray-300">/</span>
            <span className="text-gray-400">Shipping</span>
            <span className="text-gray-300">/</span>
            <span className="text-gray-400">Payment</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <div className="space-y-12">
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Contact Information</h2>
                  <p className="text-sm text-gray-500">Already have an account? <button className="text-brand-accent underline">Log in</button></p>
                </div>
                <input 
                  type="email" 
                  placeholder="Email or mobile phone number" 
                  className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 text-sm focus:ring-2 focus:ring-brand-accent outline-none"
                  required
                />
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="newsletter" className="rounded border-gray-300 text-brand-accent focus:ring-brand-accent" />
                  <label htmlFor="newsletter" className="text-xs text-gray-500">Email me with news and offers</label>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-bold">Shipping Address</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="First name" className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 text-sm focus:ring-2 focus:ring-brand-accent outline-none" required />
                  <input type="text" placeholder="Last name" className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 text-sm focus:ring-2 focus:ring-brand-accent outline-none" required />
                </div>
                <input type="text" placeholder="Address" className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 text-sm focus:ring-2 focus:ring-brand-accent outline-none" required />
                <input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 text-sm focus:ring-2 focus:ring-brand-accent outline-none" />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <input type="text" placeholder="City" className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 text-sm focus:ring-2 focus:ring-brand-accent outline-none" required />
                  <input type="text" placeholder="State" className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 text-sm focus:ring-2 focus:ring-brand-accent outline-none" required />
                  <input type="text" placeholder="ZIP code" className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 text-sm focus:ring-2 focus:ring-brand-accent outline-none" required />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-6">
                <Link to="/collection" className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-brand-dark transition-colors">
                  <ChevronLeft size={18} /> Return to Shop
                </Link>
                <button type="submit" className="btn-primary w-full sm:w-auto px-12">
                  Continue to Shipping
                </button>
              </div>
            </form>

            <div className="flex items-center justify-center gap-8 pt-12 border-t border-gray-200 text-[10px] text-gray-400 uppercase tracking-widest">
              <div className="flex items-center gap-1"><Lock size={12} /> Secure Checkout</div>
              <div className="flex items-center gap-1"><CreditCard size={12} /> Multiple Payment Options</div>
              <div className="flex items-center gap-1"><Truck size={12} /> Fast Delivery</div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 space-y-8 sticky top-32">
            <h2 className="text-xl font-bold">Order Summary</h2>
            <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2">
              {cart.map((item) => (
                <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-4">
                  <div className="w-16 h-20 bg-brand-beige rounded-lg overflow-hidden flex-shrink-0 relative">
                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                    <span className="absolute -top-2 -right-2 bg-brand-dark text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium leading-tight">{item.name}</h4>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">{item.selectedSize} / {item.selectedColor}</p>
                  </div>
                  <span className="text-sm font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-6 border-t border-gray-100">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-xl font-bold pt-4 border-t border-gray-100">
                <span>Total</span>
                <span className="text-brand-accent">USD ${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="bg-brand-blush p-4 rounded-xl flex items-center gap-3">
              <ShieldCheck size={20} className="text-brand-accent" />
              <p className="text-xs text-gray-600">Your order is protected by our <span className="font-bold">Perfect Fit Guarantee</span>. Free exchanges if it doesn't fit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
