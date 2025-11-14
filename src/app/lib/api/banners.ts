export interface Banner {
  id: number;
  title: string;
  description: string;
  listItems: string[];
  buttonText: string;
  buttonUrl: string;
  imageUrl: string;
  createdAt?: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001/api";

export async function getBanners(): Promise<Banner[]> {
  const res = await fetch(`${API_URL}/banners`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch banners");
  return res.json();
}

export async function getBanner(id: number): Promise<Banner> {
  const res = await fetch(`${API_URL}/banners/${id}`);
  if (!res.ok) throw new Error("Failed to fetch banner");
  return res.json();
}

export async function createBanner(data: Banner): Promise<Banner> {
  const res = await fetch(`${API_URL}/banners`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create banner");
  return res.json();
}

export async function deleteBanner(id: number) {
  const res = await fetch(`${API_URL}/banners/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete banner");
}

export async function uploadImage(file: File): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API_URL}/banners/upload`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error("Upload failed");

  const data = await res.json();
  return data.url;
}
