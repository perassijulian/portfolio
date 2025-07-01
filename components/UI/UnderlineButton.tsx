import Link from "next/link";

interface UnderlineButtonProps {
  children: React.ReactNode;
  tagKey?: string;
  onClick?: () => void;
  isActive?: boolean;
  href?: string;
}

export default function UnderlineButton({
  children,
  tagKey = "",
  onClick,
  isActive = false,
  href,
}: UnderlineButtonProps) {
  const className = `relative group hover:text-foreground-secondary ${
    isActive ? "text-foreground-secondary" : ""
  }`;

  const underline = (
    <span
      className={`absolute left-0 -bottom-1 h-[1px] transition-all duration-300 bg-gray-50 ${
        isActive ? "w-full" : "w-0 group-hover:w-full"
      }`}
    />
  );

  if (href) {
    return (
      <Link href={href} key={tagKey} className={className}>
        {children}
        {underline}
      </Link>
    );
  }

  return (
    <button key={tagKey} onClick={onClick} className={className}>
      {children}
      {underline}
    </button>
  );
}
