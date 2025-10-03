import { AppBreadcrumb, BreadcrumbItemType } from '@/common/components/custom-ui/AppBreadcrumb';
import { Container } from '@/common/components/custom-ui/Container';

const breadcrumbItems: BreadcrumbItemType[] = [
  { label: 'Home', href: '/' },
  { label: 'Política Anticorrupción y Antisoborno', isCurrent: true },
];
export const PrivacyPolicyView = () => {
  return (
    <Container>
      <div className="mb-8 space-y-4">
        <AppBreadcrumb items={breadcrumbItems} />
        <h1 className="text-darysa-verde-oscuro text-4xl font-bold">
          Política Anticorrupción y Antisoborno
        </h1>{' '}
      </div>
      <div className="text-justify" dangerouslySetInnerHTML={{ __html: `'asdasdsadasd'` }} />
    </Container>
  );
};
