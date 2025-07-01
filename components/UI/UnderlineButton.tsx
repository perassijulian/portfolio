interface UnderlineButtonProps {
  children: string;
  tagKey: string;
  onClick: () => void;
  isActive: boolean;
}

export default function UnderlineButton({
  children,
  tagKey,
  onClick,
  isActive,
}: UnderlineButtonProps) {
  return (
    <button
      key={tagKey}
      onClick={onClick}
      className={`relative group hover:text-foreground-secondary ${
        isActive ? "text-foreground-secondary" : ""
      }`}
    >
      {children}
      <span
        className={`absolute left-0 -bottom-1 h-[1px] transition-all duration-300 bg-gray-50 ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </button>
  );
}
