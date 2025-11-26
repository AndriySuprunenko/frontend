"use client";

import Image from "next/image";
import { deleteBanner } from "../../lib/api/banners";
import { Image as ImageIcon } from "lucide-react";
import Link from "next/link";

type Banner = {
  id: number;
  title: string;
  description?: string;
  imageUrl?: string;
  listItems?: string[];
};

export default function BannerCard({ banner }: { banner: Banner }) {
  const handleDeleteBanner = async () => {
    if (!confirm("Ви впевнені, що хочете видалити цей банер?")) return;

    try {
      await deleteBanner(banner.id);
      window.location.reload(); // або router.refresh() якщо використаєш useRouter
    } catch (error) {
      console.error("Помилка при видаленні банера:", error);
      alert("Не вдалося видалити банер.");
    }
  };

  return (
    <div className="flex bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-blue-300">
      {/* Зображення */}
      {banner.imageUrl ? (
        <div className="relative w-xl overflow-hidden">
          <Image
            src={banner.imageUrl}
            alt={banner.title}
            fill
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="h-48 bg-linear-to-br from-blue-50 to-purple-50 flex items-center justify-center">
          <ImageIcon className="text-slate-300" size={48} />
        </div>
      )}

      {/* Контент */}
      <div className="w-full flex justify-between">
        <div className="p-6">
          <h2 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
            {banner.title}
          </h2>

          {banner.description && (
            <p className="text-slate-600 mb-4 line-clamp-2">
              {banner.description}
            </p>
          )}

          {banner.listItems && banner.listItems.length > 0 && (
            <div className="space-y-2">
              {banner.listItems.map((item, index) => (
                <div key={index} className="flex items-start gap-2 text-sm">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></span>
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col justify-center gap-2 border-t border-slate-100">
          <Link
            href={`/admin/banners/${banner.id}/edit`}
            className="p-2 w-full text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
          >
            Редагувати
          </Link>
          <button
            onClick={handleDeleteBanner}
            className="p-2 w-full text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors cursor-pointer"
          >
            Видалити
          </button>
        </div>
      </div>
    </div>
  );
}
