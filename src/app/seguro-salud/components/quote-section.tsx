import image220 from "@/assets/image-220.jpg";
import { TagPromo } from "@/components/tag-promo";
import Image from "next/image";
import { QuoteForm } from "./quote-form";

export function QuoteSection() {
  return (
    <div className="col-span-full flex flex-col gap-6 pb-16">
      <Hero />
      <div className="h-[1px] w-full bg-[#CCD1EE]" />
      <QuoteForm />
    </div>
  );
}

function Hero() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-1 flex-col items-start gap-2">
        <TagPromo>Seguro Salud Flexible</TagPromo>
        <h1 className="text-2xl font-bold">Creado para ti y tu familia</h1>
      </div>
      <div className="h-[160px] w-[136px] flex-shrink-0 overflow-hidden rounded-xl">
        <Image src={image220} alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}
