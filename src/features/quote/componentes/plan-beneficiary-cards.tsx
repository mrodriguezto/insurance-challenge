"use client";

import { RadioGroup } from "@/components/ui/radio-group";
import { BeneficiaryCard, BeneficiaryCardProps } from "./beneficiary-card";
import { ProtectionUserIcon } from "@/components/protection-user-icon";
import { ProtectionAddUserIcon } from "@/components/protection-add-user-icon";
import { useQuoteStore } from "../state/quote.state";

const cards: Omit<BeneficiaryCardProps, "isActive">[] = [
  {
    icon: <ProtectionUserIcon className="h-8 w-8" />,
    title: "Para mí",
    description: "Cotiza tu seguro de salud y agrega familiares si así lo deseas.",
    value: "for-me",
  },
  {
    icon: <ProtectionAddUserIcon className="h-8 w-8" />,
    title: "Para alguien más",
    description: "Realiza una cotización para uno de tus familiares o cualquier persona.",
    value: "for-others",
  },
];

export function PlanBeneficiaryCards() {
  const { selectedBeneficiary, setSelectedBeneficiary } = useQuoteStore();

  return (
    <RadioGroup
      className="flex flex-col gap-6 md:flex-row"
      value={selectedBeneficiary || undefined}
      onValueChange={(value) => setSelectedBeneficiary(value as "for-me" | "for-others")}
    >
      {cards.map((card) => (
        <BeneficiaryCard key={card.title} {...card} isActive={selectedBeneficiary === card.value} />
      ))}
    </RadioGroup>
  );
}
