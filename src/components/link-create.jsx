"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const LinkCreate = () => {
  const router = useRouter();

  const [url, setUrl] = useState("");
  const [deskripsi, setDescription] = useState("");

  async function handleCreateLink() {
    const res = await fetch("https://v1.appbackend.io/v1/rows/BGi0GvptRLoD", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ url, deskripsi }]),
    });

    const data = await res.json();
    router.refresh();
    alert("Input Data Berhasil");
  }

  return (
    <div className="space-y-2 mb-8">
      <label>URL</label>
      <input
        onChange={(e) => setUrl(e.target.value)}
        className="border-solid border-2 rounded-md border-[#59ff59]"
        placeholder="contoh: google.com"
        type="text"
      />
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        className="border-solid border-2 rounded-md border-[#59ff59]"
        placeholder="Silakan isi deskripsi Website"
        type="text"
      ></textarea>
      <button onClick={handleCreateLink}>Simpan</button>
    </div>
  );
};
