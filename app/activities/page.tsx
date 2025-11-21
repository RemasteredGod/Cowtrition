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
      {/* Hero Banner - Enhanced */}
      <section className="relative h-[50vh] min-h-[400px] bg-linear-to-br from-[#4D7C0F] to-[#D97706] flex items-center justify-center overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#2F4F2F]/20 rounded-full blur-3xl" />
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
                What We Do
              </span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Our Social Activities
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Creating lasting impact across communities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#4D7C0F]/10 rounded-full text-[#4D7C0F] text-sm font-semibold mb-4">
              Our Programs
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2F4F2F] mb-4">
              Making a Difference
            </h2>
            <p className="text-base md:text-lg text-[#2F4F2F]/70 max-w-3xl mx-auto">
              We engage in diverse initiatives that strengthen communities,
              educate youth, and promote sustainable living across rural India.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#2F4F2F]/60 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-[#2F4F2F] mb-4">
                    {activity.title}
                  </h3>
                  <p className="text-[#2F4F2F]/70 leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
