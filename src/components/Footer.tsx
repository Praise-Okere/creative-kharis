import React from 'react';
import { ChefHat, Heart, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <ChefHat className="h-8 w-8 text-rose-400" />
              <span className="font-bold text-xl">Creative Kharis Global Concept</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Creating unforgettable moments through exquisite cakes, gourmet catering, 
              and stunning event decorations. Your celebration, our passion.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Custom Cakes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Catering</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Event Decorations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wedding Planning</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} Creative Kharis Global Concept. Made with 
            <Heart className="h-4 w-4 text-rose-400 fill-current" /> 
            for unforgettable celebrations.
          </p>
        </div>
      </div>
    </footer>
  );
}