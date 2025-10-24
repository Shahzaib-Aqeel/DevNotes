"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-violet-100 via-white to-violet-50 text-center px-6">
      <h1 className="text-4xl font-bold text-violet-800 mb-6">
        Sign in to DevNotes 🚀
      </h1>
      <button
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-xl text-lg font-medium shadow-lg transition transform hover:scale-105"
      >
        Sign in with Google
      </button>
    </main>
  );
}
