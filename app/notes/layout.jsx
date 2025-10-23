"use client";
import { signOut, useSession } from "next-auth/react";

export default function NotesLayout({ children }) {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="p-6">{children}</main>
    </div>
  );
}
