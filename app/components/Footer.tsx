'use client';

import Link from 'next/link';
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import Button from './Button';

export default function Footer() {
  return (
    <footer className="bg-[#2F4F2F] text-white py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-bold mb-4">Cowtrition Foundation</h4>
            <p className="text-white/70 text-sm leading-relaxed">
              Preserving India&apos;s heritage through sustainable agriculture
              and cow conservation.
            </p>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/vision"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Our Vision
                </Link>
              </li>
              <li>
                <Link
                  href="/activities"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Activities
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Get Involved</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/support"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Volunteer
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Adopt a Cow
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
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
                className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-sm focus:outline-none focus:border-white/40 text-white"
              />
              <Button variant="primary" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left text-sm text-white/60">
              <p>
                &copy; {new Date().getFullYear()} Cowtrition Foundation. All
                rights reserved. Made with ❤️ for rural India.
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/19spSqntCE/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook size={20} className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/cowtrition24?utm_source=qr&igsh=aGR1ZnA3YjllYmQy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram size={20} className="text-white" />
              </a>
              <a
                href="https://youtube.com/@cowtrition3255?si=v7FxmN0aIqawF5MM"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Youtube size={20} className="text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/cowtrition-foundation-07a727372"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
