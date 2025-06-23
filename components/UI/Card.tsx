export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="group relative p-4 cursor-default rounded-lg hover:bg-white/5 transition hover:shadow-xl">
        {children}
      </div>
    </div>
  );
}
