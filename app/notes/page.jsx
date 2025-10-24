"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function NotesPage() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function fetchNotes() {
      try {
        const res = await fetch("/api/notes");
        const data = await res.json();
        setNotes(data);
      } catch (err) {
        console.error("Error fetching notes:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchNotes();
  }, []);

  if (loading) {
    return (
      <main className="flex justify-center items-center h-screen text-violet-600">
        <p>Loading your notes...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-violet-100 via-white to-violet-50 py-10 px-6">
      <div className="max-w-4xl mx-auto">

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-violet-700">📝 My Notes</h1>
          <Link
            href="/notes/new"
            className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg shadow transition"
          >
            ➕ New Note
          </Link>
        </div>


        {notes.length === 0 ? (
          <p className="text-gray-500 text-center mt-10">
            You haven’t created any notes yet.
            <Link href="/notes/new" className="text-violet-600 underline ml-1">
              Create one now!
            </Link>
          </p>
        ) : (

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {notes.map((note) => (
              <Link key={note._id} href={`/notes/${note._id}`}>
                <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer hover:-translate-y-1">
                  <h2 className="text-xl font-semibold text-violet-700 mb-2">
                    {note.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                    {note.content}
                  </p>
                  <p className="text-xs text-gray-400">
                    Created: {new Date(note.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
