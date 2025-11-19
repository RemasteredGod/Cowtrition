'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Heart,
  ArrowRight,
  Users,
  Sprout,
  Milk,
  ArrowDown,
} from 'lucide-react';
import Button from './components/Button';
import DonationModal from './components/DonationModal';

export default function Home() {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-linear-to-b from-[#FFF7E9] via-white to-[#FFF7E9] overflow-hidden pt-20 pb-20">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-[#4D7C0F]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#D97706]/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7A5C33]/3 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl z-10 py-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-10rem)]">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center lg:text-left"
            >
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8 flex justify-center lg:justify-start"
              >
                <Image
                  src="/images/logo/logo.png"
                  alt="Cowtrition Foundation Logo"
                  width={400}
                  height={120}
                  priority
                  className="w-auto h-20 md:h-24 drop-shadow-xl"
                />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2F4F2F] mb-6 leading-tight"
              >
                Nourishing Rural India,{' '}
                <span className="text-[#D97706]">One Cow at a Time</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg md:text-xl text-[#2F4F2F]/80 mb-8 leading-relaxed"
              >
                Preserving indigenous cow breeds, empowering farmers, and
                reviving traditional sustainable agriculture rooted in Indian
                heritage.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              >
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setIsDonationModalOpen(true)}
                >
                  Support Our Mission
                  <Heart size={20} />
                </Button>
                <Button variant="outline" size="lg" href="/about">
                  Learn More
                  <ArrowRight size={20} />
                </Button>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0"
              >
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-[#D97706]">500+</div>
                  <div className="text-sm text-[#2F4F2F]/70">
                    Cows Protected
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-[#4D7C0F]">150+</div>
                  <div className="text-sm text-[#2F4F2F]/70">
                    Farmers Helped
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-[#7A5C33]">25+</div>
                  <div className="text-sm text-[#2F4F2F]/70">Villages</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative h-[500px] lg:h-[600px]"
            >
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero/hero-banner.jpg"
                  alt="Hero Image - Indian Cow with Farmer"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-[#2F4F2F]/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <a href="/about" className="block">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-sm text-[#2F4F2F]/70 font-medium">
                Scroll to explore
              </span>
              <ArrowDown size={24} className="text-[#4D7C0F]" />
            </motion.div>
          </a>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2F4F2F] mb-4">
              Our Impact Areas
            </h2>
            <p className="text-lg text-[#2F4F2F]/70 max-w-2xl mx-auto">
              Three pillars of sustainable rural development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#FFF7E9] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-[#D97706] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Milk size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#2F4F2F] mb-3">
                Cow Conservation
              </h3>
              <p className="text-[#2F4F2F]/70 leading-relaxed">
                Protecting and nurturing indigenous Indian cow breeds through
                dedicated care and traditional practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#FFF7E9] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-[#4D7C0F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#2F4F2F] mb-3">
                Farmer Empowerment
              </h3>
              <p className="text-[#2F4F2F]/70 leading-relaxed">
                Training and supporting rural farmers with sustainable farming
                techniques and fair market access.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#FFF7E9] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-[#7A5C33] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sprout size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#2F4F2F] mb-3">
                Organic Agriculture
              </h3>
              <p className="text-[#2F4F2F]/70 leading-relaxed">
                Promoting chemical-free farming with natural fertilizers for
                healthier soil and sustainable yields.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-linear-to-br from-[#2F4F2F] to-[#4D7C0F] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Join Us in Making a Difference
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
              Your support helps preserve India&apos;s sacred cows, empower
              rural communities, and build a sustainable future for agriculture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => setIsDonationModalOpen(true)}
              >
                Donate Now
                <Heart size={20} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/contact"
                className="border-white text-white hover:bg-white hover:text-[#2F4F2F]"
              >
                Get Involved
                <ArrowRight size={20} />
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
    </>
  );
}
