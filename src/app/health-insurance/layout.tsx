import { Footer } from "@/components/footer";

export default function SeguroSaludLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}
