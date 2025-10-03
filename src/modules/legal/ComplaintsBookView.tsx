import { AppBreadcrumb, BreadcrumbItemType } from '@/common/components/custom-ui/AppBreadcrumb';
import { Container } from '@/common/components/custom-ui/Container';
import { FormBookComplaints } from './components/FormBookComplaints';
import { BookComplaints } from './interfaces';

const breadcrumbItems: BreadcrumbItemType[] = [
  { label: 'Home', href: '/' },
  { label: 'Libro de Reclamaciones', isCurrent: true },
];
export const ComplaintsBookView = () => {
  const mockBookComplaint: BookComplaints = {
    title: 'libro de reclemaciones',
    queja: 'Si tiene alguna queja relacionada con nuestros servicios, puede registrarla aquí.',
    reclamo: 'Para reclamos relacionados con facturación o servicio recibido, use este formulario.',
    subtitle: 'Información Importante',
    paragraph: `
    <p>
      Asegúrese de completar todos los campos obligatorios. 
      Su reclamo será procesado dentro de los 5 días hábiles siguientes a su envío.
    </p>
    <ul>
      <li>Campos con * son obligatorios</li>
      <li>Adjunte documentos si es necesario (PDF hasta 20MB)</li>
    </ul>
  `,
  };
  return (
    <Container>
      <div className="mb-8 space-y-4">
        <AppBreadcrumb items={breadcrumbItems} />
        <h1 className="text-darysa-verde-oscuro text-4xl font-bold">Libro de Reclamaciones</h1>{' '}
      </div>
      <FormBookComplaints data={mockBookComplaint} />
    </Container>
  );
};
