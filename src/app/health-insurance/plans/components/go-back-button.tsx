import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "@radix-ui/react-icons";

export function GoBackButton() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="icon" className="rounded-full">
        <ChevronLeftIcon className="h-4 w-4 text-info" />
      </Button>
      <span className="text-sm font-bold text-info">Volver</span>
    </div>
  );
}
