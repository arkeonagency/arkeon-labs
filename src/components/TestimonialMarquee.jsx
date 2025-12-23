import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function TestimonialMarquee({ testimonials }) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <div className="py-20 bg-arkeon-charcoal border-y border-white/5 overflow-hidden relative group">
      {/* Gradient Fade Overlay */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-arkeon-charcoal to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-arkeon-charcoal to-transparent z-10 pointer-events-none"></div>

      {/* Scrolling Container */}
      <div className="flex">
        {[...testimonials, ...testimonials].map((item, index) => (
          <motion.div
            key={index}
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 40 
            }}
            className="flex-shrink-0 w-[400px] mx-4 p-8 bg-white/5 border border-white/10 rounded-xl hover:border-arkeon-gold/50 transition-colors cursor-default"
          >
            <div className="flex flex-col h-full justify-between">
              
              {/* Stars Row */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < (item.data.rating || 5) ? "fill-arkeon-gold text-arkeon-gold" : "fill-white/10 text-white/10"} 
                  />
                ))}
              </div>

              <p className="text-lg text-gray-300 italic mb-6">"{item.data.quote}"</p>
              
              <div className="flex items-center gap-4">
                {/* Avatar Image Logic */}
                {item.data.avatar ? (
                  <img 
                    src={item.data.avatar} 
                    alt={item.data.author} 
                    className="w-12 h-12 rounded-full object-cover border border-white/10"
                  />
                ) : (
                  // Fallback to Letter if no image
                  <div className="w-12 h-12 bg-arkeon-gold rounded-full flex items-center justify-center text-arkeon-charcoal font-bold text-lg">
                    {item.data.author.charAt(0)}
                  </div>
                )}
                
                <div>
                  <h4 className="font-bold text-white text-sm">{item.data.author}</h4>
                  <p className="text-xs text-arkeon-gold">{item.data.role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}