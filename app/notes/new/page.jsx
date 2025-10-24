"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateNotePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

 
  async function handleSubmit(e) {
    e.preventDefault();

    if (!title || !content) {
      alert("Please fill all fields");
      return;
    }

    const res = await fetch("/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    if (res.ok) {
      setTitle("");
      setContent("");
      router.push("/notes"); 
    } else {
      alert("Failed to create note");
    }
  }

  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-b from-violet-100 via-white to-violet-50 py-10 px-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center text-violet-700 mb-6 cursor-pointer">
          📝 Create a New Note
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Note Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-violet-400 outline-none text-black"
          />

          <textarea
            placeholder="Write your note here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border border-gray-300 text-black rounded-lg p-3 h-40 resize-none focus:ring-2 focus:ring-violet-400 outline-none"
          ></textarea>

          <button
            type="submit"
            className="bg-violet-600 hover:bg-violet-700 text-white font-medium py-2 rounded-lg transition"
          >
            Save Note
          </button>
        </form>
      </div>
    </main>
  );
}
