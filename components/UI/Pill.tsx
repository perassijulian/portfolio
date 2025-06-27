interface PillProps {
  children: React.ReactNode;
  tagKey: string;
}

export default function Pill({ children, tagKey }: PillProps) {
  return (
    <div
      className="text-accent bg-accent-muted px-4 py-1 rounded-2xl"
      key={tagKey}
    >
      {children}
    </div>
  );
}
