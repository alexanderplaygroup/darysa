import { Container } from '@/common/components/custom-ui/Container';
import { Banner } from './Banner';
import { PromotionalModal } from './components/PromotionalModal';
import { CarouselBrand } from './components/brands/CarouselBrands';

export const HomeView = () => {
  return (
    <>
      <Container size="full" className="px-0 py-0">
        <Banner />
      </Container>
      <Container className="space-y-8">
        <h3 className="text-darysa-gris-oscuro text-4xl font-bold">Marcas Aliadas</h3>
        <CarouselBrand />
      </Container>
      <PromotionalModal modal="/logo-dark.svg" />
    </>
  );
};
