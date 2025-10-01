'use client';
import { ProductCard } from '@/common/components/custom-ui/product/productCard';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from '@shadcnui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';
import { products } from '../data';
import { useResponsiveGroupSize } from '../hook/useResponsiveGroupSize';

export default function CarouselPacks() {
  const autoplayRef = useRef(Autoplay({ delay: 5000, playOnInit: true }));
  const [embla, setEmbla] = useState<CarouselApi | null>(null); // Referencia Embla

  const groupSize = useResponsiveGroupSize({ xl: 4, lg: 4, md: 4, sm: 3, base: 2 });

  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="text-darysa-gris-oscuro text-4xl font-bold">Pack de Productos</h3>

        <div className="flex gap-2">
          <button type="button" onClick={() => embla?.scrollPrev()}>
            <ChevronLeft />
          </button>
          <button type="button" onClick={() => embla?.scrollNext()}>
            <ChevronRight />
          </button>
        </div>
      </div>
      <Carousel
        setApi={setEmbla} // ✅ aquí va setApi, no carouselRef
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
              className="basis-1/2 pl-6 sm:basis-1/3 md:basis-1/4 lg:basis-1/4 xl:basis-1/4"
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
          className="mx-auto w-fit gap-1.5"
          renderDot={(index, isActive, goTo) => (
            <div
              key={index}
              onClick={goTo}
              className={cn(
                'h-2.5 w-2.5 rounded-full transition-all duration-400',
                isActive
                  ? 'bg-darysa-amarillo w-12 lg:w-14'
                  : 'bg-darysa-gris-claro-alt hover:bg-darysa-gris-claro cursor-pointer'
              )}
            >
              {/* Puedes incluso mostrar mini-previews del grupo */}
              <span className="sr-only">Grupo {index + 1}</span>
            </div>
          )}
        />
      </Carousel>
    </>
  );
}
