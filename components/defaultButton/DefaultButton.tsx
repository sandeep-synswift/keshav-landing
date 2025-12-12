'use client';

import Link from 'next/link';
import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

interface DefaultButtonProps {
  children: ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
  href?: string;
  as?: 'button' | 'link';
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'primarySolid' | 'primaryOutline' | 'primaryLight' | 'secondarySolid' | 'secondaryOutline' | 'secondaryLight' | 'partner' | 'discover' | 'whiteOutline' | 'outlinedDark' | 'outlinedPrimary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  rounded?: 'none' | 'sm' | 'default' | 'md' | 'lg' | 'xl';
  className?: string;
}

export default function DefaultButton({
  children,
  onClick,
  href,
  as = 'button',
  type = 'button',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  rounded = 'default',
  className = '',
  ...props
}: DefaultButtonProps & (ButtonHTMLAttributes<HTMLButtonElement> | AnchorHTMLAttributes<HTMLAnchorElement>)) {
  // Border radius options - all set to none (no rounded corners)
  const borderRadius = {
    none: '',
    sm: '',
    default: '',
    md: '',
    lg: '',
    xl: '',
  };
  
  const baseStyles = `font-normal text-base transition-all duration-300 focus:outline-none focus:ring-0 focus:scale-100 relative overflow-hidden group flex items-center justify-center text-center`;
  
  const variants = {
    // Brand color variants
    primary: 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white',
    secondary: 'bg-gray-900 text-white hover:bg-gray-800',
    
    // Primary variations
    primarySolid: 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white',
    primaryOutline: 'border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white',
    primaryLight: 'bg-orange-400 text-white hover:bg-orange-500',
    
    // Secondary variations
    secondarySolid: 'bg-gray-900 text-white hover:bg-gray-800',
    secondaryOutline: 'border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white',
    secondaryLight: 'bg-gray-800 text-white hover:bg-gray-900',
    
    // Design variants
    partner: 'bg-transparent text-white border border-white hover:border-orange-500 relative z-10',
    discover: 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white',
    whiteOutline: 'bg-transparent text-white border border-white hover:border-orange-500 relative z-10',
    
    // Additional utility variants
    outlinedDark: 'bg-gray-900 text-white border border-white hover:bg-gray-800',
    outlinedPrimary: 'border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white',
  };
  
  // Override border radius for specific variants
  const getBorderRadius = () => {
    return borderRadius[rounded];
  };
  
  const sizes = {
    small: 'px-3 h-10 text-sm',
    medium: 'px-4 h-12',
    large: 'px-6 h-14 text-lg',
  };
  
  const disabledStyles = disabled 
    ? 'opacity-50 cursor-not-allowed' 
    : 'cursor-pointer';
  
  const buttonClasses = `${baseStyles} ${getBorderRadius()} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`;
  
  // Render as Link if href is provided or as is 'link'
  if (as === 'link' || href) {
    return (
      <Link
        href={href || '#'}
        onClick={onClick}
        className={buttonClasses}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {/* Left-to-right fill animation for partner and whiteOutline variants */}
        {(variant === 'partner' || variant === 'whiteOutline') && (
          <span 
            className="absolute inset-0 bg-orange-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0"
            aria-hidden="true"
          />
        )}
        <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      </Link>
    );
  }
  
  // Render as button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {/* Left-to-right fill animation for partner and whiteOutline variants */}
      {(variant === 'partner' || variant === 'whiteOutline') && (
        <span 
          className="absolute inset-0 bg-orange-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0"
          aria-hidden="true"
        />
      )}
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </button>
  );
}

