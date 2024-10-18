"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { useStepperStore } from "../state/multistep-plan.state";
import { ROUTES } from "@/configs/routes";

type GoBackButtonProps = {
  onPlansPage?: boolean;
};

export function GoBackButton({ onPlansPage = false }: GoBackButtonProps) {
  const router = useRouter();
  const { currentStep, setCurrentStep } = useStepperStore();

  const handleGoBack = () => {
    if (onPlansPage) {
      if (currentStep === 0) {
        router.push(ROUTES.HEALTH_INSURANCE);
      } else {
        setCurrentStep(0);
      }
    } else {
      router.back();
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="icon" className="rounded-full" onClick={handleGoBack}>
        <ChevronLeftIcon className="h-4 w-4 text-info" />
      </Button>
      <span className="text-sm font-bold text-info">Volver</span>
    </div>
  );
}
