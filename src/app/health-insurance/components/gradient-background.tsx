export function GradientBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gradient-to-tr from-[#C333FF] via-white via-30% to-background h-full w-full">
      {children}
    </div>
  );
}
