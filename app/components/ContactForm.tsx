'use client';

import { useState, FormEvent } from 'react';
import { Send } from 'lucide-react';
import Button from './Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Placeholder for form submission
    // You can integrate with your preferred email service or API route
    console.log('Form submitted:', formData);
    
    setTimeout(() => {
      alert('Thank you for reaching out! We will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[#2F4F2F] mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl border-2 border-[#4D7C0F]/20 focus:border-[#4D7C0F] focus:outline-none transition-colors bg-white"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#2F4F2F] mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl border-2 border-[#4D7C0F]/20 focus:border-[#4D7C0F] focus:outline-none transition-colors bg-white"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-[#2F4F2F] mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border-2 border-[#4D7C0F]/20 focus:border-[#4D7C0F] focus:outline-none transition-colors bg-white"
          placeholder="+91 98765 43210"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#2F4F2F] mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl border-2 border-[#4D7C0F]/20 focus:border-[#4D7C0F] focus:outline-none transition-colors resize-none bg-white"
          placeholder="Tell us how you'd like to contribute or connect..."
        />
      </div>

      <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} className="w-full">
        {isSubmitting ? 'Sending...' : 'Send Message'}
        <Send size={20} />
      </Button>
    </form>
  );
}
