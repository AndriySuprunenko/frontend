import Link from 'next/link';

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function Navlink({ href, children }: Props) {
  return (
    <Link href={href} className='text-skoda-electric-green'>
      {children}
    </Link>
  );
}
