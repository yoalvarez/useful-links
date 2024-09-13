"use client";

import { useRouter } from "next/navigation";

export const LinkList = ({ id, url, deskripsi }) => {
  const router = useRouter();

  async function handleDeleteLink() {
    await fetch("https://v1.appbackend.io/v1/rows/BGi0GvptRLoD", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([id]),
    });
    alert("Hapus Data Berhasil");
    router.refresh();
  }

  return (
    <div className="link">
      <p className="font-bold text-xl mb-3">{url}</p>
      <p className="text-sm p-2 pr-1 py-1 mb-10 whitespace-break-spaces break-words">
        {deskripsi}
      </p>
      <div className="link-footer">
        <div class="flex justify-end gap-2">
          <button onClick={handleDeleteLink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-trash2 "
            >
              <path d="M3 6h18"></path>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
              <line x1="10" x2="10" y1="11" y2="17"></line>
              <line x1="14" x2="14" y1="11" y2="17"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
