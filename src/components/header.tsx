import { GridContainer } from "./grid-container";
import Image from "next/image";
import rimacLogo from "@/assets/logo.png";
import { PhoneIcon } from "@/components/phone-icon";

export function Header() {
  return (
    <header className="bg-background">
      <GridContainer>
        <div className="col-span-full py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image src={rimacLogo} alt="logo" className="h-8 md:h-9" />
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <span className="text-xs font-semibold">¡Compra por este medio!</span>
              </div>

              <div className="flex items-center gap-2">
                <PhoneIcon />

                <a
                  className="text-base font-bold"
                  target="_blank"
                  rel="noreferrer"
                  translate="no"
                  href="tel:014116006"
                >
                  (01) 411 6006
                </a>
              </div>
            </div>
          </div>
        </div>
      </GridContainer>
    </header>
  );
}
