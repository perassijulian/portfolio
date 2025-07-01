import clsx from "clsx";
import Link from "next/link";

interface UnderlineButtonProps {
  children: React.ReactNode;
  tagKey?: string;
  onClick?: () => void;
  isActive?: boolean;
  href?: string;
  className?: string;
}

export default function UnderlineButton({
  children,
  tagKey = "",
  onClick,
  isActive = false,
  href,
  className,
}: UnderlineButtonProps) {
  const classNameApplied = clsx(
    "relative group hover:text-foreground-secondary",
    isActive && "text-foreground-secondary",
    className
  );

  const underline = (
    <span
      className={`absolute left-0 -bottom-1 h-[1px] transition-all duration-300 bg-gray-50 ${
        isActive ? "w-full" : "w-0 group-hover:w-full"
      }`}
    />
  );

  if (href) {
    return (
      <Link href={href} className={classNameApplied}>
        {children}
        {underline}
      </Link>
    );
  }

  return (
    <button key={tagKey} onClick={onClick} className={classNameApplied}>
      {children}
      {underline}
    </button>
  );
}
