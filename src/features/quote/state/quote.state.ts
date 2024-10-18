import { create } from "zustand";

type Beneficiary = "for-me" | "for-others" | null;

type Plan = {
  name: string;
  price: number;
};

type QuoteState = {
  selectedBeneficiary: Beneficiary;
  setSelectedBeneficiary: (beneficiary: Beneficiary) => void;
  selectedPlan: Plan | null;
  setSelectedPlan: (plan: Plan) => void;
};

export const useQuoteStore = create<QuoteState>((set) => ({
  selectedBeneficiary: null,
  setSelectedBeneficiary: (beneficiary) => set({ selectedBeneficiary: beneficiary }),
  selectedPlan: null,
  setSelectedPlan: (plan) => set({ selectedPlan: plan }),
}));
