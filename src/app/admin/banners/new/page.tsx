"use client";

import { useState } from "react";
import { createBanner, uploadImage } from "../../../lib/api/banners";
import { redirect } from "next/navigation";
import Image from "next/image";

export default function NewBannerPage() {
  const id = Math.floor(Math.random() * 1000000);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [listItems, setListItems] = useState<string[]>([]);
  const [buttonText, setButtonText] = useState("");
  const [buttonUrl, setButtonUrl] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      let imageUrl = "";
      if (image) {
        imageUrl = await uploadImage(image);
      }

      await createBanner({
        id,
        title,
        description,
        listItems,
        buttonText,
        buttonUrl,
        imageUrl,
      });

      setMessage("✅ Банер успішно створено!");
      setTitle("");
      setDescription("");
      setListItems([]);
      setButtonText("");
      setButtonUrl("");
      setImage(null);
      setPreview(null);
    } catch (error) {
      console.error(error);
      setMessage("❌ Помилка при створенні банера");
    } finally {
      setLoading(false);
      redirect("/admin/banners");
    }
  }

  function handleListChange(value: string) {
    const items = value
      .split("\n")
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
    <div className=" p-6 bg-linear-to-br">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Створити банер</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Заголовок"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 rounded"
            required
          />

          <textarea
            placeholder="Опис"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 rounded"
            rows={3}
            required
          />

          <textarea
            placeholder="Пункти списку (по одному на рядок)"
            onChange={(e) => handleListChange(e.target.value)}
            className="border p-2 rounded"
            rows={3}
          />

          <input
            type="text"
            placeholder="Текст кнопки"
            value={buttonText}
            onChange={(e) => setButtonText(e.target.value)}
            className="border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Посилання кнопки"
            value={buttonUrl}
            onChange={(e) => setButtonUrl(e.target.value)}
            className="border p-2 rounded"
          />

          <div>
            <label className="block mb-1">Зображення</label>
            <input
              className="bg-white p-2 w-fit border border-black rounded cursor-pointer"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
            {preview && (
              <Image
                src={preview}
                alt="preview"
                className="mt-3 w-full rounded shadow"
              />
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "Завантаження..." : "Створити банер"}
          </button>

          {message && <p className="text-center mt-2">{message}</p>}
        </form>
      </div>
    </div>
  );
}
