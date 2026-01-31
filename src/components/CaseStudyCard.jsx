import React from 'react';
import { ArrowRight } from 'lucide-react';

const CaseStudyCard = ({ title, category, image, href }) => {
  return (
    <a href={href} className="group block">
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all duration-500 hover:border-arkeon-gold/50 hover:shadow-[0_0_30px_rgba(230,197,91,0.1)]">
        
        {/* FIX: Aspect Ratio Container 
            This forces the box to be 16:9 immediately, 
            so the layout never jumps when the image loads. 
        */}
        <div className="aspect-video w-full overflow-hidden relative bg-white/5">
          <img 
            src={image} 
            alt={title}
            width="800"  // Explicit hint
            height="450" // Explicit hint
            loading="lazy" // Performance boost
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div className="p-6 relative z-10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-arkeon-gold">
              {category}
            </span>
            <ArrowRight className="text-white opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" size={18} />
          </div>
          <h3 className="text-2xl font-serif font-bold text-white mb-1 group-hover:text-arkeon-gold transition-colors">
            {title}
          </h3>
        </div>
      </div>
    </a>
  );
};

export default CaseStudyCard;