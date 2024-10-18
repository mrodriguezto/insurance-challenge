import { Heading } from "./components/heading";
import { PlanBeneficiaryCards } from "./components/plan-beneficiary-cards";
import { PlanDetailsCards } from "./components/plan-details-cards";

export default function PlansPage() {
  return (
    <div className="col-span-full flex flex-col gap-8 py-6">
      <Heading />
      <PlanBeneficiaryCards />
      <PlanDetailsCards />
    </div>
  );
}
