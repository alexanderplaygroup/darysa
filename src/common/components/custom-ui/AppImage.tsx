'use client';

import { cn } from '@/lib/utils';
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import { Skeleton } from '../shadcn-ui/skeleton';

type AppImageProps = ImageProps & {
  fallbackSrc?: string;
};

export function AppImage({
  src,
  alt = 'Imagen no disponible',
  className,
  fallbackSrc = '/auth/placeholderLogin.png',
  ...props
}: AppImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={cn(
          'bg-accent flex h-full w-full items-center justify-center text-sm text-gray-500',
          className
        )}
      >
        Imagen no disponible
      </div>
    );
  }

  return (
    <>
      {isLoading && <Skeleton className={cn('h-full w-full', className)} />}

      <Image
        {...props}
        src={imgSrc || fallbackSrc}
        alt={alt}
        className={cn(
          'object-cover transition-opacity duration-500',
          isLoading ? 'opacity-0' : 'opacity-100',
          className
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setImgSrc(fallbackSrc);
          setHasError(true);
        }}
      />
    </>
  );
}
