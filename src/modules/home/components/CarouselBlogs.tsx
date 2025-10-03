'use client';
import { ProductCard } from '@/common/components/custom-ui/product/productCard';
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselDots, CarouselItem } from '@shadcnui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import { products } from '../data';
import { useResponsiveGroupSize } from '../hook/useResponsiveGroupSize';

export default function CarouselBlogs() {
  const autoplayRef = useRef(Autoplay({ delay: 5000, playOnInit: true }));

  const groupSize = useResponsiveGroupSize({ xl: 3, lg: 3, md: 3, sm: 3, base: 2 });

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
          {products.map((product, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 pl-6 sm:basis-1/3 md:basis-1/3 lg:basis-1/3 xl:basis-1/3"
            >
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                sku={product.sku}
                brand={product.brand}
                price={product.price}
                discount={product.discount}
                onAddToCart={() => console.log('Add to cart:', product.name)}
                onToggleFavorite={() => console.log('Toggle favorite:', product.name)}
              />
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
