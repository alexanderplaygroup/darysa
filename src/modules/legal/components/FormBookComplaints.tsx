'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@shadcnui/button';
import { Checkbox } from '@shadcnui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@shadcnui/form';
import { Input } from '@shadcnui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@shadcnui/select';
import { Textarea } from '@shadcnui/textarea';
import { format } from 'date-fns';
import { Loader2 } from 'lucide-react';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { BookComplaints } from '../interfaces';

const formSchema = z.object({
  name: z.string().min(1, 'El nombre es obligatorio'),
  email: z.email('El correo electrónico no es válido'),
  document_type_id: z.string().min(1, 'El tipo de documento es obligatorio'),
  document_number: z.string().min(1, 'El número de documento es obligatorio'),
  address: z.string().min(1, 'La dirección es obligatoria'),
  district: z.string().min(1, 'El distrito es obligatorio'),
  phone_number: z.string().min(1, 'El número de celular es obligatorio'),
  well_hired_id: z.string().min(1, 'El bien contratado es obligatorio'),
  type_of_service_id: z.string().min(1, 'El tipo de servicio es obligatorio'),
  type_of_claim_id: z.string().min(1, 'El tipo de reclamo o queja es obligatorio'),
  description: z.string().min(1, 'La descripción es obligatoria'),
  terms_conditions: z.boolean().refine((val) => val === true, {
    message: 'Debes aceptar los términos y condiciones',
  }),
  file_attached: z.instanceof(File).nullable(),
});

const INITIAL_STATE = {
  name: '',
  email: '',
  document_type_id: '',
  document_number: '',
  address: '',
  district: '',
  phone_number: '',
  well_hired_id: '',
  type_of_service_id: '',
  type_of_claim_id: '',
  description: '',
  terms_conditions: false,
  file_attached: null, // 👈 ahora es null en vez de File vacío
};

interface DataProps {
  data: BookComplaints; // Puedes tiparlo mejor según la estructura de tus textos
}
export const FormBookComplaints: React.FC<DataProps> = ({ data }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const {
    queja = 'Queja no disponible',
    reclamo = 'Reclamo no disponible',
    subtitle = 'Subtítulo no disponible',
    paragraph = '<p>Contenido no disponible</p>',
  } = data;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: INITIAL_STATE,
    mode: 'onSubmit',
  });

  const onSubmit = async (formData: z.infer<typeof formSchema>) => {
    try {
      setIsSubmitting(true);

      // Creamos FormData para enviar todos los campos + archivo
      const formBody = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        // Si es boolean, lo convertimos a "1" o "0"
        if (typeof value === 'boolean') {
          formBody.append(key, value ? '1' : '0');
        }
        // Si es File, lo agregamos solo si existe
        else if (value instanceof File) {
          formBody.append(key, value);
        }
        // Otros valores de texto
        else if (value !== null && value !== undefined) {
          formBody.append(key, String(value));
        }
      });

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/pages/legal-information/complaints-book`,
        {
          method: 'POST',
          body: formBody,
        }
      );

      const result = await response.json();
      // console.log("Respuesta del Libro de Reclamaciones:", result);

      if (result.success) {
        toast.success('¡Enviado correctamente!');
        form.reset();
      } else {
        toast.error(result.message || 'Ocurrió un error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error enviando el libro de reclamaciones:', error);
      alert('Error al enviar el formulario. Revisa la consola.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-4 py-2 lg:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="text" placeholder="Nombre y Apellido" {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="email" placeholder="Correo Electrónico" {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 py-2 lg:grid-cols-3">
          <FormField
            control={form.control}
            name="document_type_id"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select {...field} onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full py-6">
                      <SelectValue placeholder="Seleccionar Tipo de Documento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Tipo de Documento</SelectLabel>
                        <SelectItem value="DNI">DNI</SelectItem>
                        <SelectItem value="RUC">RUC</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="document_number"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="text" placeholder="N° de Documento" {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Input
            type="text"
            placeholder="Fecha de Reclamo"
            name="date"
            defaultValue={format(new Date(), 'yyyy-MM-dd')}
            readOnly
          />
        </div>

        <div className="grid grid-cols-1 gap-4 py-2 lg:grid-cols-3">
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="text" placeholder="Dirección" {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="district"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="text" placeholder="Distrito" {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="tel" placeholder="Número de Celular" {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 py-2 lg:grid-cols-2">
          <FormField
            control={form.control}
            name="well_hired_id"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select {...field} onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full py-6">
                      <SelectValue placeholder="Bien Contratado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Bien Contratado</SelectLabel>
                        <SelectItem value="Bien1">Bien 1</SelectItem>
                        <SelectItem value="Bien2">Bien 2</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="type_of_service_id"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select {...field} onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full py-6">
                      <SelectValue placeholder="Tipo de Servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Tipo de Servicio</SelectLabel>
                        <SelectItem value="Servicio1">Servicio 1</SelectItem>
                        <SelectItem value="Servicio2">Servicio 2</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="py-2">
          <p className="">¿Deseas presentar un reclamo o una queja?</p>
        </div>

        <div className="grid grid-cols-1 gap-4 py-2 lg:grid-cols-2">
          <FormField
            control={form.control}
            name="type_of_claim_id"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select {...field} onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full py-6">
                      <SelectValue placeholder="Tipo de Reclamo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Tipo de Reclamo</SelectLabel>
                        <SelectItem value="reclamo">Reclamo</SelectItem>
                        <SelectItem value="queja">Queja</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mt-4 py-2">
          <p>
            <strong>Reclamo:</strong> {reclamo}
          </p>
          <p>
            <strong>Queja:</strong> {queja}
          </p>
        </div>

        <div className="py-2">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Escribe tu mensaje..."
                    className="h-28 w-full resize-none"
                    {...field}
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="py-2">
          <div>
            <strong>{subtitle}</strong>
            <div dangerouslySetInnerHTML={{ __html: paragraph }} />
          </div>
        </div>

        <div className="py-4">
          <div className="flex w-fit items-center">
            <FormField
              control={form.control}
              name="terms_conditions"
              render={({ field }) => (
                <FormItem className="flex items-center">
                  <FormControl>
                    <Checkbox
                      className="border-brand-red data-[state=checked]:bg-brand-red data-[state=checked]:border-brand-red"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      onBlur={field.onBlur}
                      disabled={field.disabled}
                      ref={field.ref}
                      name={field.name}
                    />
                  </FormControl>
                  <FormLabel className="ml-2">Acepto los Términos y Condiciones</FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p className="ml-2 text-sm text-gray-600">
              Declaro haber leído los TÉRMINOS Y CONDICIONES. Declaro que los datos consignados son
              correctos.
            </p>
          </div>
        </div>

        <div className="py-2">
          <p>
            <strong>Adjuntos</strong>
          </p>
          <p className="text-justify">
            Puede incluir a su reclamo o queja un documento con un límite de 20MB, en formato PDF.
          </p>
        </div>

        <FormField
          control={form.control}
          name="file_attached"
          render={({ field }) => (
            <FormItem className="relative my-2 w-fit">
              <FormLabel
                className="border-brand-red hover:bg-brand-red text-brand-red inline-block w-fit cursor-pointer rounded border px-9 py-2 font-semibold transition-colors duration-300 hover:text-white"
                onClick={() => inputRef.current?.click()} // 👈 disparar click
              >
                Subir archivo
              </FormLabel>

              <FormControl>
                <Input
                  ref={inputRef} // 👈 asociamos el ref
                  type="file"
                  id="file-upload"
                  multiple={false}
                  hidden
                  accept="application/pdf"
                  className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                  onChange={(e) => {
                    const file = e.target.files?.[0] ?? null;
                    field.onChange(file); // 👈 guardamos solo el primer archivo o null
                  }}
                />
              </FormControl>
              {field.value && (
                <p className="mb-6 text-sm text-gray-600">
                  Archivo seleccionado: <span className="font-semibold">{field.value.name}</span>
                </p>
              )}
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-center">
          <Button
            variant="destructive"
            size="lg"
            type="submit"
            className="w-full max-w-xs text-xl"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Enviando...
              </>
            ) : (
              'Enviar'
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};
