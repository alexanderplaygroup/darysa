'use client';

import { PromoBlock } from '@/common/components/custom-ui/PromoBlock';

interface PromoItem {
  id: number;
  src: string;
  alt?: string;
  link?: string;
}

interface PromotionalGridProps {
  items: PromoItem[];
}

export const PromotionalGrid = ({ items }: PromotionalGridProps) => {
  return (
    <div className="grid grid-cols-4 gap-6">
      {/* Columna izquierda */}
      <div className="col-span-2 grid grid-cols-2 gap-6">
        {items.slice(0, 4).map((item) => (
          <PromoBlock key={item.id} item={item} aspect="aspect-square" />
        ))}
        <PromoBlock item={items[4]} aspect="col-span-2 aspect-[16/5]" />
      </div>

      {/* Columna central */}
      <div className="col-span-1 flex flex-col gap-6">
        {items.slice(5, 7).map((item) => (
          <PromoBlock key={item.id} item={item} aspect="aspect-[3/4] h-full" />
        ))}
      </div>

      {/* Columna derecha */}
      <div className="col-span-1">
        <PromoBlock item={items[7]} aspect="h-full w-full" />
      </div>
    </div>
  );
};
