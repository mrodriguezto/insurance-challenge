"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { quoteFormSchema, type QuoteForm as QuoteFormType } from "../validations/quote.schema";
import { useState } from "react";
import { LoadingButton } from "@/components/ui/loading-button";
import { useUserStore } from "../../../state/user.state";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/configs/routes";

export function QuoteForm() {
  const [isFetchingUser, setIsFetchingUser] = useState(false);
  const router = useRouter();

  const form = useForm<QuoteFormType>({
    resolver: zodResolver(quoteFormSchema),
    mode: "onBlur",
    defaultValues: {
      documentType: "DNI",
      documentNumber: "",
      phoneNumber: "",
    },
  });

  const onSubmit = async (data: QuoteFormType) => {
    setIsFetchingUser(true);

    const fetchUser = useUserStore.getState().fetchUser;

    try {
      await fetchUser(data);
      router.push(ROUTES.HEALTH_INSURANCE_PLANS);
    } catch (error) {
      console.error(error);
    } finally {
      setIsFetchingUser(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <p className="text-sm font-semibold md:text-base">
        Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría, 100% online.
      </p>

      <Form {...form}>
        <form action="" className="flex flex-col gap-6" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-3">
            <Label>Nro de documento</Label>

            <div className="flex">
              <FormField
                control={form.control}
                name="documentType"
                render={({ field }) => (
                  <FormItem className="w-full max-w-[140px]">
                    <FormControl>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger className="rounded-r-none border-r-0">
                          <SelectValue placeholder="Tipo de documento" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="DNI">DNI</SelectItem>
                          <SelectItem value="CE">CE</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="documentNumber"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input className="rounded-l-none" placeholder="e.g. 12345678" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Celular</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. 987654321" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="privacyPolicy"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel className="text-sm font-normal">
                    Acepto la Política de Privacidad
                  </FormLabel>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="commercialUse"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>

                  <FormLabel className="text-sm font-normal">
                    Acepto la Política de Comunicaciones Comerciales
                  </FormLabel>
                </FormItem>
              )}
            />

            <Link className="text-xs underline" prefetch={false} href="/terminos-y-condiciones">
              Aplican Términos y Condiciones.
            </Link>
          </div>
          <LoadingButton type="submit" size="lg" isLoading={isFetchingUser}>
            Cotiza Aquí
          </LoadingButton>
        </form>
      </Form>
    </div>
  );
}
