interface PillProps {
  children: React.ReactNode;
  key: string;
}

export default function Pill({ children, key }: PillProps) {
  return (
    <div
      className="text-accent bg-accent-muted px-4 py-1 rounded-2xl"
      key={key}
    >
      {children}
    </div>
  );
}
