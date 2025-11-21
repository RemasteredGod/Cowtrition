'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, HandHeart, Users } from 'lucide-react';
import Section from '../components/Section';
import AnimatedCard from '../components/AnimatedCard';
import Button from '../components/Button';
import DonationModal from '../components/DonationModal';

export default function SupportPage() {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Banner - Enhanced */}
      <section className="relative h-[50vh] min-h-[400px] bg-linear-to-br from-[#D97706] to-[#2F4F2F] flex items-center justify-center overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#4D7C0F]/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4"
            >
              <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
                Get Involved
              </span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Support Our Mission
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Be part of the change you wish to see
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-linear-to-br from-[#FFF7E9] via-white to-[#FFF7E9]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#D97706]/10 rounded-full text-[#D97706] text-sm font-semibold mb-4">
              Ways to Help
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2F4F2F] mb-4">
              Make a Difference
            </h2>
            <p className="text-base md:text-lg text-[#2F4F2F]/70 max-w-3xl mx-auto">
              Join us in reviving indigenous dairy practices, empowering farmers, 
              and building sustainable communities. Your support creates lasting impact 
              for cows, farmers, and rural livelihoods.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Heart,
                title: 'Donate',
                description: 'Support cow-care projects, farmer training programs, and natural nutrition initiatives. Your donation directly funds sustainable livelihoods.',
                action: () => setIsDonationModalOpen(true),
                buttonText: 'Donate Now',
                variant: 'primary',
                color: 'bg-[#D97706]',
                delay: 0
              },
              {
                icon: HandHeart,
                title: 'Volunteer',
                description: 'Join our team on the ground — in farming, education, awareness drives, or community outreach. Share your skills and passion with us.',
                action: '/contact',
                buttonText: 'Join Us',
                variant: 'secondary',
                color: 'bg-[#4D7C0F]',
                delay: 0.1
              },
              {
                icon: Users,
                title: 'Sponsor a Project',
                description: 'Sponsor cow-care programs, nutrition projects, or farmer empowerment initiatives. Receive updates and see your impact firsthand.',
                action: '/contact',
                buttonText: 'Learn More',
                variant: 'outline',
                color: 'bg-[#7A5C33]',
                delay: 0.2
              }
            ].map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: option.delay, duration: 0.6 }}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className={`w-16 h-16 ${option.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <option.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#2F4F2F] mb-4">{option.title}</h3>
                <p className="text-[#2F4F2F]/70 mb-6 leading-relaxed">
                  {option.description}
                </p>
                <Button
                  variant={option.variant as any}
                  onClick={typeof option.action === 'function' ? option.action : undefined}
                  href={typeof option.action === 'string' ? option.action : undefined}
                >
                  {option.buttonText}
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-linear-to-br from-[#2F4F2F] to-[#4D7C0F] rounded-3xl p-8 md:p-12 shadow-2xl text-center relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D97706]/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
                For Businesses
              </span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                Corporate Partnerships
              </h3>
              <p className="text-base md:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Partner with us for CSR initiatives. We offer customized programs
                for businesses committed to rural development and sustainability.
              </p>
              <Button variant="primary" size="lg" href="/contact">
                Partner With Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Donation Modal */}
      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />
    </div>
  );
}
