import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const portfolioItems = [
  {
    category: 'cakes',
    title: 'Wedding Cake Masterpiece',
    image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Three-tier elegant wedding cake with floral decorations'
  },
  {
    category: 'decorations',
    title: 'Birthday Party Setup',
    image: 'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Colorful birthday party decoration with balloons and streamers'
  },
  {
    category: 'cakes',
    title: 'Custom Birthday Cake',
    image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Personalized birthday cake with custom decorations'
  },
  {
    category: 'decorations',
    title: 'Bridal Shower Elegance',
    image: 'https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Romantic bridal shower setup with pink and white theme'
  },
  {
    category: 'catering',
    title: 'Gourmet Chops Platter',
    image: 'https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Perfectly grilled chops with professional presentation'
  },
  {
    category: 'decorations',
    title: 'Wedding Ceremony Decor',
    image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Stunning wedding ceremony decoration with floral arrangements'
  },
  {
    category: 'cakes',
    title: 'Anniversary Special',
    image: 'https://images.pexels.com/photos/1721939/pexels-photo-1721939.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Elegant anniversary cake with gold accents'
  },
  {
    category: 'catering',
    title: 'Event Catering Spread',
    image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Complete catering setup for special events'
  }
];

const categories = [
  { id: 'all', name: 'All Work' },
  { id: 'cakes', name: 'Cakes' },
  { id: 'decorations', name: 'Decorations' },
  { id: 'catering', name: 'Catering' }
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our collection of beautiful cakes, stunning decorations, 
            and memorable events we've created for our valued clients.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-rose-500 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}