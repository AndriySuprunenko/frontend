'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { updateBanner, uploadImage, getBanner } from '@/app/lib/api/banners';

export default function NewBannerPage() {
  const id = useParams().id as number;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [listItems, setListItems] = useState<string[]>([]);
  const [buttonText, setButtonText] = useState('');
  const [buttonUrl, setButtonUrl] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBanner() {
      if (!id) return;
      try {
        const data = await getBanner(id);
        setTitle(data.title || '');
        setDescription(data.description || '');
        setListItems(data.listItems || []);
        setButtonText(data.buttonText || '');
        setButtonUrl(data.buttonUrl || '');
        setPreview(data.imageUrl || null);
      } catch (error) {
        console.error(error);
      }
    }
    fetchBanner();
  }, [id]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      let imageUrl = preview || '';
      if (image) {
        imageUrl = await uploadImage(image);
      }

      await updateBanner(id, {
        title,
        description,
        listItems,
        buttonText,
        buttonUrl,
        imageUrl,
      });

      setMessage('✅ Банер успішно оновленно!');
      setTitle('');
      setDescription('');
      setListItems([]);
      setButtonText('');
      setButtonUrl('');
      setImage(null);
      setPreview(null);
    } catch (error) {
      console.error(error);
      setMessage('❌ Помилка при оновленні банера');
    } finally {
      setLoading(false);
    }
  }

  function handleListChange(value: string) {
    const items = value
      .split('\n')
      .map((i) => i.trim())
      .filter(Boolean);
    setListItems(items);
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  }

  return (
    <main className='max-w-2xl mx-auto p-6'>
      <h1 className='text-2xl font-bold mb-4'>Оновити банер</h1>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='text'
          placeholder='Заголовок'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='border p-2 rounded'
          required
        />

        <textarea
          placeholder='Опис'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='border p-2 rounded'
          rows={3}
          required
        />

        <textarea
          placeholder='Пункти списку (по одному на рядок)'
          value={listItems.join('\n')}
          onChange={(e) => handleListChange(e.target.value)}
          className='border p-2 rounded'
          rows={3}
        />

        <input
          type='text'
          placeholder='Текст кнопки'
          value={buttonText}
          onChange={(e) => setButtonText(e.target.value)}
          className='border p-2 rounded'
        />

        <input
          type='text'
          placeholder='Посилання кнопки'
          value={buttonUrl}
          onChange={(e) => setButtonUrl(e.target.value)}
          className='border p-2 rounded'
        />

        <div>
          <label className='block mb-1'>Зображення</label>
          {message && <p className='text-center mt-2'>{message}</p>}
          <input
            type='file'
            accept='image/*'
            onChange={handleFileChange}
            className='bg-skoda-chrome-400 p-2 rounded-3xl cursor-pointer'
          />
          {preview && (
            <img
              src={preview}
              alt='preview'
              className='mt-3 w-64 rounded shadow'
            />
          )}
        </div>
        <button
          type='submit'
          disabled={loading}
          className='bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-60'
        >
          {loading ? 'Завантаження...' : 'Оновити банер'}
        </button>
      </form>
    </main>
  );
}
