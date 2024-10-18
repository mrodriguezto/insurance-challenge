export function TagPromo({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded bg-gradient-to-tr from-[#00F4E2] to-[#00FF7F] p-[2px] px-2 text-xs font-bold md:text-sm">
      {children}
    </span>
  );
}
