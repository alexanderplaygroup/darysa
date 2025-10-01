// import { Container } from "@/components/Container"

import { AppImage } from '@/common/components/custom-ui/AppImage';
import { BannerPromotional } from '../interfaces';

interface PromotionalBannerProps {
  banner: BannerPromotional;
}

export const PromotionalBanner = ({ banner }: PromotionalBannerProps) => {
  if (!banner || !banner.desktop || !banner.mobile) {
    return null;
  }
  const ImageContent = (
    <picture className="relative block aspect-[16/2] w-full">
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
