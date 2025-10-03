'use client';
import { Container } from '@/common/components/custom-ui/Container';
import { ProductCard } from '@/common/components/custom-ui/product/productCard';
import { PromoBlock } from '@/common/components/custom-ui/PromoBlock';
import { PromotionalBanner } from '@/common/components/custom-ui/PromotionalBanner';
import { Button } from '@/common/components/shadcn-ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/common/components/shadcn-ui/select';
import { cn } from '@/lib/utils';
import { products } from '../home/data';
import { promoBanner } from './data';
import { useSidebarStore } from './store/useSidebarProducts';

export const ProductsView = () => {
  const { isOpen, toggleSidebar } = useSidebarStore();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const promoItem: any = {
    id: 1,
    src: '/product/promotionHeight.png', // Imagen de prueba
    alt: 'Promoción Especial',
    link: 'https://www.example.com/promo', // opcional, si quieres que sea clickeable
  };

  return (
    <>
      <Container size="full" className="relative px-0 pt-0 pb-8">
        <PromotionalBanner
          className="aspect-[16/4] h-[250px] lg:aspect-[16/2]"
          banner={promoBanner}
        />
      </Container>
      <Container className="pt-0">
        <div className="mb-8 flex items-center justify-between gap-4">
          <Button
            variant="outline"
            className={cn(
              'hover:bg-darysa-verde-oscuro h-14 gap-3 rounded-lg !px-4.5 text-base font-semibold transition-colors duration-300 ease-in-out hover:text-white',
              isOpen
                ? '!bg-darysa-verde-oscuro border-darysa-verde-oscuro !text-white'
                : 'text-darysa-verde-oscuro border-darysa-verde-oscuro bg-transparent'
            )}
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-6"
            >
              <path d="M21 5H3" />
              <path d="M17 12H7" />
              <path d="M19 19H5" />
            </svg>
            Categorías de Productos
          </Button>

          <Select>
            <SelectTrigger className="!border-darysa-gris-claro-alt/50 !text-darysa-gris-medio-alt-3/80 !h-14 w-[250px] px-4.5 font-semibold">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price-high">Por: Precio de mayor a menor</SelectItem>
              <SelectItem value="price-low">Por: Precio de menor a mayor</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="relative grid grid-cols-4 gap-6">
          {/* Sidebar */}
          {isOpen && (
            <div className="z-10 col-span-1 row-span-full border-r border-gray-200 bg-white p-4 shadow-lg">
              <h3 className="mb-4 text-lg font-semibold">Categorías</h3>
              <ul className="flex flex-col gap-2">
                <li>Electrónica</li>
                <li>Hogar</li>
                <li>Ropa</li>
                <li>Deportes</li>
                <li>Ofertas</li>
              </ul>
            </div>
          )}

          {/* Productos y PromoBlock */}
          <div
            className={cn(
              'grid gap-6',
              isOpen ? 'col-span-3 col-start-2 grid-cols-[1fr_1fr_1fr]' : 'col-span-4 grid-cols-4'
            )}
          >
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

            {promoItem && (
              <div
                className={cn(
                  'row-span-2 row-start-2 h-full w-full',
                  isOpen ? 'col-start-3' : 'col-start-4'
                )}
              >
                <PromoBlock item={promoItem} aspect="h-full w-full" />
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};
