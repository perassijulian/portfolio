interface PillProps {
  children: React.ReactNode;
  tagKey: string;
}

export default function Pill({ children, tagKey }: PillProps) {
  return (
    <div
      className="relative px-4 py-1 rounded-2xl text-accent bg-accent-muted cursor-default transition-all group"
      key={tagKey}
    >
      {children}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-accent" />
    </div>
  );
}
