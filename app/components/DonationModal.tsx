'use client';

import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DonationModal({ isOpen, onClose }: DonationModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#4D7C0F]/10 hover:bg-[#4D7C0F]/20 flex items-center justify-center transition-colors z-10"
              >
                <X size={24} className="text-[#2F4F2F]" />
              </button>

              {/* Content */}
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-[#D97706] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">❤️</span>
                </div>

                <h2 className="text-3xl font-bold text-[#2F4F2F] mb-3">
                  Support Our Mission
                </h2>
                <p className="text-[#2F4F2F]/70 mb-6 leading-relaxed">
                  Scan the QR code below to make a donation and help us preserve
                  India&apos;s sacred cows and empower rural farmers.
                </p>

                {/* QR Code Placeholder */}
                <div className="bg-[#FFF7E9] rounded-2xl p-6 mb-6">
                  <div className="aspect-square bg-white rounded-xl flex items-center justify-center border-2 border-[#4D7C0F]/20">
                    <div className="text-center">
                      <div className="text-6xl mb-3">📱</div>
                      <p className="text-[#2F4F2F]/60 text-sm">
                        Add your payment QR code here
                      </p>
                      <p className="text-[#2F4F2F]/40 text-xs mt-2">
                        Replace with actual QR image
                      </p>
                    </div>
                  </div>
                </div>

                {/* Payment Info */}
                <div className="bg-[#4D7C0F]/5 rounded-xl p-4 mb-4">
                  <p className="text-sm text-[#2F4F2F]/70 mb-2">
                    Or transfer directly to:
                  </p>
                  <p className="font-mono text-sm font-medium text-[#2F4F2F]">
                    Account: [Add Account Number]
                  </p>
                  <p className="font-mono text-sm font-medium text-[#2F4F2F]">
                    IFSC: [Add IFSC Code]
                  </p>
                </div>

                <p className="text-xs text-[#2F4F2F]/50">
                  Your contribution is tax-deductible under 80G
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
