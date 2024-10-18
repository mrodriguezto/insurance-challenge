import { GoBackButton } from "@/features/quote/componentes/go-back-button";
import { PlanBeneficiaryCards } from "@/features/quote/componentes/plan-beneficiary-cards";
import { PlanDetailsCards } from "@/features/quote/componentes/plan-details-cards";
import { SelectPlansHeading } from "@/features/quote/componentes/select-plans-heading";

export default function PlansPage() {
  return (
    <>
      <div className="hidden pt-12 md:col-start-2 md:col-end-12 md:flex">
        <GoBackButton />
      </div>
      <div className="col-span-full flex flex-col gap-8 md:col-start-4 md:col-end-10">
        <SelectPlansHeading />
        <PlanBeneficiaryCards />
      </div>
      <div className="col-span-full pb-12 md:col-start-2 md:col-end-12">
        <PlanDetailsCards />
      </div>
    </>
  );
}
