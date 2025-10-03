'use client';
import { formatDiscount, getDiscountedPrice, parseSoles } from '@/common/helpers/product';
import { ProductCardProps } from '@/common/interfaces/product';
import { cn } from '@/lib/utils';
import { BadgePercent, Heart, ShoppingCart } from 'lucide-react';
import { Button } from '../../shadcn-ui/button';
import { AppImage } from '../AppImage';

export const ProductCard = ({
  image,
  name,
  sku,
  brand,
  price,
  discount,
  onAddToCart,
  onToggleFavorite,
}: ProductCardProps) => {
  const discountedPrice = getDiscountedPrice(price, discount);
  const hasDiscount = formatDiscount(discount);
  return (
    <div className="border-darysa-gris-claro-alt/60 w-full max-w-full overflow-hidden rounded-lg border shadow-sm transition-shadow hover:shadow-md">
      {/* Product Image Section */}
      <div className="relative flex aspect-square h-[340px] w-full items-center justify-center bg-gray-50">
        <AppImage src={image} alt={name} fill sizes="340px" />
        {onToggleFavorite && (
          <button
            className="border-darysa-gris-claro-alt/60 absolute top-3 right-3 rounded-full border p-1.5 transition-colors hover:bg-white/80"
            aria-label="Agregar a favoritos"
            onClick={onToggleFavorite}
          >
            <Heart className="h-5 w-5 text-green-600" />
          </button>
        )}
      </div>

      {/* Product Info Section */}
      <div className="relative space-y-3.5">
        <div
          className={cn(
            'bg-darysa-gris-oscuro flex w-fit items-center gap-2.5 rounded-r-md px-3 py-2 text-white',
            !hasDiscount && 'invisible'
          )}
        >
          <BadgePercent className="size-4.5" />
          <span className="font-barlow text-xs font-semibold">Mejor Descuento</span>
        </div>

        <div className="space-y-2 px-4.5 pb-4.5">
          {/* Product Name */}
          <h3 className="text-darysa-gris-oscuro line-clamp-1 text-xl leading-tight font-bold">
            {name}
          </h3>

          {/* Product Subtitle */}
          {(sku || brand) && (
            <p className="text-darysa-gris-medio-alt-3 text-xs">
              {[sku, brand].filter(Boolean).join(' / ')}
            </p>
          )}

          {/* Pricing Section */}
          <div className="flex items-end justify-between pt-1">
            <div className="space-y-2">
              <div className={cn('flex items-center gap-2', !hasDiscount && 'invisible')}>
                <span className="text-darysa-gris-medio-alt-3 text-xs leading-none line-through">
                  {parseSoles(price)}
                </span>
                <span className="bg-darysa-amarillo rounded px-2 py-1 text-xs font-black text-gray-900">
                  -{discount}%
                </span>
              </div>
              <div className="text-darysa-gris-oscuro font-inter text-2xl leading-none font-black">
                {parseSoles(discountedPrice)}
              </div>
            </div>

            {/* Add to Cart Button */}
            {onAddToCart && (
              <Button
                size="icon"
                className="bg-darysa-verde-oscuro size-12 rounded-md text-white hover:bg-green-700"
                aria-label="Agregar al carrito"
                onClick={onAddToCart}
              >
                <ShoppingCart className="size-7" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
