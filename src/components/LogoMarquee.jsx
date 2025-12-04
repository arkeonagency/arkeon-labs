import React from 'react';

const items = [
  // 1. Aman
  { type: 'image', src: '/images/logos/aman.svg', alt: 'Aman Dental' },
  // 2. Noura
  { type: 'image', src: '/images/logos/nouralogo.svg', alt: 'NOURA' },
    
  // Text Brands
  { type: 'text', label: "Divinex" }
  
];

export default function LogoMarquee() {
  return (
    <section className="py-10 border-y border-white/5 bg-black/20 overflow-hidden relative">
      {/* Gradient Masks */}
      <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-arkeon-charcoal to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-arkeon-charcoal to-transparent z-10 pointer-events-none"></div>

      <div className="flex w-full">
        <div className="flex min-w-full items-center gap-10 animate-infinite-scroll">
          {[...Array(3)].map((_, i) => (
            <React.Fragment key={i}>
              {items.map((item, index) => (
                <div key={`${i}-${index}`} className="flex items-center justify-center shrink-0">
                  {item.type === 'image' ? (
                    <img 
                      src={item.src} 
                      alt={item.alt} 
                      // FIX: Removed 'invert' and added explicit max-height
                      // Use 'brightness-0 invert' if you want to force them all WHITE
                      className="h-10 w-auto shrink-0 px-4 object-contain opacity-70 brightness-0 invert hover:filter-none hover:opacity-100 transition-all duration-300 cursor-pointer" 
                      onError={(e) => {
                        e.target.style.display = 'none'; // Hide if broken
                        console.error(`Missing logo: ${item.src}`);
                      }}
                    />
                  ) : (
                    <span 
                      className="text-2xl font-serif font-bold text-white/30 whitespace-nowrap uppercase tracking-widest hover:text-arkeon-gold transition-colors duration-300 cursor-default"
                    >
                      {item.label}
                    </span>
                  )}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}