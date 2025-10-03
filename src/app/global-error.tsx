'use client';

import { AlertTriangle, RefreshCcw } from 'lucide-react';
import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[v0] Global error boundary caught:', error);
  }, [error]);

  return (
    <html lang="es">
      <body className="bg-black font-sans text-white antialiased">
        <div className="flex min-h-screen items-center justify-center p-4">
          <div className="w-full max-w-2xl">
            {/* Error Icon */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 animate-pulse rounded-full bg-yellow-400/20 blur-3xl" />
                <div className="relative rounded-full border border-yellow-400/30 bg-yellow-900/40 p-6">
                  <AlertTriangle className="h-16 w-16 text-yellow-400" />
                </div>
              </div>
            </div>

            {/* Error Content */}
            <div className="space-y-6 text-center">
              <div className="space-y-3">
                <h1 className="text-4xl font-bold text-balance text-white md:text-6xl">
                  Ha ocurrido un problema
                </h1>
                <p className="mx-auto max-w-lg text-lg leading-relaxed text-pretty text-gray-400">
                  Algo salió mal y necesitamos reiniciar la aplicación. Estamos trabajando para
                  solucionarlo lo antes posible.
                </p>
              </div>

              {/* Error Details (solo en development) */}
              {process.env.NODE_ENV === 'development' && (
                <div className="mt-8 rounded-lg border border-gray-800 bg-gray-900/50 p-4 text-left">
                  <p className="mb-2 font-mono text-sm text-gray-500">Detalles del error global:</p>
                  <p className="font-mono text-sm break-all text-gray-300">{error.message}</p>
                  {error.digest && (
                    <p className="mt-2 font-mono text-xs text-gray-600">Digest: {error.digest}</p>
                  )}
                  {error.stack && (
                    <details className="mt-4">
                      <summary className="cursor-pointer font-mono text-xs text-gray-500 hover:text-gray-400">
                        Stack Trace
                      </summary>
                      <pre className="mt-2 overflow-x-auto font-mono text-xs whitespace-pre-wrap text-gray-400">
                        {error.stack}
                      </pre>
                    </details>
                  )}
                </div>
              )}

              {/* Action Button */}
              <div className="flex justify-center pt-4">
                <button
                  onClick={reset}
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-black transition-colors duration-200 hover:bg-gray-200"
                >
                  <RefreshCcw className="h-4 w-4" />
                  Reiniciar aplicación
                </button>
              </div>

              {/* Help Info */}
              <div className="space-y-2 pt-8">
                <p className="text-sm text-gray-500">Si el problema continúa, puedes intentar:</p>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• Refrescar la página (Ctrl/Cmd + R)</li>
                  <li>• Limpiar la caché del navegador</li>
                  <li>• Verificar tu conexión a internet</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
