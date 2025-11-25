'use client';

import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden relative my-8 max-h-[90vh]"
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
              <div className="p-6 sm:p-7 text-center overflow-y-auto max-h-[85vh]">
                <div className="w-14 h-14 bg-[#D97706] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">❤️</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-[#2F4F2F] mb-2">
                  Support Our Mission
                </h2>
                <p className="text-sm text-[#2F4F2F]/70 mb-5 leading-relaxed px-2">
                  Scan the QR code below to make a donation and help us preserve
                  India&apos;s sacred cows and empower rural farmers.
                </p>

                {/* QR Code */}
                <div className="bg-[#FFF7E9] rounded-2xl p-4 mb-5">
                  <div className="aspect-square bg-white rounded-xl flex items-center justify-center border-2 border-[#4D7C0F]/20 overflow-hidden max-w-xs mx-auto relative">
                    <Image
                      src="/qr-code.jpeg"
                      alt="Payment QR Code"
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 640px) 90vw, 400px"
                    />
                  </div>
                </div>

                {/* Payment Info */}
                <div className="bg-[#4D7C0F]/5 rounded-xl p-4 mb-4 text-left">
                  <p className="text-xs sm:text-sm text-[#2F4F2F]/70 mb-3 font-semibold text-center">
                    Or transfer directly to:
                  </p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="text-xs text-[#2F4F2F]/60 mb-1">
                        Account Name
                      </p>
                      <p className="font-medium text-[#2F4F2F] text-sm sm:text-base">
                        Cowtrition Foundation
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-[#2F4F2F]/60 mb-1">
                        Account Number
                      </p>
                      <p className="font-mono text-sm sm:text-base font-medium text-[#2F4F2F]">
                        3110201002681
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-[#2F4F2F]/60 mb-1">
                        IFSC Code
                      </p>
                      <p className="font-mono text-sm sm:text-base font-medium text-[#2F4F2F]">
                        CNRB0006458
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-[#2F4F2F]/60 mb-1">
                        Bank & Branch
                      </p>
                      <p className="font-medium text-[#2F4F2F] text-sm sm:text-base">
                        Canara Bank, Loni Ghaziabad, Uttar Pradesh
                      </p>
                    </div>
                  </div>
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
