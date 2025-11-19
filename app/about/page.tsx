'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from '../components/Section';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[40vh] bg-linear-to-br from-[#4D7C0F] to-[#2F4F2F] flex items-center justify-center">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#D97706] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white text-center"
          >
            About Us
          </motion.h1>
        </div>
      </section>

      {/* About Content */}
      <Section background="white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#2F4F2F] mb-6">
              About Cowtrition Foundation
            </h2>
            <p className="text-lg text-[#2F4F2F]/80 mb-4 leading-relaxed">
              Cowtrition Foundation was born from a deep reverence for
              India&apos;s sacred cows and the farmers who have nurtured them
              for generations. We believe in the ancient wisdom of{' '}
              <em>Gau Seva</em> (service to cows) and its power to transform
              rural communities.
            </p>
            <p className="text-lg text-[#2F4F2F]/80 mb-4 leading-relaxed">
              Our mission is to preserve indigenous Indian cow breeds like Gir,
              Sahiwal, and Red Sindhi, which are not only culturally significant
              but also produce A2 milk that is healthier and more nutritious
              than conventional dairy.
            </p>
            <p className="text-lg text-[#2F4F2F]/80 leading-relaxed">
              Through sustainable farming practices, community education, and
              direct farmer support, we&apos;re building a future where
              tradition and progress walk hand in hand.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/about/about-farming.jpg"
              alt="About Us - Traditional Indian Cow Farming"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </Section>

      {/* Mission & Values */}
      <Section background="beige">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2F4F2F] mb-6">
            Our Mission & Values
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Preservation',
              description:
                'Protecting indigenous Indian cow breeds and their genetic diversity for future generations.',
            },
            {
              title: 'Education',
              description:
                'Teaching traditional and modern sustainable farming practices to rural communities.',
            },
            {
              title: 'Empowerment',
              description:
                'Creating economic opportunities for farmers through fair trade and organic farming.',
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-[#2F4F2F] mb-4">
                {value.title}
              </h3>
              <p className="text-[#2F4F2F]/70 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
