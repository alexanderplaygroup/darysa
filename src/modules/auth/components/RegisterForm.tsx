'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff, Lock } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/common/components/shadcn-ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/common/components/shadcn-ui/form';
import { Input } from '@/common/components/shadcn-ui/input';

const registerSchema = z
  .object({
    fullName: z.string().min(1, 'El nombre completo es obligatorio'),
    email: z.email({ message: 'Ingrese un email válido' }),
    password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
    confirmPassword: z.string().min(6, 'Debe repetir la contraseña'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Las contraseñas no coinciden',
  });

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const handleGoogleSignIn = () => {
    console.log('Google sign-in clicked');
  };

  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    console.log('Register attempt:', values);
  };

  return (
    <div className="border-darysa-gris-claro-alt/60 rounded-xl border bg-white p-8 shadow-lg md:p-12">
      <h2 className="text-darysa-gris-medio-alt mb-8 text-xl font-semibold">
        Registrarme con e-mail y contraseña
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4.5">
          {/* Nombre Completo */}
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-darysa-gris-medio-alt font-semibold">
                  Nombre Completo <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Escribe tu nombre completo"
                    className="placeholder:text-darysa-gris-medio-alt-2 h-12 rounded-sm text-base"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-darysa-gris-medio-alt font-semibold">
                  Email <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="Escribe tu correo"
                    className="placeholder:text-darysa-gris-medio-alt-2 h-12 rounded-sm text-base"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-darysa-gris-medio-alt font-semibold">
                  Contraseña <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Contraseña"
                      className="placeholder:text-darysa-gris-medio-alt-2 h-12 pr-12 text-base"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2"
                      aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Confirm Password */}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-darysa-gris-medio-alt font-semibold">
                  Repetir Contraseña <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Repite tu contraseña"
                      className="placeholder:text-darysa-gris-medio-alt-2 h-12 pr-12 text-base"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2"
                      aria-label={showConfirmPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Link recuperar contraseña */}
          <div className="mb-6.5">
            <Link
              href="/recuperar-contrasena"
              className="text-darysa-gris-medio-alt-2 hover:text-foreground text-sm hover:underline"
            >
              Olvidaste tu contraseña?
            </Link>
          </div>

          {/* Botón principal */}
          <Button
            type="submit"
            className="bg-darysa-gris-oscuro h-12 w-full rounded-sm text-base font-semibold text-white hover:bg-[#1a1a1a]"
          >
            Registrarme
          </Button>
        </form>
      </Form>

      {/* Divider */}
      <div className="mt-10 mb-4">
        <p className="text-foreground text-base">Puedes iniciar sesión también con:</p>
      </div>

      {/* Google Sign-In */}
      <Button
        type="button"
        variant="outline"
        onClick={handleGoogleSignIn}
        className="border-darysa-gris-oscuro h-14 w-full rounded-sm border bg-transparent text-base font-semibold hover:bg-gray-50"
      >
        <svg className="mr-3 h-5 w-5" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
        Inicia Sesión con Google
      </Button>

      {/* Botón adicional */}
      <Button
        type="button"
        variant="outline"
        className="border-darysa-gris-oscuro mt-3 h-14 w-full rounded-sm border bg-transparent text-base font-semibold hover:bg-gray-50"
        asChild
      >
        <Link href="/login" className="flex items-center gap-2.5">
          <Lock />
          Inicia Sesión con Contraseña
        </Link>
      </Button>
    </div>
  );
}
