import { HomeIcon } from "@/components/home-icon";
import { PlanDetailCard } from "./plan-detail-card";
import { HospitalIcon } from "@/components/hospital-icon";
import { usePlans } from "../hooks/use-plans";
import { useUserStore } from "../../../state/user.state";
import { useQuoteStore } from "../state/quote.state";

export function PlanDetailsCards() {
  const { plans, loading, error } = usePlans();
  const user = useUserStore((state) => state.user);
  const selectedBeneficiary = useQuoteStore((state) => state.selectedBeneficiary);

  if (loading) {
    return <div>Cargando planes...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!selectedBeneficiary || !user) {
    return null;
  }

  const getIcon = (planName: string) => {
    if (planName.includes("Casa")) {
      return <HomeIcon className="h-14 w-14" />;
    }
    return <HospitalIcon className="h-14 w-14" />;
  };

  const filteredPlans = plans.filter((plan) => user.age <= plan.age);

  const applyDiscount = (price: number) => {
    return selectedBeneficiary === "for-others" ? price * 0.95 : price;
  };

  return (
    <div className="scroll flex gap-4 overflow-x-auto scroll-smooth px-2 py-4">
      {filteredPlans.map((plan, index) => (
        <PlanDetailCard
          key={index}
          icon={getIcon(plan.name)}
          title={plan.name}
          monthlyPrice={`$${applyDiscount(plan.price).toFixed(2)}`}
          details={plan.description}
          age={plan.age}
        />
      ))}
    </div>
  );
}
