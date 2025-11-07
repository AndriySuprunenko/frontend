import Image from "next/image";
import Navigation from "./navigation";
import Button from "./button";

export default function Header() {
  return (
    <header className="bg-skoda-white flex items-center justify-between px-6 py-2 sticky top-0 z-50">
      <div className="flex gap-2">
        <Image
          src="/images/logos/Skoda_Wordmark_RGB_Emerald_Green.svg"
          alt="Logo"
          width={200}
          height={100}
          className="w-32 border-r-2 border-skoda-black pr-2"
        />
        <span className="text-xl">Автоцентр-Кременчук-2012</span>
      </div>
      <Navigation />
      <Button variant="outline-black" size="md" fullWidth={false}>
        Зателефонуйте нам
      </Button>
    </header>
  );
}
