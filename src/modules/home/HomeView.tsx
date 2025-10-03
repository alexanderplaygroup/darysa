'use client';
import { Container } from '@/common/components/custom-ui/Container';
import { ProductCard } from '@/common/components/custom-ui/product/productCard';
import { PromotionalBanner } from '@/common/components/custom-ui/PromotionalBanner';
import { Skeleton } from '@/common/components/shadcn-ui/skeleton';
import { CreditCard, Headset, Shield, Truck } from 'lucide-react';
import dynamic from 'next/dynamic';
import { BenefitsSection } from './components/BenefitsSection';
import { Banner } from './components/carousel-banner/Banner';
import CarouselBlogs from './components/CarouselBlogs';
import CarouselPacks from './components/CarouselPacks';
import { PromotionalGrid } from './components/PromotionalGrid';
import { PromotionalModal } from './components/PromotionalModal';
import { products, promoBanner, promoItems } from './data';
import { BenefitItems } from './type';

const CarouselBrands = dynamic(() => import('./components/CarouselBrands'), {
  ssr: false,
  loading: () => <Skeleton className="aspect-[16/3] h-[136px] w-full rounded-xl" />,
});

export const HomeView = () => {
  const benefitsData: BenefitItems = {
    first: { title: 'Hasta 5 años de garantía', icon: <Shield className="size-15" /> },
    second: { title: 'Envíos a Todo el perú', icon: <Truck className="size-15" /> },
    third: { title: 'Atención las 24 horas', icon: <CreditCard className="size-15" /> },
    fourth: { title: 'Pagos 100% seguros', icon: <Headset className="size-15" /> },
  };
  return (
    <>
      <Container size="full" className="px-0 py-0">
        <Banner />
      </Container>

      <Container className="space-y-8">
        <h3 className="text-darysa-gris-oscuro text-4xl font-bold">Marcas Aliadas</h3>
        <div className="aspect-[16/3] h-[136px] w-full">
          <CarouselBrands />
        </div>
      </Container>

      <Container className="space-y-8 pt-0">
        <h3 className="text-darysa-gris-oscuro text-4xl font-bold">Los más vendidos</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
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
          ))}
        </div>
      </Container>

      <Container size="full" className="relative pt-0">
        <PromotionalBanner banner={promoBanner} />
      </Container>

      <Container className="pt-0">
        <PromotionalGrid items={promoItems} />
      </Container>

      <Container className="pt-0">
        <BenefitsSection items={benefitsData} />
      </Container>

      <Container className="space-y-8 pt-0">
        <CarouselPacks />
      </Container>
      <Container className="space-y-8 pt-0">
        <CarouselBlogs />
      </Container>
      <PromotionalModal modal="/logo-dark.svg" />
    </>
  );
};
