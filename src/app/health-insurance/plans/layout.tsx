import { PlansStepper } from "./components/plans-stepper";

export default function PlanesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <PlansStepper />
      {children}
    </div>
  );
}
