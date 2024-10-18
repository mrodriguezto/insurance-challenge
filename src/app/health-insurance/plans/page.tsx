import { Heading } from "./components/heading";
import { PlanBeneficiaryCards } from "./components/plan-beneficiary-cards";
import { PlanDetailsCards } from "./components/plan-details-cards";
import { GoBackButton } from "./components/go-back-button";

export default function PlansPage() {
  return (
    <>
      <div className="hidden pt-12 md:col-start-2 md:col-end-12 md:flex">
        <GoBackButton />
      </div>
      <div className="col-span-full flex flex-col gap-8 md:col-start-4 md:col-end-10">
        <Heading />
        <PlanBeneficiaryCards />
      </div>
      <div className="col-span-full pb-12 md:col-start-2 md:col-end-12">
        <PlanDetailsCards />
      </div>
    </>
  );
}
