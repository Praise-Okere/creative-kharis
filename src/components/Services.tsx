import React from 'react';
import { Cake, Utensils, PartyPopper, Heart, Gift } from 'lucide-react';

const services = [
  {
    icon: Cake,
    title: 'Custom Cakes',
    description: 'Beautifully crafted custom cakes for birthdays, weddings, and special celebrations. Each cake is uniquely designed to match your vision.',
    features: ['Birthday Cakes', 'Wedding Cakes', 'Anniversary Cakes', 'Custom Designs']
  },
  {
    icon: Utensils,
    title: 'Gourmet Catering',
    description: 'Delicious chops and gourmet food preparation for events of all sizes. Fresh ingredients and exceptional taste guaranteed.',
    features: ['Grilled Chops', 'Finger Foods', 'Main Courses', 'Appetizers']
  },
  {
    icon: PartyPopper,
    title: 'Birthday Decorations',
    description: 'Transform any space into a magical birthday wonderland with our creative decoration services.',
    features: ['Balloon Arrangements', 'Theme Decorations', 'Table Settings', 'Photo Backdrops']
  },
  {
    icon: Heart,
    title: 'Bridal Shower',
    description: 'Elegant and romantic decorations to make the bride-to-be feel special on her memorable day.',
    features: ['Floral Arrangements', 'Elegant Centerpieces', 'Romantic Lighting', 'Custom Signage']
  },
  {
    icon: Gift,
    title: 'Wedding Decorations',
    description: 'Create your dream wedding with our comprehensive decoration services, from ceremony to reception.',
    features: ['Ceremony Decor', 'Reception Setup', 'Bridal Table', 'Aisle Decorations']
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-purple-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We specialize in creating memorable experiences through our comprehensive 
            range of baking, catering, and decoration services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}