'use client';
import { Container } from '@/common/components/custom-ui/Container';
import { ProductCard } from '@/common/components/custom-ui/product/productCard';
import { Skeleton } from '@/common/components/shadcn-ui/skeleton';
import dynamic from 'next/dynamic';
import { Banner } from './Banner';
import { PromotionalModal } from './components/PromotionalModal';

const CarouselBrands = dynamic(() => import('./components/brands/CarouselBrands'), {
  ssr: false,
  loading: () => <Skeleton className="aspect-[16/3] h-[136px] w-full rounded-xl" />,
});

export const HomeView = () => {
  // Datos de prueba
  const products = [
    {
      id: 1,
      image: '/product/product.png',
      name: 'Lejía 5% Daryza x 3.8L',
      sku: '123456789',
      brand: 'Daryza',
      price: 15,
      discount: 10,
    },
    {
      id: 2,
      image: '/product/product2.png',
      name: 'Detergente Líquido Daryza x 2L',
      sku: '987654321',
      brand: 'Daryza',
      price: 20,
      discount: 15,
    },
    {
      id: 3,
      image: '/product/product3.png',
      name: 'Limpiador Multiusos Daryza x 1L',
      sku: '456789123',
      brand: 'Daryza',
      price: 12.5,
      discount: 0,
    },
    {
      id: 4,
      image: '/product/product2.png',
      name: 'Detergente Líquido Daryza x 2L',
      sku: '987654321',
      brand: 'Daryza',
      price: 20,
      discount: 15,
    },
    {
      id: 5,
      image: '/product/product3.png',
      name: 'Limpiador Multiusos Daryza x 1L',
      sku: '456789123',
      brand: 'Daryza',
      price: 12.5,
      discount: 0,
    },
  ];
  return (
    <>
      <Container size="full" className="px-0 py-0">
        <Banner />
      </Container>
      <Container className="relative space-y-8">
        <h3 className="text-darysa-gris-oscuro text-4xl font-bold">Marcas Aliadas</h3>
        <div className="aspect-[16/3] h-[136px] w-full">
          <CarouselBrands />
        </div>
      </Container>
      <Container className="relative space-y-8 pt-0">
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
        </div>{' '}
      </Container>

      <PromotionalModal modal="/logo-dark.svg" />
    </>
  );
};
