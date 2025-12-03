import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.target);
    
    // Using formsubmit.co for static site form handling
    // Replace 'your-email@example.com' with your actual email or use the auto-generated endpoint
    // Ideally, use the random string endpoint provided by formsubmit to hide email
    try {
      const response = await fetch('https://formsubmit.co/ajax/your-email@example.com', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-900/20 border border-green-500/50 p-8 rounded-lg text-center">
        <div className="flex justify-center mb-4 text-green-500">
          <CheckCircle size={48} />
        </div>
        <h3 className="text-2xl font-serif text-white mb-2">Message Received</h3>
        <p className="text-gray-300">Thanks — we’ve received your request. Expect a reply within 48 hours.</p>
        <button onClick={() => setStatus('idle')} className="mt-6 text-sm underline text-arkeon-gold hover:text-white">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Hidden Captcha field for FormSubmit */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_subject" value="New Inquiry from Arkeon Site" />

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
          <input 
            required 
            type="text" 
            name="name" 
            id="name"
            placeholder="Jane Doe"
            className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-arkeon-gold focus:outline-none focus:ring-1 focus:ring-arkeon-gold transition-all"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
          <input 
            required 
            type="email" 
            name="email" 
            id="email"
            placeholder="jane@company.com"
            className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-arkeon-gold focus:outline-none focus:ring-1 focus:ring-arkeon-gold transition-all"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-gray-400">Company (Optional)</label>
          <input 
            type="text" 
            name="company" 
            id="company"
            placeholder="Acme Inc."
            className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-arkeon-gold focus:outline-none focus:ring-1 focus:ring-arkeon-gold transition-all"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="budget" className="text-sm font-medium text-gray-400">Budget Range</label>
          <select 
            name="budget" 
            id="budget"
            className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-arkeon-gold focus:outline-none focus:ring-1 focus:ring-arkeon-gold transition-all"
          >
            <option value="1.5k-2.5k">$1,500 - $2,500</option>
            <option value="3.5k-5.5k">$3,500 - $5,500</option>
            <option value="6k+">$6,000+</option>
            <option value="Not sure">Not sure yet</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
        <textarea 
          required
          name="message" 
          id="message" 
          rows="4" 
          placeholder="Tell us about your project goals..."
          className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-arkeon-gold focus:outline-none focus:ring-1 focus:ring-arkeon-gold transition-all"
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={status === 'submitting'}
        className="w-full py-4 bg-arkeon-gold text-arkeon-charcoal font-bold rounded hover:bg-white transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'} <Send size={18} />
      </button>

      {status === 'error' && (
        <div className="text-red-400 text-sm flex items-center gap-2 mt-4">
          <AlertCircle size={16} /> Something went wrong. Please try again or email us directly.
        </div>
      )}
    </form>
  );
}