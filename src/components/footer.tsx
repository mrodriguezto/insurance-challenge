import GridLayout from "@/layouts/grid-layout";
import Image from "next/image";
import rimacLogo from "@/assets/logo-white.png";
import rimacFlatLogo from "@/assets/logo-white-flat.png";

export function Footer() {
  return (
    <footer className="bg-dark-background px-6 py-8">
      <GridLayout>
        <div className="col-span-full">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src={rimacLogo}
                alt="logo"
                className="hidden h-10 md:block"
              />
              <Image src={rimacFlatLogo} alt="logo" className="h-5 md:hidden" />
            </div>

            <div className="h-px w-full bg-[#2B304E] md:hidden" />

            <span className="text-sm text-dark-foreground">
              © 2024 RIMAC Seguros y Reaseguros.
            </span>
          </div>
        </div>
      </GridLayout>
    </footer>
  );
}
