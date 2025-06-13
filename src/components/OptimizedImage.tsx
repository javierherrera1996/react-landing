'use client';

import React from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

/**
 * Componente de imagen optimizado para SEO
 * - Usa Next.js Image para optimización automática
 * - Requiere alt text para accesibilidad y SEO
 * - Soporta lazy loading por defecto
 * - Permite priorizar imágenes críticas
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width = 800,
  height = 600,
  className = '',
  priority = false,
  objectFit = 'cover'
}) => {
  // Determinar si la imagen es local o externa
  const isExternal = src.startsWith('http') || src.startsWith('https');
  
  return (
    <div className={`relative ${className}`} style={{ width: '100%', height: 'auto' }}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        style={{ objectFit }}
        unoptimized={isExternal} // No optimizar imágenes externas
      />
    </div>
  );
};

export default OptimizedImage; 