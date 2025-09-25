import { Heart, MapPin, Menu, Search, ShoppingCart, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../shadcn-ui/button';
import { Input } from '../../shadcn-ui/input';

export const Header = () => {
  return (
    <header className="sticky top-0 w-full bg-white shadow-md">
      <div className="mx-auto max-w-[1440px] space-y-6 py-4">
        <div className="w-full">
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/logo-light.svg"
                alt="Darysa"
                width={201}
                height={44}
                className="object-cover"
              />
            </Link>

            <div className="flex w-full max-w-[652px] items-center gap-2">
              <Input
                placeholder="Buscar"
                className="h-12 w-full rounded-md border-none bg-[#0000000A] p-4 focus-visible:ring-0"
              />
              <span className="bg-darysa-verde flex aspect-square size-12 items-center justify-center rounded-md">
                <Search className="text-white" />
              </span>
            </div>

            <div className="flex items-center gap-10">
              <Heart className="size-8" />
              <ShoppingCart className="size-8" />
              <User className="size-8" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Button className="bg-darysa-gris-oscuro flex h-12 items-center gap-2.5 rounded-md !px-6 text-base">
              <Menu className="size-6" />
              Todas las Categorías
            </Button>
            <nav aria-label="Main navigation">
              <ul className="flex items-center gap-10">
                <li>
                  <Link
                    href="/"
                    className="hover:text-darysa-amarillo text-darysa-gris-medio text-base transition-colors"
                  >
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    href="/productos"
                    className="hover:text-darysa-amarillo text-darysa-gris-medio text-base transition-colors"
                  >
                    Distribuidores
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nosotros"
                    className="hover:text-darysa-amarillo text-darysa-gris-medio text-base transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacto"
                    className="hover:text-darysa-amarillo text-darysa-gris-medio text-base transition-colors"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <p className="text-darysa-gris-oscuro-alt flex items-center gap-3 text-sm font-normal">
            <MapPin className="size-6 text-black" />
            Dirección de usuario a registrarse
          </p>
        </div>
      </div>
    </header>
  );
};
