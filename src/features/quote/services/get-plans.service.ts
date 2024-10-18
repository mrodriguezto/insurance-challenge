import { api } from "@/lib/api";
import { z } from "zod";

const PlanSchema = z.object({
  name: z.string(),
  price: z.number(),
  description: z.array(z.string()),
  age: z.number(),
});

const ApiResponseSchema = z.object({
  list: z.array(PlanSchema),
});

export type Plan = z.infer<typeof PlanSchema>;

export async function getPlans() {
  const response = await api.get("/plans.json");
  return ApiResponseSchema.parse(response.data);
}
