'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from '../components/Section';
import AnimatedCard from '../components/AnimatedCard';

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'Ramesh Patel',
      role: 'Lead Farmer & Trainer',
      location: 'Gujarat',
      image: '/images/farmers/ramesh-patel.jpg',
    },
    {
      name: 'Lakshmi Devi',
      role: 'Organic Agriculture Expert',
      location: 'Rajasthan',
      image: '/images/farmers/lakshmi-devi.jpg',
    },
    {
      name: 'Suresh Kumar',
      role: 'Cow Breeding Specialist',
      location: 'Haryana',
      image: '/images/farmers/suresh-kumar.jpg',
    },
    {
      name: 'Priya Sharma',
      role: 'Community Outreach',
      location: 'Madhya Pradesh',
      image: '/images/farmers/priya-sharma.jpg',
    },
    {
      name: 'Vijay Singh',
      role: 'Veterinary Consultant',
      location: 'Punjab',
      image: '/images/farmers/vijay-singh.jpg',
    },
    {
      name: 'Anita Rao',
      role: 'Dairy Processing Advisor',
      location: 'Maharashtra',
      image: '/images/farmers/anita-rao.jpg',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[40vh] bg-linear-to-br from-[#7A5C33] to-[#4D7C0F] flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white text-center"
          >
            Our Family & Farmers
          </motion.h1>
        </div>
      </section>

      {/* Team Section */}
      <Section background="beige">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2F4F2F] mb-6">
            Meet Our Team
          </h2>
          <p className="text-lg text-[#2F4F2F]/80 max-w-3xl mx-auto">
            Meet the dedicated team and farming families who make our mission
            possible through their unwavering commitment to sustainable
            agriculture.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <AnimatedCard key={index} delay={index * 0.1}>
              <div className="relative h-80 w-full">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2F4F2F] mb-2">
                  {member.name}
                </h3>
                <p className="text-[#D97706] font-medium mb-1">{member.role}</p>
                <p className="text-[#2F4F2F]/60 text-sm">{member.location}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </Section>
    </div>
  );
}
