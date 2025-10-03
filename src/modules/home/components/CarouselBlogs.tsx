'use client';
import { BlogCard } from '@/common/components/custom-ui/blog/BlogCard';
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselDots, CarouselItem } from '@shadcnui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import { useResponsiveGroupSize } from '../hook/useResponsiveGroupSize';

export default function CarouselBlogs() {
  const autoplayRef = useRef(Autoplay({ delay: 5000, playOnInit: true }));

  const groupSize = useResponsiveGroupSize({ xl: 3, lg: 3, md: 3, sm: 2, base: 1 });
  const blogPosts = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
      category: 'Tecnología',
      title: 'La revolución de la IA en el desarrollo web',
      author: {
        name: 'María Pérez',
        avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
      },
      date: '3 de Octubre, 2025',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4',
      category: 'Negocios',
      title: 'Estrategias de crecimiento para startups en 2025',
      author: {
        name: 'Carlos Gómez',
        avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
      },
      date: '28 de Septiembre, 2025',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
      category: 'Diseño',
      title: 'Tendencias de diseño minimalista en interfaces',
      author: {
        name: 'Ana Torres',
        avatarUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
      },
      date: '20 de Septiembre, 2025',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
      category: 'Diseño',
      title: 'Tendencias de diseño minimalista en interfaces',
      author: {
        name: 'Ana Torres',
        avatarUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
      },
      date: '20 de Septiembre, 2025',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
      category: 'Diseño',
      title:
        'Tendencias de diseño minimalista en interfaces ssssssssss sss sss ssssssssssssssssssssssssssss ssssssssssssssssssssssssssssssssssssssss',
      author: {
        name: 'Ana Torres',
        avatarUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
      },
      date: '20 de Septiembre, 2025',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
      category: 'Diseño',
      title: 'Tendencias de diseño minimalista en interfaces',
      author: {
        name: 'Ana Torres',
        avatarUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
      },
      date: '20 de Septiembre, 2025',
    },
  ];

  return (
    <>
      <h3 className="text-darysa-gris-oscuro-alt-3 text-4xl font-bold">Nuestro Blog</h3>

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
        <CarouselContent className="-ml-6">
          {blogPosts.map((post, index) => (
            <CarouselItem
              key={index}
              className="basis-full pl-6 sm:basis-1/2 md:basis-1/3 lg:basis-1/3 xl:basis-1/3"
            >
              <BlogCard key={index} {...post} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselDots
          className="mx-auto w-fit gap-10"
          renderDot={(index, isActive, goTo) => (
            <div
              key={index}
              onClick={goTo}
              className={cn(
                'border-darysa-gris-oscuro flex h-[36px] w-[48px] items-center justify-center rounded-xs border bg-transparent font-bold text-white transition-all duration-400',
                isActive
                  ? 'bg-darysa-gris-oscuro'
                  : 'hover:bg-darysa-gris-claro/40 text-darysa-gris-oscuro cursor-pointer'
              )}
            >
              {/* Puedes incluso mostrar mini-previews del grupo */}
              <span>{index + 1}</span>
            </div>
          )}
        />
      </Carousel>
    </>
  );
}
