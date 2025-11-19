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
      {/* Hero Banner */}
      <section className="relative h-[40vh] bg-linear-to-br from-[#D97706] to-[#2F4F2F] flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white text-center"
          >
            Support Our Mission
          </motion.h1>
        </div>
      </section>

      {/* Support Options */}
      <Section background="green">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2F4F2F] mb-6">
            Make a Difference
          </h2>
          <p className="text-lg text-[#2F4F2F]/80 max-w-3xl mx-auto">
            Your contribution helps preserve India&apos;s sacred cows, empower
            farmers, and build sustainable communities. Every donation creates
            lasting impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <AnimatedCard delay={0}>
            <div className="p-8">
              <div className="w-16 h-16 bg-[#D97706] rounded-full flex items-center justify-center mb-4">
                <Heart size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#2F4F2F] mb-3">Donate</h3>
              <p className="text-[#2F4F2F]/70 mb-6 leading-relaxed">
                Make a one-time or monthly contribution to support cow care,
                farmer training, and organic farming initiatives.
              </p>
              <Button
                variant="primary"
                onClick={() => setIsDonationModalOpen(true)}
              >
                Donate Now
              </Button>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.1}>
            <div className="p-8">
              <div className="w-16 h-16 bg-[#4D7C0F] rounded-full flex items-center justify-center mb-4">
                <HandHeart size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#2F4F2F] mb-3">
                Volunteer
              </h3>
              <p className="text-[#2F4F2F]/70 mb-6 leading-relaxed">
                Join our team on the ground. Share your skills in farming,
                education, marketing, or simply your time and energy.
              </p>
              <Button variant="secondary" href="/contact">
                Join Us
              </Button>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.2}>
            <div className="p-8">
              <div className="w-16 h-16 bg-[#7A5C33] rounded-full flex items-center justify-center mb-4">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#2F4F2F] mb-3">
                Adopt a Cow
              </h3>
              <p className="text-[#2F4F2F]/70 mb-6 leading-relaxed">
                Sponsor the care of an indigenous cow. Receive updates and
                photos while supporting sustainable dairy farming.
              </p>
              <Button variant="outline" href="/contact">
                Learn More
              </Button>
            </div>
          </AnimatedCard>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl text-center"
        >
          <h3 className="text-3xl font-bold text-[#2F4F2F] mb-4">
            Corporate Partnerships
          </h3>
          <p className="text-lg text-[#2F4F2F]/80 mb-6 max-w-2xl mx-auto">
            Partner with us for CSR initiatives. We offer customized programs
            for businesses committed to rural development and sustainability.
          </p>
          <Button variant="primary" size="lg" href="/contact">
            Partner With Us
          </Button>
        </motion.div>
      </Section>

      {/* Donation Modal */}
      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />
    </div>
  );
}
