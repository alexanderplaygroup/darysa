'use client';
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselDots, CarouselItem } from '@shadcnui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export function CarouselBrand() {
  const autoplayRef = useRef(Autoplay({ delay: 4000, playOnInit: true }));
  const [groupSize, setGroupSize] = useState(6); // default xl

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

  useEffect(() => {
    function updateGroupSize() {
      const width = window.innerWidth;
      if (width >= 1280)
        setGroupSize(6); // xl
      else if (width >= 1024)
        setGroupSize(5); // lg
      else if (width >= 768)
        setGroupSize(4); // md
      else if (width >= 640)
        setGroupSize(3); // sm
      else setGroupSize(2); // base
    }

    updateGroupSize();
    window.addEventListener('resize', updateGroupSize);
    return () => window.removeEventListener('resize', updateGroupSize);
  }, []);

  return (
    <Carousel
      plugins={[autoplayRef.current]}
      opts={{
        align: 'start',
        loop: true,
        slidesToScroll: 1,
      }}
      className="w-full space-y-10"
      onMouseEnter={() => autoplayRef.current.stop()}
      onMouseLeave={() => autoplayRef.current.play()}
    >
      <CarouselContent className="ml-0 flex w-full items-center justify-between">
        {images.map((src, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2 pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
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
        byGroup
        groupSize={groupSize} // dinámico según el responsive
        renderDot={(index, isActive, goTo) => (
          <div
            key={index}
            onClick={goTo}
            className={cn(
              'h-2.5 w-2.5 rounded-full transition-all duration-200',
              isActive
                ? 'bg-darysa-amarillo w-12 lg:w-14'
                : 'bg-darysa-gris-claro-alt cursor-pointer'
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
