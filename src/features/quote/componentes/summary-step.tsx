import { SummaryCard } from "@/features/quote/componentes/quote-summary-card";
import { useUserStore } from "../../../state/user.state";
import { useQuoteStore } from "../state/quote.state";
import { GoBackButton } from "./go-back-button";

export function SummaryStep() {
  const user = useUserStore((state) => state.user);
  const selectedPlan = useQuoteStore((state) => state.selectedPlan);

  if (!user || !selectedPlan) {
    return <div>No hay información disponible</div>;
  }

  const summaryUser = {
    name: `${user.name} ${user.lastName}`,
    id: user.documentNumber,
    phone: user.phoneNumber,
  };

  return (
    <div className="col-span-full flex flex-col gap-8 pb-12 md:col-start-2 md:col-end-11">
      <div className="hidden pt-12 md:flex">
        <GoBackButton onPlansPage />
      </div>
      <h1 className="pt-8 text-3xl font-bold md:text-5xl">Resumen del seguro</h1>
      <SummaryCard user={summaryUser} plan={selectedPlan} />
    </div>
  );
}
