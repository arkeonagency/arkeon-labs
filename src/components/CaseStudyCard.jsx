import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CaseStudyCard = ({ title, category, image, href }) => {
  return (
    <a href={href} className="group block relative overflow-hidden rounded-lg aspect-[4/3]">
      {/* Image */}
      <img 
        src={image} 
        alt={`Screenshot of ${title}`} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex justify-between items-end">
          <div>
            <span className="text-arkeon-gold text-xs font-medium uppercase tracking-wider mb-2 block">
              {category}
            </span>
            <h3 className="text-2xl font-serif text-white font-bold">{title}</h3>
          </div>
          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-arkeon-gold group-hover:text-arkeon-charcoal transition-colors">
            <ArrowUpRight size={20} />
          </div>
        </div>
      </div>
    </a>
  );
};

export default CaseStudyCard;