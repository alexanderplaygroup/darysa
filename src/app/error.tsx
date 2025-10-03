'use client';

import { Button } from '@/common/components/shadcn-ui/button';
import { AlertCircle, Home, RefreshCcw } from 'lucide-react';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[v0] Error boundary caught:', error);
  }, [error]);

  return (
    <div className="bg-background flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Error Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="bg-destructive/20 absolute inset-0 rounded-full blur-3xl" />
            <div className="bg-destructive/10 border-destructive/20 relative rounded-full border p-6">
              <AlertCircle className="text-destructive h-16 w-16" />
            </div>
          </div>
        </div>

        {/* Error Content */}
        <div className="space-y-6 text-center">
          <div className="space-y-3">
            <h1 className="text-foreground text-4xl font-bold text-balance md:text-5xl">
              Algo salió mal
            </h1>
            <p className="text-muted-foreground mx-auto max-w-lg text-lg text-pretty">
              Lo sentimos, hemos encontrado un error inesperado. Nuestro equipo ha sido notificado y
              estamos trabajando en solucionarlo.
            </p>
          </div>

          {/* Error Details (Development) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="bg-muted/50 border-border mt-8 rounded-lg border p-4 text-left">
              <p className="text-muted-foreground mb-2 font-mono text-sm">Error Details:</p>
              <p className="text-foreground font-mono text-sm break-all">{error.message}</p>
              {error.digest && (
                <p className="text-muted-foreground mt-2 font-mono text-xs">
                  Digest: {error.digest}
                </p>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col items-center justify-center gap-3 pt-4 sm:flex-row">
            <Button onClick={reset} size="lg" className="min-w-[160px] gap-2">
              <RefreshCcw className="h-4 w-4" />
              Intentar de nuevo
            </Button>
            <Button
              onClick={() => (window.location.href = '/')}
              variant="outline"
              size="lg"
              className="min-w-[160px] gap-2"
            >
              <Home className="h-4 w-4" />
              Ir al inicio
            </Button>
          </div>

          {/* Help Text */}
          <p className="text-muted-foreground pt-8 text-sm">
            Si el problema persiste, por favor{' '}
            <a
              href="/contacto"
              className="text-foreground hover:text-primary underline underline-offset-4 transition-colors"
            >
              contáctanos
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
