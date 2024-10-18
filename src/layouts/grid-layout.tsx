function GridLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-12 gap-8 max-w-screen-xl mx-auto">
      {children}
    </div>
  );
}

export default GridLayout;
