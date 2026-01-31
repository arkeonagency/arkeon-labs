import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

const CounterItem = ({ value, label, suffix = "", prefix = "" }) => {
  const ref = useRef(null);
  
  // CHANGED: Removed { once: true } so it tracks entry/exit every time
  const isInView = useInView(ref, { margin: "-50px" }); 
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
    duration: 2
  });

  useEffect(() => {
    if (isInView) {
      // If visible, animate to the target number
      motionValue.set(value);
    } else {
      // CHANGED: If not visible (scrolled away), reset to 0 immediately
      // This ensures it counts up from 0 again when you come back
      motionValue.set(0);
    }
  }, [isInView, value, motionValue]);

  const textRef = useRef(null);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (textRef.current) {
        const formatted = Intl.NumberFormat('en-US', {
            maximumFractionDigits: Number.isInteger(value) ? 0 : 1 
        }).format(latest.toFixed(Number.isInteger(value) ? 0 : 1));
        
        textRef.current.textContent = `${prefix}${formatted}${suffix}`;
      }
    });
  }, [springValue, prefix, suffix, value]);

  return (
    <div ref={ref} className="text-center p-4 md:p-6 border border-white/5 bg-white/[0.02] rounded-2xl backdrop-blur-sm hover:bg-white/5 transition-colors">
      <div 
        className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
      >
        <span ref={textRef}>0</span>
      </div>
      <p className="text-arkeon-gold text-xs md:text-sm font-bold uppercase tracking-widest">{label}</p>
    </div>
  );
};

export default function StatsCounter() {
  const stats = [
    { value: 7, label: "Digital Assets Shipped", suffix: "+" },
    { value: 250, label: "Avg. ROI Increase", suffix: "%", prefix: "↑" },
    { value: 0.8, label: "Avg. Load Time", suffix: "s" },
    { value: 100, label: "Client Satisfaction", suffix: "%" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full">
      {stats.map((stat, i) => (
        <CounterItem key={i} {...stat} />
      ))}
    </div>
  );
}