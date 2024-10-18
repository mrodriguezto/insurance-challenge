function GridLayout({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-12">{children}</div>;
}

export default GridLayout;
