import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/work' },
  { name: 'Process', href: '/process' },
  { name: 'About', href: '/about' },
  { name: 'Insights', href: '/blog' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Initialize state based on the current URL immediately
  const [scrolled, setScrolled] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname !== '/';
    }
    return false;
  });

  useEffect(() => {
    const isHome = window.location.pathname === '/';

    if (isHome) {
      const handleScroll = () => {
        setScrolled(window.scrollY > 20);
      };
      handleScroll();
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setScrolled(true);
    }
  }, []);

  // Prevent body scroll when menu is open
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
        // FIX: Increased Z-Index to 150 to stay above the overlay (which is 140)
        className={`fixed z-[150] transition-all duration-500 ease-in-out ${
          scrolled 
            ? 'top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-full md:max-w-5xl bg-arkeon-charcoal/75 backdrop-blur-sm border border-white/10 rounded-full py-3 shadow-2xl shadow-black/50' 
            : 'top-0 left-0 w-full bg-transparent py-4'
        }`}
      >
        <div className={`flex items-center justify-between ${scrolled ? 'px-8 w-full' : 'container mx-auto px-6'}`}>
          
          {/* Logo */}
          <a href="/" className="text-2xl font-serif font-bold text-arkeon-white tracking-wide relative z-[152] flex-shrink-0">
            ARKEON<span className="text-arkeon-gold">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-gray-300 hover:text-arkeon-gold transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
            
            <a 
              href="/contact" 
              className={`ml-8 px-6 py-2.5 text-sm font-semibold rounded-full transition-all whitespace-nowrap ${
                scrolled 
                  ? 'bg-arkeon-gold text-arkeon-charcoal hover:bg-white'
                  : 'bg-white text-arkeon-charcoal hover:bg-arkeon-gold'
              }`}
            >
              Start Project
            </a>
          </nav>

          {/* Mobile Toggle Button */}
          {/* FIX: Explicit text-white to ensure visibility against dark background */}
          <button 
            className="md:hidden text-white relative z-[152] p-2 focus:outline-none bg-white/5 rounded-full hover:bg-white/10 transition-colors" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.3 }}
            // FIX: Z-Index set to 140 (Lower than Header's 150)
            className="fixed inset-0 bg-arkeon-charcoal z-[120] flex flex-col justify-center items-start pt-100 pl-10 md:hidden"
          >
            <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-serif text-white hover:text-arkeon-gold transition-colors"
                >
                    {link.name}
                </a>
                ))}
                <a 
                href="/contact" 
                onClick={() => setIsOpen(false)}
                className="mt-6 px-8 py-3 bg-arkeon-gold text-arkeon-charcoal font-bold rounded-full text-lg w-fit"
                >
                Start Project
                </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}