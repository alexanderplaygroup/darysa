import { socialIcons } from '@/common/data/social';
import { Mail, PhoneCall } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../custom-ui/Container';

export const Footer = () => {
  const footerSections = [
    {
      title: 'Información',
      links: [
        { name: 'Acerca de Nosotros', href: '#mentions' },
        { name: 'Términos y Condiciones', href: '#confidentialite' },
        { name: 'Trabaja con Nosotros', href: '#conditions' },
        { name: 'Mi Cuenta', href: '#cookies' },
      ],
    },
    {
      title: 'Ayuda',
      links: [
        { name: 'Contacto', href: '#voi' },
        { name: 'Libro de Reclamaciones', href: '#voi-system' },
        { name: 'Servicio al Cliente', href: '#solutions' },
        { name: 'Política Anticorrupción y Antisoborno', href: '#innovation' },
      ],
    },
  ];

  const paymentMethods = [
    { src: '/pays/Method=ApplePay.png', alt: 'Apple Pay' },
    { src: '/pays/Method=Visa.png', alt: 'Visa' },
    { src: '/pays/Method=Discover.png', alt: 'Discover' },
    { src: '/pays/Method=Mastercard.png', alt: 'Mastercard' },
    { src: '/pays/Cart.png', alt: 'Cart' },
  ];

  return (
    <footer className="bg-darysa-gris-oscuro">
      <Container className="pt-16 pb-6">
        <div className="mb-14 grid grid-cols-[0.6fr_1.4fr]">
          {/* Logo and Contact */}
          <div className="space-y-10">
            <Image
              src="/logo-dark.svg"
              alt="logo"
              className="object-cover"
              width={247}
              height={54}
            />
            <dl className="text-darysa-gris-claro space-y-2">
              <dt className="sr-only">Teléfono:</dt>
              <dd className="flex items-center gap-2">
                <PhoneCall className="size-5" />
                +51 (01) 315 3600
              </dd>
              <dt className="sr-only">Email:</dt>
              <dd className="flex items-center gap-2">
                <Mail className="size-5" /> webmaster@daryza.com
              </dd>
            </dl>
          </div>

          <div className="flex w-full items-start justify-between gap-10">
            <section aria-labelledby="office-info">
              <h3 id="office-info" className="mb-6 text-xl font-bold text-white">
                Oficina Central
              </h3>
              <address className="text-darysa-gris-claro mb-4 space-y-0.5 not-italic">
                <p>Granja 1 - Alt Km. 30</p>
                <p>Antigua Panamericana Sur, Lurín</p>
              </address>

              <p className="mb-2.5 text-base font-semibold text-white">Horario de Atención</p>
              <dl className="text-darysa-gris-claro space-y-0.5">
                <div className="flex items-center gap-2">
                  <dt>L-V:</dt>
                  <dd>8:00 AM – 5:00 PM</dd>
                </div>
                <div className="flex items-center gap-2">
                  <dt>S:</dt>
                  <dd>8:00 AM – 12:00 PM</dd>
                </div>
              </dl>
            </section>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <section key={index}>
                <h3 className="mb-6 text-xl font-bold text-white">{section.title}</h3>
                <ul className="w-full space-y-3.5">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="w-full">
                      <Link
                        href={link.href}
                        className="text-darysa-gris-claro w-full text-end text-base transition-colors hover:text-white"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-[0.6fr_1.4fr] border-t border-white/10 pt-6">
          <div className="flex w-full items-center gap-6">
            {socialIcons.map((icon, idx) => (
              <Image
                key={idx}
                src={icon.src}
                alt={icon.alt}
                className="h-auto w-auto object-cover"
                width={40}
                height={40}
              />
            ))}
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="text-darysa-gris-claro text-sm font-bold">
              © 2012-2024. Daryza S.A.C RUC 20144109458 Todos los derechos reservados
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-2.5">
              {paymentMethods.map((pay, idx) => (
                <Image
                  key={idx}
                  src={pay.src}
                  alt={pay.alt}
                  className="h-auto w-auto object-cover"
                  width={40}
                  height={40}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
