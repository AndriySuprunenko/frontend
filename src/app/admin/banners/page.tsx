import { getBanners } from '../../lib/api/banners';
import { Plus, Image as ImageIcon } from 'lucide-react';
import BannerCard from './BannerCard';

export default async function BannersPage() {
  const banners = await getBanners();

  return (
    <div className='min-h-screen bg-linear-to-br from-slate-50 to-slate-100 p-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Заголовок та кнопка */}
        <div className='flex items-center justify-between mb-8'>
          <div>
            <h1 className='text-4xl font-bold text-slate-800 mb-2'>Банери</h1>
            <p className='text-slate-600'>Керуйте банерами вашого сайту</p>
          </div>
          <a
            href='/admin/banners/new'
            className='inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-200'
          >
            <Plus size={20} />
            Створити банер
          </a>
        </div>

        {/* Список банерів */}
        {banners.length === 0 ? (
          <div className='text-center py-16 bg-white rounded-2xl shadow-sm'>
            <ImageIcon className='mx-auto mb-4 text-slate-300' size={64} />
            <h3 className='text-xl font-semibold text-slate-700 mb-2'>
              Банерів поки немає
            </h3>
            <p className='text-slate-500'>
              Створіть перший банер для початку роботи
            </p>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {banners.map((banner) => (
              <BannerCard key={banner.id} banner={banner} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
