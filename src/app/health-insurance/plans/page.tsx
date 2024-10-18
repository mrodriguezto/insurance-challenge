"use client";

import { GoBackButton } from "@/features/quote/componentes/go-back-button";
import { PlanBeneficiaryCards } from "@/features/quote/componentes/plan-beneficiary-cards";
import { PlanDetailsCards } from "@/features/quote/componentes/plan-details-cards";
import { SelectPlansHeading } from "@/features/quote/componentes/select-plans-heading";
import { SummaryStep } from "@/features/quote/componentes/summary-step";
import { usePlansPage } from "@/features/quote/hooks/use-plans-page";
import { useStepperStore } from "@/features/quote/state/multistep-plan.state";

const steps = [
  {
    component: () => (
      <>
        <div className="col-span-full flex flex-col gap-8 md:col-start-4 md:col-end-10">
          <SelectPlansHeading />
          <PlanBeneficiaryCards />
        </div>
        <div className="col-span-full pb-12 md:col-start-2 md:col-end-12">
          <PlanDetailsCards />
        </div>
      </>
    ),
    showBackButton: true,
  },
  {
    component: SummaryStep,
    showBackButton: false,
  },
];

export default function PlansPage() {
  const { isLoading } = usePlansPage();

  const currentStep = useStepperStore((state) => state.currentStep);

  if (isLoading) {
    return null; // or you could return a loading indicator here
  }

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <>
      {steps[currentStep].showBackButton && (
        <div className="hidden pt-12 md:col-start-2 md:col-end-12 md:flex">
          <GoBackButton onPlansPage />
        </div>
      )}
      <CurrentStepComponent />
    </>
  );
}
