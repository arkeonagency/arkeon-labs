import React, { useState, useEffect } from 'react';
import { Instagram, Linkedin, ArrowRight, Send, Loader2, CheckCircle2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [showToast, setShowToast] = useState(false);

  // Auto-hide toast after 5 seconds
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleSubscribe = async (e) => {
    e.preventDefault(); // <--- This PREVENTS the page reload
    if (!email) return;
    setStatus('submitting');

    const formData = new FormData();
    formData.append("email", email);
    // REPLACE WITH YOUR KEY
    formData.append("access_key", "dd2242f9-f2f5-4318-8896-9df8449273d2"); 
    formData.append("_subject", "New Newsletter Subscriber");
    formData.append("source", "Footer Widget");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      
      const result = await response.json();

      if (result.success) {
        setStatus('idle'); // Reset status so form stays visible
        setEmail('');      // Clear input
        setShowToast(true); // Trigger Pop-up
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <>
      <footer className="bg-arkeon-charcoal border-t border-white/10 pt-20 pb-10 relative z-10 overflow-hidden">
        {/* Footer Ambient Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-arkeon-gold/5 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            
            {/* Brand */}
            <div className="space-y-6">
              <h3 className="text-3xl font-serif font-bold text-white">
                ARKEON<span className="text-arkeon-gold">.</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Crafting premium, story-driven websites and brand identities that elevate businesses.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-semibold mb-6">Explore</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="/work" className="hover:text-arkeon-gold transition-colors">Work</a></li>
                <li><a href="/services" className="hover:text-arkeon-gold transition-colors">Services</a></li>
                <li><a href="/pricing" className="hover:text-arkeon-gold transition-colors">Pricing</a></li>
                <li><a href="/about" className="hover:text-arkeon-gold transition-colors">About</a></li>
                <li><a href="/process" className="hover:text-arkeon-gold transition-colors">Process</a></li>
                <li><a href="/blog" className="hover:text-arkeon-gold transition-colors">Insights</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="/contact" className="hover:text-arkeon-gold transition-colors">Book a Call</a></li>
                <li>hello@arkeon.example</li>
                <li>Addis Ababa, Ethiopia</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-semibold mb-6">Stay Updated</h4>
              
              <form className="flex flex-col gap-3" onSubmit={handleSubscribe}>
                  <input 
                      type="email" 
                      required
                      placeholder="Email address" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white/5 border border-white/10 p-3 rounded text-sm text-white focus:outline-none focus:border-arkeon-gold transition-colors placeholder:text-gray-600"
                  />
                  <button 
                      type="submit" 
                      disabled={status === 'submitting'}
                      className="flex items-center justify-center gap-2 bg-white/10 hover:bg-arkeon-gold hover:text-arkeon-charcoal text-white text-sm py-3 rounded transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                      {status === 'submitting' ? (
                          <>Joining <Loader2 size={16} className="animate-spin" /></>
                      ) : (
                          <>Subscribe <ArrowRight size={16} /></>
                      )}
                  </button>
                  {status === 'error' && <p className="text-red-400 text-xs">Something went wrong. Try again.</p>}
              </form>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">© {new Date().getFullYear()} Arkeon Studio. All rights reserved.</p>
            <div className="flex gap-6 text-xs text-gray-400 items-center">
              <a href="/privacy" className="hover:text-arkeon-gold transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-arkeon-gold transition-colors">Terms</a>
              
              {/* Social Icons */}
              <div className="flex gap-4 ml-4">
                <a href="https://t.me/bereket" target="_blank" rel="noreferrer" aria-label="Telegram" className="text-gray-400 hover:text-arkeon-gold hover:scale-110 transition-all">
                  <Send size={18} />
                </a>
                <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-arkeon-gold hover:scale-110 transition-all">
                  <Instagram size={18} />
                </a>
                <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-arkeon-gold hover:scale-110 transition-all">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* POP-UP NOTIFICATION (TOAST) */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="fixed bottom-6 right-6 z-[200] max-w-sm w-full"
          >
            <div className="bg-arkeon-charcoal border border-arkeon-gold/30 rounded-xl p-4 shadow-2xl flex items-start gap-4 backdrop-blur-md relative overflow-hidden">
               {/* Gold Glow Line */}
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-arkeon-gold"></div>

               <div className="bg-arkeon-gold/10 p-2 rounded-full text-arkeon-gold shrink-0">
                  <CheckCircle2 size={24} />
               </div>
               
               <div className="flex-grow">
                  <h4 className="text-white font-bold text-sm">Welcome to Arkeon!</h4>
                  <p className="text-gray-400 text-xs mt-1">You've successfully joined our insights newsletter.</p>
               </div>

               <button onClick={() => setShowToast(false)} className="text-gray-500 hover:text-white transition-colors">
                  <X size={18} />
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}