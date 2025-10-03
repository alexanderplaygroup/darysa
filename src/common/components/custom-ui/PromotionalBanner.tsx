import { AppImage } from '@/common/components/custom-ui/AppImage';
import clsx from 'clsx'; // para combinar clases fácilmente

export interface BannerPromotional {
  mobile: string;
  desktop: string;
  link?: string;
}

interface PromotionalBannerProps {
  banner: BannerPromotional;
  className?: string; // ✅ prop opcional para personalizar estilos
}

export const PromotionalBanner = ({ banner, className }: PromotionalBannerProps) => {
  if (!banner || !banner.desktop || !banner.mobile) {
    return null;
  }

  const ImageContent = (
    <picture className={clsx('relative block aspect-[16/2] w-full', className)}>
      <source media="(max-width: 768px)" srcSet={banner.mobile} />
      <AppImage src={banner.desktop} alt="Promotional Image" fill sizes="100vw" />
    </picture>
  );

  return banner.link ? (
    <a href={banner.link} target="_blank" rel="noopener noreferrer" className="h-full w-full">
      {ImageContent}
    </a>
  ) : (
    ImageContent
  );
};
