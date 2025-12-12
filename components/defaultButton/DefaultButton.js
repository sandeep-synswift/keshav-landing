'use client';

import Link from 'next/link';

export default function DefaultButton({
  children,
  onClick,
  href,
  as = 'button', // 'button' or 'link'
  type = 'button',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  rounded = 'default',
  className = '',
  ...props
}) {
  // Border radius options
  const borderRadius = {
    none: 'rounded-none',
    sm: 'rounded-none',
    default: 'rounded-none',
    md: 'rounded-none',
    lg: 'rounded-none',
    xl: 'rounded-none',
  };
  
  const baseStyles = `font-normal text-base transition-all duration-300 focus:outline-none focus:ring-0 focus:scale-100 relative overflow-hidden group`;
  
  const variants = {
    // Brand color variants
    primary: 'bg-primary-500 text-white hover:bg-primary-600',
    secondary: 'bg-secondary-950 text-white hover:bg-secondary-900',
    
    // Primary variations
    primarySolid: 'bg-primary-500 text-white hover:bg-primary-600',
    primaryOutline: 'border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white',
    primaryLight: 'bg-primary-400 text-white hover:bg-primary-500',
    
    // Secondary variations
    secondarySolid: 'bg-secondary-950 text-white hover:bg-secondary-900',
    secondaryOutline: 'border border-secondary-950 text-secondary-950 hover:bg-secondary-950 hover:text-white',
    secondaryLight: 'bg-secondary-900 text-white hover:bg-secondary-950',
    
    // Design variants based on images
    // "Partner With Us!" style: Transparent background, white text, white border, fills with primary on hover (left to right)
    partner: 'bg-transparent text-white border border-white hover:border-primary-500 relative z-10',
    
    // "Discover More" style: Red background (using primary), white text, slightly rounded
    discover: 'bg-primary-500 text-white hover:bg-primary-600',
    
    // Additional utility variants
    outlinedDark: 'bg-secondary-950 text-white border border-white hover:bg-secondary-900',
    outlinedPrimary: 'border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white',
  };
  
  // Override border radius for specific variants
  const getBorderRadius = () => {
    if (variant === 'partner' || variant === 'outlinedDark') {
      return 'rounded-none'; // Sharp corners for partner variant
    }
    if (variant === 'discover' || variant === 'red') {
      return 'rounded-none'; // Slightly rounded for discover variant
    }
    return borderRadius[rounded];
  };
  
  const sizes = {
    small: 'px-3 h-10 text-sm',
    medium: 'px-4 h-12', // text-base is in baseStyles (16px)
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
        className={`${buttonClasses} inline-block`}
        {...props}
      >
        {/* Left-to-right fill animation for partner variant */}
        {variant === 'partner' && (
          <span 
            className="absolute inset-0 bg-primary-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0"
            aria-hidden="true"
          />
        )}
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }
  
  // Render as button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${buttonClasses} inline-block`}
      {...props}
    >
      {/* Left-to-right fill animation for partner variant */}
      {variant === 'partner' && (
        <span 
          className="absolute inset-0 bg-primary-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0"
          aria-hidden="true"
        />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
