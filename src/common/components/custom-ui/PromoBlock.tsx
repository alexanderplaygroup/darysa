import { AppImage } from '@/common/components/custom-ui/AppImage';

interface PromoItem {
  id: number;
  src: string;
  alt?: string;
  link?: string;
}

interface PromoBlockProps {
  item?: PromoItem;
  className?: string;
  aspect: string;
}

export const PromoBlock = ({ item, className, aspect }: PromoBlockProps) => {
  if (!item) return null;

  const ImageContent = (
    <AppImage src={item.src} alt={item.alt || 'Promo'} fill className="object-cover" />
  );

  const Wrapper = item.link ? 'a' : 'div';

  return (
    <Wrapper
      {...(item.link ? { href: item.link, target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`relative block ${aspect} overflow-hidden rounded-lg ${className || ''}`}
    >
      {ImageContent}
    </Wrapper>
  );
};
