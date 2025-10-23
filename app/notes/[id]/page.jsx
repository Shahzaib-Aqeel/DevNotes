"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function NoteDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // 🧠 Fetch single note
  useEffect(() => {
    async function fetchNote() {
      try {
        const res = await fetch(`/api/notes/${id}`);
        const data = await res.json();
        setNote(data);
        setTitle(data.title);
        setContent(data.content);
      } catch (err) {
        console.error("Error fetching note:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchNote();
  }, [id]);

  // 💾 Update Note
  async function handleUpdate(e) {
    e.preventDefault();
    const res = await fetch(`/api/notes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    if (res.ok) {
      const updated = await res.json();
      setNote(updated);
      setEditing(false);
    } else {
      alert("Failed to update note");
    }
  }

  // ❌ Delete Note
  async function handleDelete() {
    if (!confirm("Delete this note?")) return;

    const res = await fetch(`/api/notes/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      router.push("/notes");
    } else {
      alert("Failed to delete note");
    }
  }

  if (loading)
    return (
      <main className="flex justify-center items-center h-screen text-violet-600">
        Loading note...
      </main>
    );

  if (!note)
    return (
      <main className="flex justify-center items-center h-screen text-red-600">
        Note not found.
      </main>
    );

  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-b from-violet-100 via-white to-violet-50 py-10 px-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full">
        {editing ? (
          <form onSubmit={handleUpdate} className="flex flex-col gap-4">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-violet-400 outline-none text-black"
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 h-40 resize-none focus:ring-2 focus:ring-violet-400 outline-none text-black"
            ></textarea>

            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-lg transition"
              >
                💾 Save
              </button>
              <button
                type="button"
                onClick={() => setEditing(false)}
                className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-lg transition"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-violet-700 mb-4">{note.title}</h1>
            <p className="text-gray-700 whitespace-pre-line">{note.content}</p>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setEditing(true)}
                className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-lg transition"
              >
                ✏️ Edit
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition"
              >
                🗑️ Delete
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
