'use client';

import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/common/components/shadcn-ui/button';
import { cn } from '@/lib/utils';

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: 'horizontal' | 'vertical';
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
}

function Carousel({
  orientation = 'horizontal',
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === 'horizontal' ? 'x' : 'y',
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  React.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on('reInit', onSelect);
    api.on('select', onSelect);

    return () => {
      api?.off('select', onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation: orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn('relative', className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({ className, ...props }: React.ComponentProps<'div'>) {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden" data-slot="carousel-content">
      <div
        className={cn('flex', orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col', className)}
        {...props}
      />
    </div>
  );
}

function CarouselItem({ className, ...props }: React.ComponentProps<'div'>) {
  const { orientation } = useCarousel();

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        className
      )}
      {...props}
    />
  );
}

function CarouselPrevious({
  className,
  variant = 'outline',
  size = 'icon',
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn(
        'absolute size-8 rounded-full',
        orientation === 'horizontal'
          ? 'top-1/2 -left-12 -translate-y-1/2'
          : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
}

function CarouselNext({
  className,
  variant = 'outline',
  size = 'icon',
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn(
        'absolute size-8 rounded-full',
        orientation === 'horizontal'
          ? 'top-1/2 -right-12 -translate-y-1/2'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight />
      <span className="sr-only">Next slide</span>
    </Button>
  );
}

// function CarouselDots({
//   className,
//   renderDot,
//   ...props
// }: React.ComponentProps<'div'> & {
//   renderDot?: (index: number, isActive: boolean, goTo: () => void) => React.ReactNode;
// }) {
//   const { api } = useCarousel();
//   const [current, setCurrent] = React.useState(0);
//   const [slideCount, setSlideCount] = React.useState(0);

//   const recalc = React.useCallback(() => {
//     if (!api) return;

//     const totalSlides = api.scrollSnapList().length;
//     setSlideCount(totalSlides);

//     const selectedIndex = api.selectedScrollSnap();
//     setCurrent(selectedIndex);
//   }, [api]);

//   React.useEffect(() => {
//     if (!api) return;
//     recalc();
//     api.on('reInit', recalc);
//     api.on('select', recalc);

//     return () => {
//       api.off('reInit', recalc);
//       api.off('select', recalc);
//     };
//   }, [api, recalc]);

//   if (slideCount === 0) return null;

//   return (
//     <div
//       className={cn('mt-2 flex justify-center gap-2.5', className)}
//       data-slot="carousel-dots"
//       {...props}
//     >
//       {Array.from({ length: slideCount }).map((_, index) => {
//         const isActive = current === index;
//         const goTo = () => api?.scrollTo(index);

//         return renderDot ? (
//           renderDot(index, isActive, goTo)
//         ) : (
//           <button
//             key={index}
//             aria-label={`Ir al slide ${index + 1}`}
//             aria-current={isActive}
//             onClick={goTo}
//             className={cn(
//               'h-2.5 w-2.5 rounded-full transition-all duration-200',
//               isActive
//                 ? 'bg-darysa-verde-oscuro w-[34px]'
//                 : 'bg-darysa-gris-claro-alt hover:bg-darysa-gris-claro cursor-pointer'
//             )}
//           />
//         );
//       })}
//     </div>
//   );
// }

function CarouselDots({
  className,
  renderDot,
  groupSize = 6,
  byGroup = false, // nuevo booleano
  ...props
}: React.ComponentProps<'div'> & {
  renderDot?: (index: number, isActive: boolean, goTo: () => void) => React.ReactNode;
  groupSize?: number;
  byGroup?: boolean;
}) {
  const { api } = useCarousel();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const recalc = React.useCallback(() => {
    if (!api) return;

    const totalSlides = api.scrollSnapList().length;

    if (byGroup) {
      const totalGroups = Math.ceil(totalSlides / groupSize);
      setCount(totalGroups);
      const selectedIndex = api.selectedScrollSnap();
      setCurrent(Math.floor(selectedIndex / groupSize));
    } else {
      setCount(totalSlides);
      setCurrent(api.selectedScrollSnap());
    }
  }, [api, groupSize, byGroup]);

  React.useEffect(() => {
    if (!api) return;
    recalc();
    api.on('reInit', recalc);
    api.on('select', recalc);

    return () => {
      api.off('reInit', recalc);
      api.off('select', recalc);
    };
  }, [api, recalc]);

  if (count === 0) return null;

  return (
    <div className={cn('flex items-center justify-center gap-2.5', className)} {...props}>
      {Array.from({ length: count }).map((_, index) => {
        const isActive = current === index;
        const goTo = () => (byGroup ? api?.scrollTo(index * groupSize) : api?.scrollTo(index));

        return renderDot ? (
          renderDot(index, isActive, goTo)
        ) : (
          <button
            key={index}
            aria-label={byGroup ? `Ir al grupo ${index + 1}` : `Ir al slide ${index + 1}`}
            aria-current={isActive}
            onClick={goTo}
            className={cn(
              'h-2.5 w-2.5 rounded-full transition-all duration-200',
              isActive
                ? 'bg-darysa-verde-oscuro w-[34px]'
                : 'bg-darysa-gris-claro-alt hover:bg-darysa-gris-claro cursor-pointer'
            )}
          />
        );
      })}
    </div>
  );
}

export {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
};
