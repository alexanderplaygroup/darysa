import { AppBreadcrumb, BreadcrumbItemType } from '@/common/components/custom-ui/AppBreadcrumb';
import { Container } from '@/common/components/custom-ui/Container';

const breadcrumbItems: BreadcrumbItemType[] = [
  { label: 'Home', href: '/' },
  { label: 'Términos y Condiciones', isCurrent: true },
];
export const TermsConditionsView = () => {
  return (
    <Container>
      <div className="mb-8 space-y-4">
        <AppBreadcrumb items={breadcrumbItems} />
        <h1 className="text-darysa-verde-oscuro text-4xl font-bold">Términos y Condiciones</h1>{' '}
      </div>
      <div className="text-justify" dangerouslySetInnerHTML={{ __html: `'asdasdsadasd'` }} />
    </Container>
  );
};
