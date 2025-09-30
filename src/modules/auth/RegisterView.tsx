import { AppBreadcrumb, BreadcrumbItemType } from '@/common/components/custom-ui/AppBreadcrumb';
import { AppImage } from '@/common/components/custom-ui/AppImage';
import { Container } from '@/common/components/custom-ui/Container';
import { RegisterForm } from './components/RegisterForm';

const breadcrumbItems: BreadcrumbItemType[] = [
  { label: 'Home', href: '/' },
  { label: 'Registrarme', isCurrent: true },
];

export const RegisterView = () => {
  return (
    <Container>
      <div className="mb-8 space-y-4">
        <AppBreadcrumb items={breadcrumbItems} />
        <h1 className="text-darysa-verde-oscuro text-4xl font-bold">Registrarme</h1>
      </div>
      <div className="grid w-full grid-cols-2 items-start justify-between gap-28">
        <RegisterForm />

        <div className="relative ml-auto aspect-square w-full">
          <AppImage
            src="/home/bannerHome.png"
            alt="Pantalla de inicio de sesión"
            fill
            sizes="(max-width: 768px) 100vw, 50vw" // mobile: 100%, desktop: 50%
            className="rounded-xl"
          />
        </div>
      </div>
    </Container>
  );
};
