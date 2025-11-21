'use client';

import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from 'lucide-react';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner - Enhanced */}
      <section className="relative h-[50vh] min-h-[400px] bg-linear-to-br from-[#4D7C0F] to-[#2F4F2F] flex items-center justify-center overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-96 h-96 bg-[#D97706]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
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
                Connect With Us
              </span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              We'd love to hear from you
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
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
                  Contact Details
                </span>
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2F4F2F] mb-4">
                Let&apos;s Connect
              </h2>
              <p className="text-base md:text-lg text-[#2F4F2F]/80 mb-8 leading-relaxed">
                Have questions about our work, want to volunteer, or explore
                partnership opportunities? We&apos;d love to hear from you.
              </p>

              <div className="space-y-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-14 h-14 bg-[#D97706] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2F4F2F] mb-2 text-lg">
                      Email
                    </h3>
                    <a
                      href="mailto:Cowtrition2019@gmail.com"
                      className="text-[#2F4F2F]/70 hover:text-[#D97706] transition-colors"
                    >
                      Cowtrition2019@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-14 h-14 bg-[#4D7C0F] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2F4F2F] mb-2 text-lg">
                      Phone
                    </h3>
                    <a
                      href="tel:+919540845510"
                      className="text-[#2F4F2F]/70 hover:text-[#4D7C0F] transition-colors"
                    >
                      +91 9540845510
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-14 h-14 bg-[#7A5C33] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2F4F2F] mb-2 text-lg">
                      Address
                    </h3>
                    <p className="text-[#2F4F2F]/70">
                      A-4, Lal Bagh
                      <br />
                      Loni Ghaziabad, Uttar Pradesh 201102
                      <br />
                      India
                      <br />
                      <span className="font-semibold text-[#2F4F2F] mt-2 inline-block">
                        Employees: 10-12
                      </span>
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Social Media Links */}
              <div>
                <h3 className="font-semibold text-[#2F4F2F] mb-4 text-lg">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  {[
                    {
                      icon: Facebook,
                      url: 'https://www.facebook.com/cowtritionfoundation',
                      label: 'Facebook',
                    },
                    {
                      icon: Instagram,
                      url: 'https://www.instagram.com/cowtritionfoundation',
                      label: 'Instagram',
                    },
                    {
                      icon: Youtube,
                      url: 'https://www.youtube.com/@cowtritionfoundation',
                      label: 'YouTube',
                    },
                    {
                      icon: Linkedin,
                      url: 'https://www.linkedin.com/company/cowtrition-foundation',
                      label: 'LinkedIn',
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#2F4F2F] hover:bg-[#D97706] rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                      aria-label={social.label}
                    >
                      <social.icon size={20} className="text-white" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#FFF7E9] rounded-3xl p-8 shadow-xl"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
