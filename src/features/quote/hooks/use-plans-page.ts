import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "../../../state/user.state";
import { ROUTES } from "@/configs/routes";

export function usePlansPage() {
  const router = useRouter();

  const user = useUserStore((state) => state.user);

  useEffect(() => {
    if (!user) {
      router.push(ROUTES.HEALTH_INSURANCE);
    }
  }, [user, router]);

  return {
    user,
    isLoading: !user,
  };
}
