import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import GradientBlinds from './GradientBlinds';

const Hero = () => {
  return (
    // 1. ROOT CONTAINER: Defines the height and stacking context
    <section className="relative w-full min-h-screen overflow-hidden bg-arkeon-charcoal">
      
      {/* 2. BACKGROUND LAYER: Strictly Absolute, behind everything */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <GradientBlinds
          className="w-full h-full"
          // Luxury Palette: Deep Charcoal -> Black -> Deep Gold -> Bright Gold -> Charcoal
          gradientColors={['#1C1C1E', '#000000', '#BFA140', '#E6C55B', '#1C1C1E']}
          angle={45}          
          noise={0.15}        
          blindCount={12}     
          blindMinWidth={50}
          spotlightRadius={0.6}
          spotlightSoftness={1}
          spotlightOpacity={0.8}
          mouseDampening={0.15}
          distortAmount={0.2} 
          shineDirection="left"
          mixBlendMode="normal" 
        />
      </div>

      {/* 3. TEXTURE OVERLAY: Sits on top of the gradients to smooth them out */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-arkeon-charcoal/30 via-transparent to-arkeon-charcoal/90"></div>

      {/* 4. CONTENT LAYER: Sits on top (z-10) and handles the centering layout */}
      <div className="relative z-10 w-full h-full min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <span className="inline-block py-1.5 px-4 rounded-full border border-arkeon-gold/30 bg-arkeon-gold/10 text-arkeon-gold text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(230,197,91,0.2)]">
              Where Brands Begin
            </span>
            
            {/* Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight">
              Design at the <br className="hidden md:block" />
              <span className="text-gradient-gold">
                Origin of Greatness
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light drop-shadow-lg">
              We craft premium, story-driven websites and brand identities that elevate brands and convert customers.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="https://calendly.com/" 
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-arkeon-gold to-[#F0D682] text-arkeon-charcoal font-bold rounded shadow-[0_0_20px_rgba(230,197,91,0.3)] hover:shadow-[0_0_30px_rgba(230,197,91,0.5)] transition-all duration-300 transform hover:-translate-y-1"
              >
                Book Strategy Call
              </a>
              <a 
                href="/work" 
                className="w-full sm:w-auto px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-sm text-white font-medium rounded hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center gap-2 group"
              >
                View Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;