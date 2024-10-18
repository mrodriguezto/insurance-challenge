import { api } from "@/lib/api";
import { z } from "zod";

export type DocumentType = "DNI" | "CE";

const userSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  birthDate: z.string(),
});

export type UserInfo = z.infer<typeof userSchema>;

export type UserExtraInfo = {
  documentType: DocumentType;
  documentNumber: string;
  phoneNumber: string;
};

export async function getUser() {
  const { data } = await api.get<UserInfo>("/user.json");

  return userSchema.parse(data);
}
