'use client';

import { cn } from '@/lib/utils';
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

type AppImageProps = ImageProps & {
  fallbackSrc?: string;
  placeholderSrc?: string;
};

export function AppImage({
  src,
  alt = 'Imagen no disponible',
  className,
  fallbackSrc = '/auth/placeholderLogin.png',
  placeholderSrc = '/auth/placeholderLogin.png',
  ...props
}: AppImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={cn(
          'flex h-full w-full items-center justify-center bg-gray-100 text-sm text-gray-500',
          className
        )}
      >
        Imagen no disponible
      </div>
    );
  }

  return (
    <Image
      {...props}
      src={isLoading ? placeholderSrc : imgSrc || fallbackSrc}
      alt={alt}
      className={cn(
        'object-cover transition-opacity duration-300',
        isLoading ? 'opacity-50 blur-sm' : 'opacity-100',
        className
      )}
      onLoadingComplete={() => setIsLoading(false)}
      onError={() => {
        setImgSrc(fallbackSrc);
        setHasError(true);
      }}
    />
  );
}
