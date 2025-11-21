'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  Heart,
  ArrowRight,
  Users,
  Sprout,
  Milk,
  ArrowDown,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import Button from './components/Button';
import DonationModal from './components/DonationModal';

export default function Home() {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    { src: '/images/hero/hero-banner.jpg', alt: 'Indigenous Cows' },
    { src: '/images/activities/gau-shala.jpg', alt: 'Gau Shala' },
    { src: '/images/activities/farmer-training.jpg', alt: 'Farmer Training' },
    { src: '/images/activities/a2-milk.jpg', alt: 'A2 Milk Distribution' },
    { src: '/images/about/about-farming.jpg', alt: 'Traditional Farming' },
    {
      src: '/images/activities/women-empowerment.jpg',
      alt: 'Women Empowerment',
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

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
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-10rem)]">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center lg:text-left space-y-6"
            >
              {/* Large Prominent Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="flex justify-center lg:justify-start -mt-16"
              >
                <div className="relative">
                  <Image
                    src="/images/logo/logo.png"
                    alt="Cowtrition Foundation Logo"
                    width={1100}
                    height={330}
                    priority
                    className="w-auto h-56 md:h-72 lg:h-96 drop-shadow-2xl"
                  />
                  {/* Subtle glow effect behind logo */}
                  <div className="absolute inset-0 bg-[#D97706]/10 blur-3xl -z-10 scale-110" />
                </div>
              </motion.div>

              {/* Sanskrit Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-center lg:text-left mb-4"
              >
                <p className="text-xl md:text-2xl font-semibold text-[#7A5C33] italic mb-2">
                  &quot;गोपालनं पोषणं राष्ट्रस्य आधारः&quot;
                </p>
                <p className="text-sm md:text-base text-[#2F4F2F]/70">
                  (Gopālanaṁ poṣaṇaṁ rāṣṭrasya ādhāraḥ)
                </p>
                <p className="text-sm md:text-base text-[#2F4F2F]/70 font-medium mt-1">
                  Cow care and nourishment are the foundation of the nation.
                </p>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2F4F2F] leading-tight"
              >
                Empowering Communities Through{' '}
                <span className="text-[#D97706] relative inline-block">
                  Sustainable Cow-Based Nutrition
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-[#D97706]/30"
                    viewBox="0 0 300 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 6C50 2 100 10 150 6C200 2 250 10 298 6"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="text-lg md:text-xl text-[#2F4F2F]/80 leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                We work to revive traditional knowledge, promote indigenous cow
                welfare, and bring natural, nutritious dairy & farm practices
                into mainstream health, agriculture, and livelihood systems.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex flex-wrap gap-3 justify-center lg:justify-start"
              >
                {[
                  'Cow health',
                  'Farmer empowerment',
                  'Natural nutrition',
                  'Sustainable future',
                ].map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#4D7C0F]/10 text-[#2F4F2F] rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
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
                transition={{ duration: 0.6, delay: 1.1 }}
                className="grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0 pt-4"
              >
                <div className="text-center lg:text-left bg-white/50 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="text-4xl font-bold text-[#D97706] mb-1">
                    500+
                  </div>
                  <div className="text-sm font-medium text-[#2F4F2F]/70">
                    Cows Protected
                  </div>
                </div>
                <div className="text-center lg:text-left bg-white/50 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="text-4xl font-bold text-[#4D7C0F] mb-1">
                    150+
                  </div>
                  <div className="text-sm font-medium text-[#2F4F2F]/70">
                    Farmers Helped
                  </div>
                </div>
                <div className="text-center lg:text-left bg-white/50 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="text-4xl font-bold text-[#7A5C33] mb-1">
                    25+
                  </div>
                  <div className="text-sm font-medium text-[#2F4F2F]/70">
                    Villages
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative h-[500px] lg:h-[600px] group cursor-pointer"
              onClick={() => setIsGalleryOpen(true)}
            >
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero/hero-banner.jpg"
                  alt="Hero Image - Indian Cow with Farmer"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-[#2F4F2F]/20 to-transparent group-hover:from-[#2F4F2F]/40 transition-all duration-300" />
                {/* Hover Text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full">
                    <p className="text-[#2F4F2F] font-semibold">
                      Click to view gallery
                    </p>
                  </div>
                </div>
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
      <section className="py-20 bg-linear-to-br from-[#FFF7E9] via-[#4D7C0F]/10 to-[#FFF7E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D97706] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4D7C0F] rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2F4F2F] mb-6">
              Join Us in Making a Difference
            </h2>
            <p className="text-lg md:text-xl text-[#2F4F2F]/80 mb-10 leading-relaxed">
              Your support helps preserve India&apos;s sacred cows, empower
              rural communities, and build a sustainable future for agriculture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => setIsDonationModalOpen(true)}
              >
                Donate Now
                <Heart size={20} />
              </Button>
              <Button variant="outline" size="lg" href="/contact">
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

      {/* Gallery Modal */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setIsGalleryOpen(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
              aria-label="Close gallery"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} className="text-white" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight size={32} className="text-white" />
            </button>

            <div
              className="max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Main Image with Animation */}
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-[75vh] rounded-2xl overflow-hidden mb-6"
              >
                <Image
                  src={galleryImages[currentImageIndex].src}
                  alt={galleryImages[currentImageIndex].alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
                {/* Image Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-xl font-semibold text-center">
                    {galleryImages[currentImageIndex].alt}
                  </p>
                  <p className="text-white/70 text-center mt-1">
                    {currentImageIndex + 1} / {galleryImages.length}
                  </p>
                </div>
              </motion.div>

              {/* Thumbnails */}
              <div className="grid grid-cols-6 gap-3">
                {galleryImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                      currentImageIndex === index
                        ? 'ring-4 ring-[#D97706] scale-105'
                        : 'opacity-50 hover:opacity-100 hover:scale-105'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="150px"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
