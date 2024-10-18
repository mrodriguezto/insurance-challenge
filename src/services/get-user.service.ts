import { api } from "@/lib/api";
import { z } from "zod";

const UserSchema = z.object({
  name: z.string(),
  lastName: z.string(),
  birthDay: z.string(),
});

export type UserInfo = z.infer<typeof UserSchema>;

export type UserExtraInfo = {
  documentType: "DNI" | "CE";
  documentNumber: string;
  phoneNumber: string;
};

export async function getUser() {
  const response = await api.get<UserInfo>("/user.json");
  return UserSchema.parse(response.data);
}
