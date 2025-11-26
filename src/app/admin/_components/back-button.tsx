"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BackButton = () => {
  const pathName = usePathname();

  return (
    <div
      className={`flex text-blue-600 p-8 bg-linear-to-br from-slate-50 to-slate-100 ${pathName === "/admin" && "hidden"}`}
    >
      <ArrowLeft />
      <Link href="/admin">Назад</Link>
    </div>
  );
};

export default BackButton;
