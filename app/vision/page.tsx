'use client';

import { motion } from 'framer-motion';
import { Heart, Users, Sprout } from 'lucide-react';
import Section from '../components/Section';
import AnimatedCard from '../components/AnimatedCard';

export default function VisionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner - Enhanced */}
      <section className="relative h-[50vh] min-h-[400px] bg-linear-to-br from-[#D97706] to-[#7A5C33] flex items-center justify-center overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#2F4F2F]/20 rounded-full blur-3xl" />
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
                Looking Forward
              </span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Our Vision & Impact
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Building a sustainable tomorrow, today
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
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
              Our Vision
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2F4F2F] mb-6">
              Our Vision for India&apos;s Future
            </h2>
            <p className="text-base md:text-lg text-[#2F4F2F]/80 max-w-3xl mx-auto leading-relaxed">
              To build a nutritionally secure, environmentally responsible, and 
              economically empowered society through cow-based natural food systems 
              and rural development — where traditional wisdom meets modern innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Nutritional Security',
                description: 'Making natural, A2 milk-based nutrition accessible to all — especially vulnerable communities — through sustainable dairy systems.',
                color: 'bg-[#4D7C0F]',
                delay: 0
              },
              {
                icon: Users,
                title: 'Economic Empowerment',
                description: 'Creating sustainable livelihoods for rural farmers through fair trade, skill development, and value-added cow-based products.',
                color: 'bg-[#D97706]',
                delay: 0.1
              },
              {
                icon: Sprout,
                title: 'Environmental Harmony',
                description: 'Promoting chemical-free natural farming using cow-based composting, regenerative agriculture, and waste-to-wealth solutions.',
                color: 'bg-[#7A5C33]',
                delay: 0.2
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay, duration: 0.6 }}
                className="bg-[#FFF7E9] p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 group"
              >
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#2F4F2F] mb-4 text-center">
                  {item.title}
                </h3>
                <p className="text-[#2F4F2F]/70 leading-relaxed text-center">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-linear-to-br from-[#FFF7E9] via-white to-[#FFF7E9] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#4D7C0F]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D97706]/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#D97706]/10 rounded-full text-[#D97706] text-sm font-semibold mb-4">
              Impact Metrics
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2F4F2F] mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-base md:text-lg text-[#2F4F2F]/70 max-w-2xl mx-auto">
              Measurable change across rural communities
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '500+', label: 'Cows Protected', color: 'text-[#D97706]' },
              { number: '150+', label: 'Farmers Supported', color: 'text-[#4D7C0F]' },
              { number: '1000+', label: 'Acres Organic', color: 'text-[#7A5C33]' },
              { number: '25+', label: 'Villages Reached', color: 'text-[#2F4F2F]' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 group text-center"
              >
                <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-[#2F4F2F]/70 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
