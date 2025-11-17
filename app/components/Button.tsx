'use client';

import { motion } from 'framer-motion';
import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href,
  className = '',
  ...props 
}: ButtonProps) {
  const baseClasses = 'rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center gap-2';
  
  const variantClasses = {
    primary: 'bg-[#D97706] text-white hover:bg-[#B45309] shadow-lg hover:shadow-xl',
    secondary: 'bg-[#4D7C0F] text-white hover:bg-[#65A30D] shadow-lg hover:shadow-xl',
    outline: 'border-2 border-[#2F4F2F] text-[#2F4F2F] hover:bg-[#2F4F2F] hover:text-white',
  };
  
  const sizeClasses = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  const buttonContent = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <button
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href}>
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
}
