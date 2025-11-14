import Image from "next/image";
import { getBanners } from "../lib/api/banners";
import Button from "./button";

export default async function Banners() {
  const banners = await getBanners();

  return (
    <section>
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 auto-rows-auto lg:auto-rows-[270px] p-6">
        {banners.map((b, i) => (
          <div
            key={b.id}
            className={`relative ${i % 2 === 0 ? "row-span-2" : "row-span-1"}`}
          >
            <Image
              src={b.imageUrl}
              alt={b.title}
              width={1800}
              height={600}
              className="object-cover w-full h-full"
            />
            <div className="absolute top-0 left-0 bg-skoda-black/50 w-full h-full"></div>
            <div className="absolute top-5 left-5 text-skoda-white">
              <h2 className="text-4xl">{b.title}</h2>
              <p className="text-xl">{b.description}</p>
              <ul className="list-disc list-inside my-2 text-lg">
                {b.listItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            {b.buttonText && (
              <div className="absolute bottom-5 left-5">
                <Button variant="outline">{b.buttonText}</Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
