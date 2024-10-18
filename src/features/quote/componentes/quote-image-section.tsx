import Image from "next/image";
import image220 from "@/assets/image-220.jpg";

export function QuoteImageSection() {
  return (
    <div className="hidden md:col-start-1 md:col-end-6 md:block md:py-8">
      <div className="overflow-hidden rounded-xl sm:h-[360px] sm:w-[320px] lg:h-[560px] lg:w-[480px]">
        <Image src={image220} alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}
