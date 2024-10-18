import { GridContainer } from "@/components/grid-container";
import { PlansStepper } from "@/features/quote/componentes/plans-stepper";

export default function PlansLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PlansStepper />
      <GridContainer>{children}</GridContainer>
    </>
  );
}
