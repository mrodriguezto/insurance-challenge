import { GoBackButton } from "../components/go-back-button";
import { SummaryCard } from "./components/summary-card";

const user = {
  name: "Rocío Miranda",
  id: "1234567890",
  phone: "1234567890",
};

const plan = {
  name: "Plan A",
  price: 1000,
};

export default function SummaryPage() {
  return (
    <>
      <div className="hidden pt-12 md:col-start-2 md:col-end-12 md:flex">
        <GoBackButton />
      </div>

      <div className="col-span-full flex flex-col gap-8 pb-12 md:col-start-2 md:col-end-11">
        <h1 className="text-3xl font-bold md:text-5xl">Resumen del seguro</h1>

        <SummaryCard user={user} plan={plan} />
      </div>
    </>
  );
}
