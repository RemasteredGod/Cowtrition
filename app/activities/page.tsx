'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from '../components/Section';
import AnimatedCard from '../components/AnimatedCard';

export default function ActivitiesPage() {
  const activities = [
    {
      title: 'Gau Shala Development',
      description:
        'Building modern, humane cow shelters with proper veterinary care, natural grazing areas, and clean water facilities.',
      image: '/images/activities/gau-shala.jpg',
    },
    {
      title: 'Farmer Training Programs',
      description:
        'Conducting workshops on organic farming techniques, composting, natural pest control, and sustainable water management.',
      image: '/images/activities/farmer-training.jpg',
    },
    {
      title: 'School Education Drives',
      description:
        'Teaching children about the importance of cows in Indian culture, organic farming, and environmental conservation.',
      image: '/images/activities/school-education.jpg',
    },
    {
      title: 'A2 Milk Distribution',
      description:
        'Connecting farmers directly with urban consumers seeking pure, chemical-free A2 milk from indigenous cows.',
      image: '/images/activities/a2-milk.jpg',
    },
    {
      title: 'Organic Fertilizer Production',
      description:
        'Creating high-quality vermicompost and bio-fertilizers from cow dung to replace chemical alternatives.',
      image: '/images/activities/organic-fertilizer.jpg',
    },
    {
      title: 'Women Empowerment',
      description:
        'Training rural women in dairy processing, product creation, and entrepreneurship for economic independence.',
      image: '/images/activities/women-empowerment.jpg',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[40vh] bg-linear-to-br from-[#4D7C0F] to-[#D97706] flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white text-center"
          >
            Our Social Activities
          </motion.h1>
        </div>
      </section>

      {/* Activities Section */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2F4F2F] mb-6">
            Making a Difference
          </h2>
          <p className="text-lg text-[#2F4F2F]/80 max-w-3xl mx-auto">
            We engage in diverse initiatives that strengthen communities,
            educate youth, and promote sustainable living across rural India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <AnimatedCard key={index} delay={index * 0.1}>
              <div className="relative h-64 w-full">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#2F4F2F] mb-3">
                  {activity.title}
                </h3>
                <p className="text-[#2F4F2F]/70 leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </Section>
    </div>
  );
}
