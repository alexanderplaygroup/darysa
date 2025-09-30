import { AppBreadcrumb, BreadcrumbItemType } from '@/common/components/custom-ui/AppBreadcrumb';
import { AppImage } from '@/common/components/custom-ui/AppImage';
import { Container } from '@/common/components/custom-ui/Container';
import { LoginForm } from './components/LoginForm';

const breadcrumbItems: BreadcrumbItemType[] = [
  { label: 'Home', href: '/' },
  { label: 'Iniciar Sesión', isCurrent: true },
];

export const LoginView = () => {
  return (
    <Container>
      <div className="mb-8 space-y-4">
        <AppBreadcrumb items={breadcrumbItems} />
        <h1 className="text-darysa-verde-oscuro text-4xl font-bold">Iniciar Sesión</h1>
      </div>
      <div className="grid w-full grid-cols-2 items-stretch justify-between">
        <LoginForm />

        <AppImage
          src="/auth/placeholderLogin.png"
          alt="Pantalla de inicio de sesión"
          className="ml-auto h-auto w-auto rounded-xl"
          width={587}
          height={568}
        />
      </div>
    </Container>
  );
};
