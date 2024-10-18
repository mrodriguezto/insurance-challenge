import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export type PlanDetailCardProps = {
  icon: React.ReactNode;
  title: string;
  monthlyPrice: string;
  details: React.ReactNode[]; // a list of details to be displayed in a ul list
};

export function PlanDetailCard({ icon, title, monthlyPrice, details }: PlanDetailCardProps) {
  return (
    <Card className="flex min-w-[280px] flex-col">
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
        <Button variant="destructive">Seleccionar plan</Button>
      </CardFooter>
    </Card>
  );
}
