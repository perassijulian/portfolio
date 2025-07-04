import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function GoBackButton() {
  return (
    <Link
      href="/"
      className="group text-accent font-bold flex items-center gap-1 text-2xl "
    >
      <MoveLeft className="transition-transform duration-300 ease-in-out group-hover:-translate-x-1" />{" "}
      Julian Perassi
    </Link>
  );
}
