'use client';

import Image from 'next/image';
import { ImgHTMLAttributes } from 'react';

interface DefaultImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  hoverEffect?: boolean;
  fill?: boolean;
}

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
  fill,
  ...props
}: DefaultImageProps) {
  const baseStyles = 'transition-transform duration-200';
  const hoverStyles = hoverEffect ? 'group-hover:scale-110' : '';
  
  const objectFitClasses = {
    contain: 'object-contain',
    cover: 'object-cover',
    fill: 'object-fill',
    none: 'object-none',
    'scale-down': 'object-scale-down',
  };
  
  if (fill) {
    return (
      <div className={`relative flex-shrink-0 ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={quality}
          className={`${baseStyles} ${hoverStyles} ${objectFitClasses[objectFit] || objectFitClasses.contain}`}
          {...props}
        />
      </div>
    );
  }
  
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

