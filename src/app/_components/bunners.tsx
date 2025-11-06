import Image from "next/image";
import { getBanners } from "../lib/api/banners";
import Button from "./button";

export default async function Banners() {
  const banners = await getBanners();

  return (
    <section>
      <div className="grid gap-6">
        {banners.map((b) => (
          <div key={b.id} className="relative">
            <Image
              src={b.imageUrl}
              alt={b.title}
              width={1800}
              height={600}
              className="object-cover w-full h-[800px]"
            />
            <div className="absolute top-5 left-5 text-skoda-electric-green">
              <h2 className="text-8xl">{b.title}</h2>
              <p className="text-4xl">{b.description}</p>

              <ul className="list-disc list-inside mt-2 text-2xl">
                {b.listItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <Button>{b.buttonText}</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
