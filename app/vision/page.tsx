'use client';

import { motion } from 'framer-motion';
import { Heart, Users, Sprout } from 'lucide-react';
import Section from '../components/Section';
import AnimatedCard from '../components/AnimatedCard';

export default function VisionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[40vh] bg-linear-to-br from-[#D97706] to-[#7A5C33] flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white text-center"
          >
            Our Vision & Impact
          </motion.h1>
        </div>
      </section>

      {/* Vision Section */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2F4F2F] mb-6">
            Creating a Sustainable Ecosystem
          </h2>
          <p className="text-lg text-[#2F4F2F]/80 max-w-3xl mx-auto">
            Creating a self-sustaining ecosystem where farmers thrive, cows are
            cherished, and communities flourish through organic agriculture.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <AnimatedCard delay={0}>
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-[#4D7C0F] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#2F4F2F] mb-3">
                Cow Conservation
              </h3>
              <p className="text-[#2F4F2F]/70 leading-relaxed">
                Protecting and breeding indigenous Indian cow breeds to preserve
                genetic diversity and cultural heritage.
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.1}>
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-[#D97706] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#2F4F2F] mb-3">
                Farmer Empowerment
              </h3>
              <p className="text-[#2F4F2F]/70 leading-relaxed">
                Providing training, resources, and fair market access to help
                rural farmers achieve economic independence.
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.2}>
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-[#7A5C33] rounded-full flex items-center justify-center mx-auto mb-4">
                <Sprout size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#2F4F2F] mb-3">
                Organic Agriculture
              </h3>
              <p className="text-[#2F4F2F]/70 leading-relaxed">
                Promoting chemical-free farming using cow dung, cow urine, and
                natural composting for sustainable food production.
              </p>
            </div>
          </AnimatedCard>
        </div>
      </Section>

      {/* Impact Statistics */}
      <Section background="green">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2F4F2F] mb-6">
            Our Impact in Numbers
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { number: '500+', label: 'Cows Protected' },
            { number: '150+', label: 'Farmers Supported' },
            { number: '1000+', label: 'Acres Organic' },
            { number: '25+', label: 'Villages Reached' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="text-5xl font-bold text-[#D97706] mb-2">
                {stat.number}
              </div>
              <div className="text-[#2F4F2F]/70 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
