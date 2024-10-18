import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

export type BeneficiaryCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  value: "for-me" | "for-others";
  isActive: boolean;
};

export function BeneficiaryCard({
  icon,
  title,
  description,
  value,
  isActive,
}: BeneficiaryCardProps) {
  return (
    <Card className={cn("md:max-w-[256px]", isActive ? "border-primary" : "border-transparent")}>
      <CardHeader>
        <div className="flex justify-end">
          <RadioGroupItem value={value} />
        </div>
        <CardTitle>
          <div className="flex items-center gap-2">
            {icon}
            <h2 className="text-lg font-semibold">{title}</h2>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
