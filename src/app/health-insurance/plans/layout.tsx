import GridLayout from "@/layouts/grid-layout";
import { PlansStepper } from "./components/plans-stepper";

export default function PlansLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <PlansStepper />
      <GridLayout>{children}</GridLayout>
    </div>
  );
}
