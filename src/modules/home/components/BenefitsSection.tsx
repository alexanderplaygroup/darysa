import { cn } from '@/lib/utils';
import { BenefitItems } from '../type';

type BenefitsSectionProps = {
  items: BenefitItems;
  className?: string;
};

export function BenefitsSection({ items, className }: BenefitsSectionProps) {
  return (
    <div className={cn('grid gap-6 sm:grid-cols-2 lg:grid-cols-4', className)}>
      <div className="bg-darysa-verde-oscuro flex items-center justify-center gap-6 rounded-sm border p-6">
        <div className="text-start text-4xl text-white">{items.first.icon}</div>
        <h3 className="text-2xl leading-none font-bold text-white">{items.first.title}</h3>
      </div>

      <div className="bg-darysa-gris-oscuro-alt-2 flex items-center justify-center gap-6 rounded-sm border p-6">
        <div className="text-start text-4xl text-white">{items.second.icon}</div>
        <h3 className="text-2xl leading-none font-bold text-white">{items.second.title}</h3>
      </div>

      <div className="bg-darysa-verde-oscuro flex items-center justify-center gap-6 rounded-sm border p-6">
        <div className="text-start text-4xl text-white">{items.third.icon}</div>
        <h3 className="text-2xl leading-none font-bold text-white">{items.third.title}</h3>
      </div>

      <div className="bg-darysa-gris-oscuro-alt-2 flex items-center justify-center gap-6 rounded-sm border p-6">
        <div className="text-start text-4xl text-white">{items.fourth.icon}</div>
        <h3 className="text-2xl leading-none font-bold text-white">{items.fourth.title}</h3>
      </div>
    </div>
  );
}
