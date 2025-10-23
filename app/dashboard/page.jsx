"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function LoggedInHome() {
  const { data: session } = useSession();
  if (!session) return null;

  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-b from-violet-100 via-white to-violet-50 text-center px-6 py-12">
      {/* Profile Section */}
      <section className="bg-white shadow-md rounded-2xl p-8 max-w-lg w-full flex flex-col items-center">
        <img
          src={session.user.image}
          alt="User Avatar"
          className="w-24 h-24 rounded-full border-4 border-violet-500 shadow-md mb-4"
        />
        <h2 className="text-2xl font-semibold text-gray-800">
          Welcome,{" "}
          <span className="text-violet-700">{session.user.name}</span> 👋
        </h2>
        <p className="text-gray-500 mt-2">Your personal notes dashboard</p>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Link
            href="/notes"
            className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-lg shadow-md transition transform hover:scale-105"
          >
            ✏️ View Notes
          </Link>
          <button
            onClick={() => signOut()}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg shadow-md transition transform hover:scale-105"
          >
            🚪 Sign Out
          </button>
        </div>
      </section>

      {/* ✨ Quick Actions Section */}
      <section className="mt-16 grid gap-6 sm:grid-cols-1 md:grid-cols-2 max-w-4xl w-full">
        <ActionCard
          icon="🗒️"
          title="Create a New Note"
          desc="Start capturing your ideas instantly."
          btn="Create Note"
          link="/notes/new"
        />
        <ActionCard
          icon="📂"
          title="View All Notes"
          desc="Access and organize your saved notes."
          btn="Open Notes"
          link="/notes"
        />
      </section>
        {/* 💡 Inspiration Section */}
        <section className="mt-24 max-w-3xl text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-violet-800 mb-4">
          “Your next big idea starts here.”
        </h2>
        <p className="text-gray-500 mb-8">
          Capture your thoughts and never lose inspiration again.
        </p>
        <Link
          href="/notes"
          className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-xl shadow-lg transition transform hover:scale-105"
        >
          Start Writing →
        </Link>
      </section>
    </main>
  );
}

function ActionCard({ icon, title, desc, btn, link }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition transform hover:-translate-y-1 text-center flex flex-col items-center">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-violet-700 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-4">{desc}</p>
      <Link
        href={link}
        className="bg-violet-600 hover:bg-violet-700 text-white px-5 py-2 rounded-lg transition"
      >
        {btn}
      </Link>
    </div>
  );
}




