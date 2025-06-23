interface PillProps {
  children: React.ReactNode;
  id: number;
}

export default function Pill({ children, id }: PillProps) {
  return (
    <div className="text-accent bg-accent-muted px-4 py-1 rounded-2xl" key={id}>
      {children}
    </div>
  );
}
