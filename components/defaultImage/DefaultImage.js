'use client';

import Image from 'next/image';

export default function DefaultImage({
  src,
  alt = '',
  width,
  height,
  className = '',
  priority = false,
  quality = 75,
  objectFit = 'contain',
  hoverEffect = false,
  ...props
}) {
  const baseStyles = 'transition-transform duration-200';
  const hoverStyles = hoverEffect ? 'group-hover:scale-110' : '';
  
  const objectFitClasses = {
    contain: 'object-contain',
    cover: 'object-cover',
    fill: 'object-fill',
    none: 'object-none',
    'scale-down': 'object-scale-down',
  };
  
  return (
    <div className={`relative flex-shrink-0 ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        quality={quality}
        className={`${baseStyles} ${hoverStyles} ${objectFitClasses[objectFit] || objectFitClasses.contain}`}
        {...props}
      />
    </div>
  );
}
