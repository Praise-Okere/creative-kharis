import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const portfolioItems = [
  {
    category: 'cakes',
    title: 'Wedding Cake',
    image: 'https://pastryempire.com/wp-content/uploads/2024/04/IMG_20211127_151848_23.jpg',
    description: 'Three-tier elegant wedding cake with decorations'
  },
  {
    category: 'decorations',
    title: 'Birthday Party Setup',
    image: 'https://naphtalirentals.com/wp-content/uploads/2020/08/116841758_125782875546199_3138027645129275857_n.jpg',
    description: 'Colorful birthday party decoration with balloons'
  },
  {
    category: 'cakes',
    title: 'Birthday Cake',
    image: 'https://image.api.sportal365.com/process/smp-images-production/pulse.ng/27072024/4dd218ca-b6df-4679-8dda-47f115baad75?operations=autocrop(1042:580)',
    description: 'Personalized birthday cake with custom decorations'
  },
  {
    category: 'decorations',
    title: 'Bridal Shower Decor',
    image: 'https://i.pinimg.com/736x/ef/98/49/ef98499fcccd9415297875b43321b773.jpg',
    description: 'Romantic bridal shower setup '
  },
  {
    category: 'catering',
    title: 'Small Chops',
    image: 'https://i.pinimg.com/originals/58/45/00/58450016cc971cf04eb94f83e9df06d8.jpg',
    description: 'Delicious small chops '
  },
  {
    category: 'decorations',
    title: 'Wedding Ceremony Decor',
    image: 'https://virginroseresorts.com/wp-content/uploads/2020/06/WhatsApp-Image-2020-06-26-at-17.51.41.jpeg',
    description: 'Stunning wedding ceremony decoration '
  },
  {
    category: 'cakes',
    title: 'Anniversary Special',
    image: 'https://regalodelights.com/cdn/shop/files/WhatsAppImage2024-04-06at4.23.33PM_1.jpg?v=1712487251',
    description: 'Elegant anniversary cake '
  },
  {
    category: 'catering',
    title: 'Event Catering',
    image: 'https://www.nairaland.com/attachments/4959192_img20170305193808153_jpegd34fd4ae56d03734c145868a3ae808e6',
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