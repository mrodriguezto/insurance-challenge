import Image from "next/image";
import rimacLogo from "@/assets/logo-white.png";
import rimacFlatLogo from "@/assets/logo-white-flat.png";
import { GridContainer } from "./grid-container";

export function Footer() {
  return (
    <footer className="bg-dark-background py-8">
      <GridContainer>
        <div className="col-span-full">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <Image src={rimacLogo} alt="logo" className="hidden h-10 md:block" />
              <Image src={rimacFlatLogo} alt="logo" className="h-5 md:hidden" />
            </div>

            <div className="h-px w-full bg-[#2B304E] md:hidden" />

            <span className="text-sm text-dark-foreground">
              © 2024 RIMAC Seguros y Reaseguros.
            </span>
          </div>
        </div>
      </GridContainer>
    </footer>
  );
}
