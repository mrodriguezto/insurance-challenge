import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuoteStore } from "../state/quote.state";
import { useStepperStore } from "../state/multistep-plan.state";

export type PlanDetailCardProps = {
  icon: React.ReactNode;
  title: string;
  monthlyPrice: string;
  details: string[];
  age: number;
};

export function PlanDetailCard({ icon, title, monthlyPrice, details, age }: PlanDetailCardProps) {
  const setSelectedPlan = useQuoteStore((state) => state.setSelectedPlan);
  const setCurrentStep = useStepperStore((state) => state.setCurrentStep);

  const handleSelectPlan = () => {
    setSelectedPlan({ name: title, price: parseFloat(monthlyPrice.replace("$", "")) });
    setCurrentStep(1);
  };

  return (
    <Card className="flex w-[280px] min-w-[280px] flex-col">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between gap-2 pt-6">
            <h3 className="text-2xl font-bold">{title}</h3>
            {icon}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold text-muted-foreground">COSTO DEL PLAN:</span>
          <p className="text-xl font-bold">{monthlyPrice} al mes</p>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold text-muted-foreground">EDAD MÁXIMA DE INGRESO:</span>
          <p className="text-xl font-bold">{age} años</p>
        </div>
        {/* Separator */}
        <div className="h-[1px] w-full bg-[#D7DBF5]" />
        <ul className="flex list-disc flex-col gap-3 space-y-2 pl-4">
          {details.map((detail, index) => (
            <li key={index} className="text-sm text-foreground">
              {detail}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-col justify-center">
        <Button variant="destructive" onClick={handleSelectPlan}>
          Seleccionar plan
        </Button>
      </CardFooter>
    </Card>
  );
}
