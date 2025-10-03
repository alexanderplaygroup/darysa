'use client';
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselDots, CarouselItem } from '@shadcnui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { useRef } from 'react';
import { useResponsiveGroupSize } from '../hook/useResponsiveGroupSize';

export default function CarouselBrands() {
  const autoplayRef = useRef(Autoplay({ delay: 5000, playOnInit: true }));
  const groupSize = useResponsiveGroupSize({ xl: 6, lg: 5, md: 4, sm: 3, base: 2 });

  const images = [
    '/home/brands/b1.png',
    '/home/brands/b2.png',
    '/home/brands/b3.png',
    '/home/brands/b4.png',
    '/home/brands/b5.png',
    '/home/brands/b6.png',
    '/home/brands/b3.png',
    '/home/brands/b4.png',
    '/home/brands/b5.png',
    '/home/brands/b6.png',
    '/home/brands/b3.png',
    '/home/brands/b4.png',
    '/home/brands/b5.png',
  ];

  return (
    <Carousel
      plugins={[autoplayRef.current]}
      opts={{
        align: 'start',
        loop: true,
        slidesToScroll: groupSize,
      }}
      className="w-full space-y-10"
      onMouseEnter={() => autoplayRef.current.stop()}
      onMouseLeave={() => autoplayRef.current.play()}
    >
      <CarouselContent className="-ml-6 items-center">
        {images.map((src, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2 pl-6 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
          >
            <Image
              src={src}
              alt={`Banner ${index + 1}`}
              width={150}
              height={60}
              className="mx-auto h-auto w-auto object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselDots
        className="mx-auto w-fit gap-1.5"
        renderDot={(index, isActive, goTo) => (
          <div
            key={index}
            onClick={goTo}
            className={cn(
              'h-2.5 w-2.5 rounded-full transition-all duration-400',
              isActive
                ? 'bg-darysa-amarillo w-[34px]'
                : 'bg-darysa-gris-claro-alt hover:bg-darysa-gris-claro cursor-pointer'
            )}
          >
            {/* Puedes incluso mostrar mini-previews del grupo */}
            <span className="sr-only">Grupo {index + 1}</span>
          </div>
        )}
      />
    </Carousel>
  );
}
