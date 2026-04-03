import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-32 pb-24 px-6 bg-brand-beige min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-20">
          <h1 className="text-5xl font-serif font-bold text-brand-dark">Get in Touch</h1>
          <p className="text-gray-500 text-lg">
            Have a question about sizing, shipping, or just want to say hello? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-accent shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email Us</h3>
                  <p className="text-gray-500 text-sm">hello@louloubroom.com</p>
                  <p className="text-xs text-gray-400 mt-1">We typically reply within 24 hours.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-accent shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Call Us</h3>
                  <p className="text-gray-500 text-sm">+1 (555) 123-4567</p>
                  <p className="text-xs text-gray-400 mt-1">Mon-Fri, 9am - 6pm EST</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-accent shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Visit Our Studio</h3>
                  <p className="text-gray-500 text-sm">123 Intimate Lane, Paris, France</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold uppercase tracking-widest text-xs">Follow Our Journey</h4>
              <div className="flex gap-4">
                <a href="#" className="p-4 bg-white rounded-2xl hover:text-brand-accent transition-all shadow-sm"><Instagram size={24} /></a>
                <a href="#" className="p-4 bg-white rounded-2xl hover:text-brand-accent transition-all shadow-sm"><Facebook size={24} /></a>
                <a href="#" className="p-4 bg-white rounded-2xl hover:text-brand-accent transition-all shadow-sm"><Twitter size={24} /></a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">First Name</label>
                  <input type="text" className="w-full bg-brand-beige border-none rounded-xl py-4 px-6 text-sm focus:ring-2 focus:ring-brand-accent outline-none" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Last Name</label>
                  <input type="text" className="w-full bg-brand-beige border-none rounded-xl py-4 px-6 text-sm focus:ring-2 focus:ring-brand-accent outline-none" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                <input type="email" className="w-full bg-brand-beige border-none rounded-xl py-4 px-6 text-sm focus:ring-2 focus:ring-brand-accent outline-none" required />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Subject</label>
                <select className="w-full bg-brand-beige border-none rounded-xl py-4 px-6 text-sm focus:ring-2 focus:ring-brand-accent outline-none appearance-none">
                  <option>General Inquiry</option>
                  <option>Order Status</option>
                  <option>Returns & Exchanges</option>
                  <option>Sizing Help</option>
                  <option>Press & Media</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
                <textarea rows={5} className="w-full bg-brand-beige border-none rounded-xl py-4 px-6 text-sm focus:ring-2 focus:ring-brand-accent outline-none resize-none" required></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
