import Image from "next/image";
import { IBanner, getBanners } from "../lib/api/banners";
import Button from "./button";

export default async function Banners() {
  let banners: IBanner[] = [];
  let error: string | null = null;

  try {
    banners = await getBanners();
  } catch (err) {
    error =
      err instanceof Error ? err.message : "Не вдалося завантажити баннери";
    console.error("Backend error:", err);
  }

  if (error) {
    return (
      <section className="p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-red-800 mb-2">
            Помилка завантаження
          </h3>
          <p className="text-red-700">{error}</p>
        </div>
      </section>
    );
  }

  if (banners.length === 0) {
    return (
      <section className="p-6">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
          <p className="text-gray-600">Наразі банерів немає</p>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 auto-rows-[270px] p-6">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`relative overflow-hidden ${
              index % 2 === 0 ? "row-span-1 lg:row-span-2" : "row-span-1"
            }`}
          >
            <Image
              src={banner.imageUrl}
              alt={banner.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority={index === 0}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-skoda-black/50" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-5 text-skoda-white">
              <div>
                <h2 className="text-4xl font-bold mb-2">{banner.title}</h2>
                <p className="text-xl mb-2">{banner.description}</p>

                {banner.listItems && banner.listItems.length > 0 && (
                  <ul className="list-disc list-inside text-lg space-y-1">
                    {banner.listItems.map((item, itemIndex) => (
                      <li key={`${banner.id}-item-${itemIndex}`}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Button */}
              {banner.buttonText && (
                <div className="w-fit">
                  <Button variant="outline">{banner.buttonText}</Button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
