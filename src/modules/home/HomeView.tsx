import { Container } from '@/common/components/custom-ui/Container';
import { Banner } from './Banner';
import { PromotionalModal } from './components/PromotionalModal';

export const HomeView = () => {
  return (
    <Container>
      <Banner />
      <PromotionalModal modal="/logo-dark.svg" />
    </Container>
  );
};
