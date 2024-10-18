"use client";

import { getUser, UserExtraInfo, UserInfo } from "@/services/get-user.service";
import { create } from "zustand";

export type User = UserInfo &
  UserExtraInfo & {
    age: number;
  };

type UserState = {
  user: User | null;
  setUser: (user: User) => void;
  fetchUser: (data: UserExtraInfo) => Promise<void>;
};

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  fetchUser: async (data: UserExtraInfo) => {
    const user = await getUser();

    // Calcular la edad basada en la fecha de nacimiento
    const birthDate = new Date(user.birthDay);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    const updatedUser = { ...user, ...data, age };

    set({ user: updatedUser });
  },
}));
