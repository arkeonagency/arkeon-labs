import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Linkedin, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  //{ name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Work', href: '/work' },
  { name: 'Process', href: '/process' },
  { name: 'About', href: '/about' },
  { name: 'Insights', href: '/blog' },
];

// FIX: Accept 'path' as a prop
export default function Navbar({ path }) {
  const [isOpen, setIsOpen] = useState(false);

  // FIX: Determine initial state based on the server-side prop 'path'
  // This allows the HTML to render correctly immediately without waiting for JS
  const isHome = path === '/' || path === '';
  
  const [scrolled, setScrolled] = useState(!isHome);

  useEffect(() => {
    if (isHome) {
      const handleScroll = () => {
        setScrolled(window.scrollY > 20);
      };
      // Check immediately
      handleScroll();
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setScrolled(true);
    }
  }, [isHome]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <header 
        id="react-navbar"
        className={`fixed z-[150] left-1/2 -translate-x-1/2 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] ${
          scrolled 
            ? 'top-2 w-[90%] md:w-full md:max-w-5xl bg-arkeon-charcoal/60 backdrop-blur-xl border border-white/10 rounded-full py-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)]' 
            : 'top-0 w-full bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className={`flex items-center justify-between w-full ${scrolled ? 'px-8' : 'px-6 md:px-12'}`}>
          
          <a href="/" className="text-2xl font-serif font-bold text-white tracking-wide relative z-[152] flex-shrink-0 hover:text-arkeon-gold transition-colors duration-300 group">
            ARKEON<span className="text-arkeon-gold group-hover:text-white transition-colors duration-300">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-gray-300 hover:text-white hover:shadow-[0_0_20px_rgba(230,197,91,0.4)] transition-all whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
            
            <a 
              href="/contact" 
              className={`ml-4 px-6 py-2.5 text-sm font-semibold rounded-full transition-all whitespace-nowrap shadow-lg ${
                scrolled 
                  ? 'bg-arkeon-gold text-arkeon-charcoal hover:bg-white hover:scale-105'
                  : 'bg-white text-arkeon-charcoal hover:bg-arkeon-gold hover:scale-105'
              }`}
            >
              Start Project
            </a>
          </nav>

          <button 
            className="md:hidden text-white relative z-[152] p-2 focus:outline-none bg-white/5 rounded-full hover:bg-white/10 transition-colors" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-arkeon-charcoal z-[140] flex flex-col justify-center items-start pl-10 md:hidden"
          >
             <div className="absolute top-0 right-0 p-[20%] w-[300px] h-[300px] bg-arkeon-gold/20 blur-[100px] rounded-full pointer-events-none" />
             <div className="absolute bottom-0 left-0 p-[20%] w-[300px] h-[300px] bg-arkeon-blue/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="flex flex-col gap-6 relative z-10">
                {navLinks.map((link) => (
                <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-serif text-white hover:text-arkeon-gold transition-colors"
                >
                    {link.name}
                </a>
                ))}
                
                <div className="mt-4 flex gap-6 items-center">
                    <a href="/contact" onClick={() => setIsOpen(false)} className="px-8 py-3 bg-arkeon-gold text-arkeon-charcoal font-bold rounded-full text-base w-fit shadow-[0_0_20px_rgba(230,197,91,0.4)]">
                        Start Project
                    </a>
                    
                    <div className="flex gap-4 border-l border-white/20 pl-6">
                        <a href="https://t.me/bereketdesign" target="_blank" className="text-gray-400 hover:text-arkeon-gold transition-colors"><Send size={20} /></a>
                        <a href="https://www.instagram.com/bereketdesigns/" className="text-gray-400 hover:text-arkeon-gold transition-colors"><Linkedin size={20} /></a>
                        <a href="https://www.linkedin.com/in/bereket-tadele-b15660252/" className="text-gray-400 hover:text-arkeon-gold transition-colors"><Instagram size={20} /></a>
                    </div>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}