'use client';

import { deleteBanner } from '../../lib/api/banners';
import { Image as ImageIcon } from 'lucide-react';

type Banner = {
  id: number;
  title: string;
  description?: string;
  imageUrl?: string;
  listItems?: string[];
};

export default function BannerCard({ banner }: { banner: Banner }) {
  const handleDeleteBanner = async () => {
    if (!confirm('Ви впевнені, що хочете видалити цей банер?')) return;

    try {
      await deleteBanner(banner.id);
      window.location.reload(); // або router.refresh() якщо використаєш useRouter
    } catch (error) {
      console.error('Помилка при видаленні банера:', error);
      alert('Не вдалося видалити банер.');
    }
  };

  return (
    <div className='group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-blue-300'>
      {/* Зображення */}
      {banner.imageUrl ? (
        <div className='relative h-48 bg-linear-to-br from-slate-100 to-slate-200 overflow-hidden'>
          <img
            src={banner.imageUrl}
            alt={banner.title}
            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
          />
        </div>
      ) : (
        <div className='h-48 bg-linear-to-br from-blue-50 to-purple-50 flex items-center justify-center'>
          <ImageIcon className='text-slate-300' size={48} />
        </div>
      )}

      {/* Контент */}
      <div className='p-6'>
        <h2 className='text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors'>
          {banner.title}
        </h2>

        {banner.description && (
          <p className='text-slate-600 mb-4 line-clamp-2'>
            {banner.description}
          </p>
        )}

        {banner.listItems && banner.listItems.length > 0 && (
          <div className='space-y-2'>
            {banner.listItems.map((item, index) => (
              <div key={index} className='flex items-start gap-2 text-sm'>
                <span className='inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0'></span>
                <span className='text-slate-700'>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Футер */}
      <div className='px-6 pb-6 pt-2 flex gap-3 border-t border-slate-100'>
        <a
          href={`/admin/banners/${banner.id}/edit`}
          className='flex-1 text-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors'
        >
          Редагувати
        </a>
        <button
          onClick={handleDeleteBanner}
          className='flex-1 px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors'
        >
          Видалити
        </button>
      </div>
    </div>
  );
}
