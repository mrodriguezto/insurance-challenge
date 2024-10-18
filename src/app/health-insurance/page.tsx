import GridLayout from "@/layouts/grid-layout";
import { ImageSection } from "./components/image-section";
import { QuoteSection } from "./components/quote-section";
import { GradientBackground } from "./components/gradient-background";

export default function SeguroSaludPage() {
  return (
    <div className="flex h-full w-full">
      <GradientBackground>
        <GridLayout>
          <ImageSection />

          <QuoteSection />
        </GridLayout>
      </GradientBackground>
    </div>
  );
}
