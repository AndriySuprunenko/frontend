import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function Navlink({ href, children }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        'px-4 py-2 transition-all w-full block',
        isActive
          ? 'text-skoda-electric-green bg-skoda-electric-green/20'
          : 'text-skoda-electric-green hover:bg-skoda-electric-green/20'
      )}
    >
      {children}
    </Link>
  );
}
