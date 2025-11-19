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
      {/* Hero Banner */}
      <section className="relative h-[40vh] bg-linear-to-br from-[#4D7C0F] to-[#2F4F2F] flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white text-center"
          >
            Get In Touch
          </motion.h1>
        </div>
      </section>

      {/* Contact Section */}
      <Section background="white">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-[#2F4F2F] mb-6">
              Let&apos;s Connect
            </h2>
            <p className="text-lg text-[#2F4F2F]/80 mb-8 leading-relaxed">
              Have questions about our work, want to volunteer, or explore
              partnership opportunities? We&apos;d love to hear from you.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D97706] rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2F4F2F] mb-1">Email</h3>
                  <a
                    href="mailto:Cowtrition2019@gmail.com"
                    className="text-[#2F4F2F]/70 hover:text-[#D97706] transition-colors"
                  >
                    Cowtrition2019@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#4D7C0F] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2F4F2F] mb-1">Phone</h3>
                  <a
                    href="tel:+919540845510"
                    className="text-[#2F4F2F]/70 hover:text-[#4D7C0F] transition-colors"
                  >
                    +91 9540845510
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#7A5C33] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2F4F2F] mb-1">Address</h3>
                  <p className="text-[#2F4F2F]/70">
                    Village Gau Shala, Tehsil Organic
                    <br />
                    District Cowtrition, State of Agriculture
                    <br />
                    India 123456
                    <br />
                    <span className="font-semibold text-[#2F4F2F] mt-2 inline-block">
                      Employees: 10-12
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="font-semibold text-[#2F4F2F] mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/cowtritionfoundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#2F4F2F] hover:bg-[#D97706] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook size={20} className="text-white" />
                </a>
                <a
                  href="https://www.instagram.com/cowtritionfoundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#2F4F2F] hover:bg-[#D97706] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram size={20} className="text-white" />
                </a>
                <a
                  href="https://www.youtube.com/@cowtritionfoundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#2F4F2F] hover:bg-[#D97706] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label="YouTube"
                >
                  <Youtube size={20} className="text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/company/cowtrition-foundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#2F4F2F] hover:bg-[#D97706] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="text-white" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
