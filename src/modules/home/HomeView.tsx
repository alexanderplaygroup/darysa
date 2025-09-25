import { Container } from '@/common/components/custom-ui/Container';
import { PromotionalModal } from './components/PromotionalModal';
import HomeBanner from './HomeBanner';

export const HomeView = () => {
  return (
    <Container>
      <HomeBanner />
      <PromotionalModal modal="/logo-dark.svg" />
    </Container>
  );
};
