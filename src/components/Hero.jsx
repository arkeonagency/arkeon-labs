import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-arkeon-blue/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-arkeon-gold/10 rounded-full blur-[100px]" />
        {/* Abstract Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full border border-white/10 bg-white/5 text-arkeon-gold text-xs font-medium tracking-widest uppercase mb-6">
            Where Brands Begin
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Design at the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-arkeon-white to-gray-400">
              Origin of Greatness
            </span>
          </h1>
          <p className="text-lg md:text-xl text-arkeon-gray max-w-2xl mx-auto mb-10 leading-relaxed">
            We craft premium, story-driven websites and brand identities that elevate brands and convert customers.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://calendly.com/" 
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-arkeon-gold text-arkeon-charcoal font-bold rounded hover:bg-white transition-all duration-300 transform hover:-translate-y-1"
            >
              Book Strategy Call
            </a>
            <a 
              href="/work" 
              className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-medium rounded hover:bg-white/5 transition-all flex items-center justify-center gap-2 group"
            >
              View Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;