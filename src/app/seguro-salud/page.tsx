import GridLayout from "@/layouts/grid-layout";
import { ImageSection } from "./components/image-section";
import { QuoteSection } from "./components/quote-section";

export default function SeguroSaludPage() {
  return (
    <div className="flex h-full w-full">
      <GridLayout>
        <ImageSection />

        <QuoteSection />
      </GridLayout>
    </div>
  );
}
