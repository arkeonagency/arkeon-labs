import React from 'react';

const items = [
  // IMAGE LOGOS (Ensure these files are in public/images/logos/)
  { type: 'image', src: '/images/logos/aman.svg', alt: 'Aman Dental' },
  { type: 'image', src: '/images/logos/nouralogo.svg', alt: 'NOURA' },
  //{ type: 'image', src: '/images/logos/divinexlogo.svg', alt: 'DivineX' },
  { type: 'image', src: '/images/logos/arklaunch.svg', alt: 'ArkLaunch' },
  { type: 'image', src: '/images/logos/loa.svg', alt: 'Life Of Aviation' },
  // TEXT BRANDS (Fillers)
  { type: 'text', label: "divinex" }
];

export default function LogoMarquee() {
  return (
    <section className="py-10 border-y border-white/5 bg-black/20 overflow-hidden relative">
      {/* Gradient Masks */}
      <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-arkeon-charcoal to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-arkeon-charcoal to-transparent z-10 pointer-events-none"></div>

      <div className="flex w-full">
        <div className="flex min-w-full items-center gap-16 animate-infinite-scroll">
          {/* Loop 3 times for seamless infinite scroll on large screens */}
          {[...Array(3)].map((_, i) => (
            <React.Fragment key={i}>
              {items.map((item, index) => (
                <div key={`${i}-${index}`} className="flex items-center justify-center shrink-0">
                  {item.type === 'image' ? (
                    <img 
                      src={item.src} 
                      alt={item.alt} 
                      // STYLING EXPLAINED:
                      // h-12: Fixed height (approx 48px)
                      // w-auto: Allow width to expand naturally (fixes DivineX cut-off)
                      // shrink-0: Prevent flexbox from squishing the image
                      // brightness-0 invert: Turns black logos WHITE
                      // hover:filter-none: Shows original colors on hover
                      className="h-12 w-auto shrink-0 object-contain opacity-60 brightness-0 invert hover:filter-none hover:opacity-100 transition-all duration-300 cursor-pointer" 
                      onError={(e) => {
                        e.target.style.display = 'none'; // Hide broken images
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