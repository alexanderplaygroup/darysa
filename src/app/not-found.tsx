import { Button } from '@shadcnui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-background flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-2xl space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-primary text-[clamp(6rem,20vw,12rem)] leading-none font-bold tracking-tight">
            404
          </h1>
          <div className="space-y-2">
            <h2 className="text-foreground text-3xl font-semibold text-balance md:text-4xl">
              Página no encontrada{' '}
            </h2>
            <p className="text-muted-foreground mx-auto max-w-md text-lg text-pretty md:text-xl">
              ¡Uy! Parece que la página que buscas no existe. Vamos a volver a la página correcta.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
          <Button asChild size="lg" className="min-w-[160px]">
            <Link href="/">Ir a Inicio</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="min-w-[160px] bg-transparent">
            <Link href="javascript:history.back()">Volver</Link>
          </Button>
        </div>

        <div className="text-muted-foreground pt-8 text-sm">
          <p>
            Si cree que esto es un error, por favor{' '}
            <Link href="/contact" className="text-primary font-medium hover:underline">
              póngase en contacto con el soporte{' '}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
