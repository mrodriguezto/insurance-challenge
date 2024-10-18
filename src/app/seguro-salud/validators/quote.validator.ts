import { z } from "zod";

export const quoteFormSchema = z.object({
  documentType: z.enum(["DNI", "CE"], {
    required_error: "El tipo de documento es requerido",
  }),
  documentNumber: z
    .string({
      required_error: "El número de documento es requerido",
    })
    .min(8, "El número de documento no puede tener menos de 8 dígitos")
    .max(10, "El número de documento no puede tener más de 10 dígitos"),
  phoneNumber: z
    .string({
      required_error: "El número de teléfono es requerido",
    })
    .length(9, "El número de teléfono debe tener exactamente 9 dígitos")
    .regex(/^9/, "Ingresa un número de teléfono válido"),

  privacyPolicy: z.literal(true, {
    errorMap: () => ({ message: "Debes aceptar la Política de Privacidad" }),
  }),
  commercialUse: z.literal(true, {
    errorMap: () => ({ message: "Debes aceptar la Política de Comunicaciones Comerciales" }),
  }),
});

export type QuoteForm = z.infer<typeof quoteFormSchema>;
