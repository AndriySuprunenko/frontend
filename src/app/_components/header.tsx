import Image from "next/image";
import Navigation from "./navigation";
import Button from "./button";

export default function Header() {
  return (
    <header className="bg-skoda-emerald-green flex items-center justify-between px-6 py-2 sticky top-0 z-50">
      <Image
        src="/images/logos/Skoda_Wordmark_RGB_Electric_Green.svg"
        alt="Logo"
        width={200}
        height={100}
      />
      <Navigation />
      <Button variant="emerald" size="sm" fullWidth={false}>
        Зателефонуйте нам
      </Button>
    </header>
  );
}
