'use client';

import Link from 'next/link';

export default function DefaultText({
  as = 'p',
  children,
  size = 'base',
  color = 'default',
  className = '',
  href,
  ...props
}) {
  const sizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
  };
  
  const colors = {
    default: 'text-gray-900',
    primary: 'text-primary-500',
    primaryDark: 'text-primary-600',
    primaryLight: 'text-primary-400',
    secondary: 'text-secondary-950',
    secondaryDark: 'text-secondary-950',
    secondaryLight: 'text-secondary-900',
    success: 'text-green-600',
    danger: 'text-red-600',
    warning: 'text-yellow-600',
    muted: 'text-gray-500',
    white: 'text-white',
  };
  
  const baseStyles = `${sizes[size]} ${colors[color]} ${className}`;
  
  // If href is provided and as is 'link' or 'a', render as Link
  if (href && (as === 'link' || as === 'a')) {
    return (
      <Link href={href} className={baseStyles} {...props}>
        {children}
      </Link>
    );
  }
  
  // Render based on the 'as' prop
  const Component = as;
  
  switch (as) {
    case 'h1':
      // Global style: 54px semibold (600)
      return <h1 className={`${colors[color]} ${className}`} {...props}>{children}</h1>;
    case 'h2':
      // Global style: 36px semibold (600)
      return <h2 className={`${colors[color]} ${className}`} {...props}>{children}</h2>;
    case 'h3':
      // Global style: 24px medium (500)
      return <h3 className={`${colors[color]} ${className}`} {...props}>{children}</h3>;
    case 'h4':
      return <h4 className={`${baseStyles} font-semibold text-xl`} {...props}>{children}</h4>;
    case 'h5':
      return <h5 className={`${baseStyles} font-medium text-lg`} {...props}>{children}</h5>;
    case 'h6':
      return <h6 className={`${baseStyles} font-medium text-base`} {...props}>{children}</h6>;
    case 'p':
      // Global style: 14px regular (400)
      return <p className={`${colors[color]} ${className}`} {...props}>{children}</p>;
    case 'span':
      return <span className={baseStyles} {...props}>{children}</span>;
    case 'link':
    case 'a':
      return <a href={href} className={baseStyles} {...props}>{children}</a>;
    default:
      return <Component className={baseStyles} {...props}>{children}</Component>;
  }
}
