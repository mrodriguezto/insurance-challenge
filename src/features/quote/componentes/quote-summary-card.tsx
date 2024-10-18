import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type SummaryCardProps = {
  user: {
    name: string;
    id: string;
    phone: string;
  };
  plan: {
    name: string;
    price: number;
  };
};

export function SummaryCard({ user, plan }: SummaryCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase text-muted-foreground">
              Precios calculados para:
            </span>
            <span className="text-xl font-bold">{user.name}</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col justify-between">
            <span className="font-bold">Responsable del pago:</span>
            <span>ID: {user.id}</span>
            <span>Celular: {user.phone}</span>
          </div>
          <div className="flex flex-col justify-between">
            <span className="font-bold">Plan elegido:</span>
            <span>{plan.name}</span>
            <span>Costo del plan: ${plan.price} al mes</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
