import { GridContainer } from "@/components/grid-container";
import { GradientBackground } from "@/features/quote/componentes/quote-gradient-background";
import { QuoteImageSection } from "@/features/quote/componentes/quote-image-section";
import { QuoteSection } from "@/features/quote/componentes/quote-section";

export default function SeguroSaludPage() {
  return (
    <div className="flex h-full w-full">
      <GradientBackground>
        <GridContainer>
          <QuoteImageSection />

          <QuoteSection />
        </GridContainer>
      </GradientBackground>
    </div>
  );
}
