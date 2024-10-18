"use client";

import { Stepper } from "@/components/stepper";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { useStepperStore } from "../state/stepper.state";

const steps = ["Planes y coberturas", "Resumen"];

export function PlansStepper() {
  const router = useRouter();
  const currentStep = useStepperStore((state) => state.currentStep);

  return (
    <div className="flex items-center justify-center gap-4 border-b border-[#EDEFFC] px-6 py-4 md:bg-[#EDEFFC]">
      <div className="md:hidden">
        <Button
          className="rounded-full"
          variant="outline"
          size="icon"
          onClick={() => router.back()}
        >
          <ChevronLeftIcon className="h-3 w-3" />
        </Button>
      </div>
      <div className="flex-1 items-center justify-center">
        <Stepper steps={steps} currentStep={currentStep} />
      </div>
    </div>
  );
}
