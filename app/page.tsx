'use client';

import { motion } from 'framer-motion';
import {
  ArrowDown,
  Heart,
  Users,
  Sprout,
  HandHeart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from 'lucide-react';
import Section from './components/Section';
import AnimatedCard from './components/AnimatedCard';
import Button from './components/Button';
import ContactForm from './components/ContactForm';
import ImagePlaceholder from './components/ImagePlaceholder';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-linear-to-b from-[#FFF7E9] to-[#4D7C0F]/10 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#4D7C0F] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D97706] rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#2F4F2F] mb-6 leading-tight">
              Cowtrition Foundation
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-[#7A5C33] mb-4 font-light">
              Nourishing Rural India, One Cow at a Time
            </p>
            <p className="text-lg md:text-xl text-[#2F4F2F]/80 mb-10 max-w-3xl mx-auto">
              Preserving indigenous cow breeds, empowering farmers, and reviving
              traditional sustainable agriculture rooted in Indian heritage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="primary" size="lg" href="#support">
                Support Our Mission
                <Heart size={20} />
              </Button>
              <Button variant="outline" size="lg" href="#about">
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16"
          >
            <ImagePlaceholder
              src="/images/hero/hero-banner.jpg"
              alt="Hero Image - Indian Cow with Farmer"
              aspectRatio="wide"
              className="max-w-5xl mx-auto shadow-2xl"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="block">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ArrowDown size={32} className="text-[#4D7C0F]" />
            </motion.div>
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <Section id="about" background="white">
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
              Cowtrition Foundation was born from a deep reverence for India's
              sacred cows and the farmers who have nurtured them for
              generations. We believe in the ancient wisdom of <em>Gau Seva</em>{' '}
              (service to cows) and its power to transform rural communities.
            </p>
            <p className="text-lg text-[#2F4F2F]/80 mb-4 leading-relaxed">
              more details
            </p>
            <p className="text-lg text-[#2F4F2F]/80 leading-relaxed">
              ....
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ImagePlaceholder
              alt="About Us - Traditional Indian Cow Farming"
              aspectRatio="portrait"
              className="shadow-xl"
            />
          </motion.div>
        </div>
      </Section>

      {/* Vision Section */}
      <Section id="vision" background="green">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2F4F2F] mb-6">
            Our Vision & Impact
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

        <div className="grid md:grid-cols-4 gap-6 mt-16 text-center">
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
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="text-4xl font-bold text-[#D97706] mb-2">
                {stat.number}
              </div>
              <div className="text-[#2F4F2F]/70 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Our Family & Farmers Section */}
      <Section id="family" background="beige">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2F4F2F] mb-6">
            Our Family & Farmers
          </h2>
          <p className="text-lg text-[#2F4F2F]/80 max-w-3xl mx-auto">
            Meet the dedicated team and farming families who make our mission
            possible through their unwavering commitment to sustainable
            agriculture.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              name: 'Ramesh Patel',
              role: 'Lead Farmer & Trainer',
              location: 'Gujarat',
            },
            {
              name: 'Lakshmi Devi',
              role: 'Organic Agriculture Expert',
              location: 'Rajasthan',
            },
            {
              name: 'Suresh Kumar',
              role: 'Cow Breeding Specialist',
              location: 'Haryana',
            },
            {
              name: 'Priya Sharma',
              role: 'Community Outreach',
              location: 'Madhya Pradesh',
            },
            {
              name: 'Vijay Singh',
              role: 'Veterinary Consultant',
              location: 'Punjab',
            },
            {
              name: 'Anita Rao',
              role: 'Dairy Processing Advisor',
              location: 'Maharashtra',
            },
          ].map((member, index) => (
            <AnimatedCard key={index} delay={index * 0.1}>
              <ImagePlaceholder
                alt={`${member.name} - ${member.role}`}
                aspectRatio="square"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2F4F2F] mb-2">
                  {member.name}
                </h3>
                <p className="text-[#D97706] font-medium mb-1">{member.role}</p>
                <p className="text-[#2F4F2F]/60 text-sm">{member.location}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </Section>

      {/* Social Activities Section */}
      <Section id="activities" background="white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2F4F2F] mb-6">
            Our Social Activities
          </h2>
          <p className="text-lg text-[#2F4F2F]/80 max-w-3xl mx-auto">
            We engage in diverse initiatives that strengthen communities,
            educate youth, and promote sustainable living across rural India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: 'Gau Shala Development',
              description:
                'Building modern, humane cow shelters with proper veterinary care, natural grazing areas, and clean water facilities.',
              image: 'Cow Shelter with Indigenous Cows',
            },
            {
              title: 'Farmer Training Programs',
              description:
                'Conducting workshops on organic farming techniques, composting, natural pest control, and sustainable water management.',
              image: 'Farmers Attending Training Workshop',
            },
            {
              title: 'School Education Drives',
              description:
                'Teaching children about the importance of cows in Indian culture, organic farming, and environmental conservation.',
              image: 'Children Learning About Cows',
            },
            {
              title: 'A2 Milk Distribution',
              description:
                'Connecting farmers directly with urban consumers seeking pure, chemical-free A2 milk from indigenous cows.',
              image: 'Fresh A2 Milk Distribution',
            },
            {
              title: 'Organic Fertilizer Production',
              description:
                'Creating high-quality vermicompost and bio-fertilizers from cow dung to replace chemical alternatives.',
              image: 'Organic Compost Production',
            },
            {
              title: 'Women Empowerment',
              description:
                'Training rural women in dairy processing, product creation, and entrepreneurship for economic independence.',
              image: 'Women in Dairy Processing',
            },
          ].map((activity, index) => (
            <AnimatedCard key={index} delay={index * 0.1}>
              <ImagePlaceholder alt={activity.image} aspectRatio="video" />
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

      {/* Support Us Section */}
      <Section id="support" background="green">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2F4F2F] mb-6">
            Support Our Mission
          </h2>
          <p className="text-lg text-[#2F4F2F]/80 max-w-3xl mx-auto">
            Your contribution helps preserve India's sacred cows, empower
            farmers, and build sustainable communities. Every donation creates
            lasting impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <AnimatedCard delay={0}>
            <div className="p-8">
              <div className="w-16 h-16 bg-[#D97706] rounded-full flex items-center justify-center mb-4">
                <Heart size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#2F4F2F] mb-3">Donate</h3>
              <p className="text-[#2F4F2F]/70 mb-6 leading-relaxed">
                Make a one-time or monthly contribution to support cow care,
                farmer training, and organic farming initiatives.
              </p>
              <Button variant="primary" href="#contact">
                Donate Now
              </Button>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.1}>
            <div className="p-8">
              <div className="w-16 h-16 bg-[#4D7C0F] rounded-full flex items-center justify-center mb-4">
                <HandHeart size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#2F4F2F] mb-3">
                Volunteer
              </h3>
              <p className="text-[#2F4F2F]/70 mb-6 leading-relaxed">
                Join our team on the ground. Share your skills in farming,
                education, marketing, or simply your time and energy.
              </p>
              <Button variant="secondary" href="#contact">
                Join Us
              </Button>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.2}>
            <div className="p-8">
              <div className="w-16 h-16 bg-[#7A5C33] rounded-full flex items-center justify-center mb-4">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#2F4F2F] mb-3">
                Adopt a Cow
              </h3>
              <p className="text-[#2F4F2F]/70 mb-6 leading-relaxed">
                Sponsor the care of an indigenous cow. Receive updates and
                photos while supporting sustainable dairy farming.
              </p>
              <Button variant="outline" href="#contact">
                Learn More
              </Button>
            </div>
          </AnimatedCard>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl text-center"
        >
          <h3 className="text-3xl font-bold text-[#2F4F2F] mb-4">
            Corporate Partnerships
          </h3>
          <p className="text-lg text-[#2F4F2F]/80 mb-6 max-w-2xl mx-auto">
            Partner with us for CSR initiatives. We offer customized programs
            for businesses committed to rural development and sustainability.
          </p>
          <Button variant="primary" size="lg" href="#contact">
            Partner With Us
          </Button>
        </motion.div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" background="beige">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2F4F2F] mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-[#2F4F2F]/80 mb-8 leading-relaxed">
              We'd love to hear from you. Whether you want to support our cause,
              volunteer, or simply learn more about our work, reach out today.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#4D7C0F] rounded-full flex items-center justify-center shrink-0">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#2F4F2F] mb-1">Email</h4>
                  <a
                    href="mailto:info@cowtrition.org"
                    className="text-[#D97706] hover:underline"
                  >
                    info@cowtrition.org
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#4D7C0F] rounded-full flex items-center justify-center shrink-0">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#2F4F2F] mb-1">Phone</h4>
                  <a
                    href="tel:+919876543210"
                    className="text-[#D97706] hover:underline"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#4D7C0F] rounded-full flex items-center justify-center shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#2F4F2F] mb-1">Address</h4>
                  <p className="text-[#2F4F2F]/70">
                    Rural Development Center
                    <br />
                    Village Gaushala Road
                    <br />
                    District: [Your District]
                    <br />
                    State: [Your State], India
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#4D7C0F] rounded-full flex items-center justify-center hover:bg-[#65A30D] transition-colors"
              >
                <Facebook size={24} className="text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#4D7C0F] rounded-full flex items-center justify-center hover:bg-[#65A30D] transition-colors"
              >
                <Instagram size={24} className="text-white" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#4D7C0F] rounded-full flex items-center justify-center hover:bg-[#65A30D] transition-colors"
              >
                <Twitter size={24} className="text-white" />
              </a>
            </div>
          </div>

          <div>
            <AnimatedCard>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#2F4F2F] mb-6">
                  Send us a message
                </h3>
                <ContactForm />
              </div>
            </AnimatedCard>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-[#2F4F2F] text-white py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Cowtrition Foundation</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                Preserving India's heritage through sustainable agriculture and
                cow conservation.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#about"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#vision"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Our Vision
                  </a>
                </li>
                <li>
                  <a
                    href="#family"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Our Family
                  </a>
                </li>
                <li>
                  <a
                    href="#activities"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Activities
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Get Involved</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#support"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Donate
                  </a>
                </li>
                <li>
                  <a
                    href="#support"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Volunteer
                  </a>
                </li>
                <li>
                  <a
                    href="#support"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Adopt a Cow
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Newsletter</h5>
              <p className="text-white/70 text-sm mb-3">
                Subscribe for updates on our mission and impact.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-sm focus:outline-none focus:border-white/40"
                />
                <Button variant="primary" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>
              © {new Date().getFullYear()} Cowtrition Foundation. All rights
              reserved. Made with ❤️ for rural India.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
