'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from '../components/Section';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner - Enhanced */}
      <section className="relative h-[50vh] min-h-[400px] bg-linear-to-br from-[#4D7C0F] to-[#2F4F2F] flex items-center justify-center overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-96 h-96 bg-[#D97706]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFF7E9]/10 rounded-full blur-3xl" />
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
                Our Story
              </span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Building a sustainable future rooted in tradition
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <span className="inline-block px-4 py-2 bg-[#4D7C0F]/10 rounded-full text-[#4D7C0F] text-sm font-semibold mb-4">
                  Our Foundation
                </span>
              </motion.div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2F4F2F] mb-6">
                About Cowtrition Foundation
              </h2>
              <p className="text-base md:text-lg text-[#2F4F2F]/80 mb-4 leading-relaxed">
                Cowtrition Foundation was born from a deep commitment to reviving 
                cow-centric nutrition, indigenous dairy practices, natural farming, 
                and rural livelihood empowerment. We believe that cows are not just 
                animals — they are pillars of rural prosperity, soil health, 
                ecological balance, and traditional wellness.
              </p>
              <p className="text-base md:text-lg text-[#2F4F2F]/80 mb-4 leading-relaxed">
                Our mission is to create wealth from waste, promote A2 milk and 
                indigenous cow-based products, and integrate science with tradition. 
                We support sustainable livelihoods for farmers while preserving 
                cultural heritage and natural farming systems that have sustained 
                India for millennia.
              </p>
              <p className="text-base md:text-lg text-[#2F4F2F]/80 leading-relaxed">
                Through community education, farmer training, environmental conservation, 
                and direct support programs, we&apos;re building a future where rural 
                communities thrive, cows are respected as sacred partners in agriculture, 
                and natural nutrition becomes accessible to all.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about/about-farming.jpg"
                  alt="About Us - Traditional Indian Cow Farming"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#2F4F2F]/30 to-transparent" />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D97706]/20 rounded-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#4D7C0F]/20 rounded-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
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
              Core Values
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2F4F2F] mb-4">
              Our Mission & Values
            </h2>
            <p className="text-base md:text-lg text-[#2F4F2F]/70 max-w-2xl mx-auto">
              Three pillars that guide our work
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Cow-Centric Nutrition',
                description:
                  'Promoting A2 milk, ghee, and indigenous dairy products that are naturally nutritious and support traditional wellness.',
                icon: '🥛',
                color: 'bg-[#D97706]'
              },
              {
                title: 'Natural Farming',
                description:
                  'Teaching sustainable, organic farming that integrates cow-based composting, soil health, and ecological balance.',
                icon: '🌱',
                color: 'bg-[#4D7C0F]'
              },
              {
                title: 'Rural Empowerment',
                description:
                  'Creating economic opportunities for farmers through fair trade, training programs, and community-led development.',
                icon: '🤝',
                color: 'bg-[#7A5C33]'
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{value.icon}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#2F4F2F] mb-4">
                  {value.title}
                </h3>
                <p className="text-[#2F4F2F]/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
