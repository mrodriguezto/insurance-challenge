"use client";

import { getUser, UserExtraInfo, UserInfo } from "@/services/get-user.service";
import { create } from "zustand";

export type User = UserInfo & UserExtraInfo;

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

    const updatedUser = { ...user, ...data };

    set({ user: updatedUser });
  },
}));
