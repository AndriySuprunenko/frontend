import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type Props = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Navlink({ href, children, onClick }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        "px-6 py-3 lg:px-4 lg:py-3 transition-all w-full block",
        isActive
          ? "text-skoda-black bg-skoda-emerald-green/20"
          : "text-skoda-black hover:bg-skoda-emerald-green/20",
      )}
    >
      {children}
    </Link>
  );
}
