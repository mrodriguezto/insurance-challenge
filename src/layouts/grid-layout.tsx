function GridLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto grid max-w-screen-xl grid-cols-4 gap-4 px-6 md:grid-cols-12 md:gap-8">
      {children}
    </div>
  );
}

export default GridLayout;
