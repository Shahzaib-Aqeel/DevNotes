"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import DashboardPage from "./dashboard/page";

export default function Home() {
  const { data: session } = useSession();
  if (session) return <DashboardPage user={session.user} />;
  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-b from-violet-100 via-white to-violet-50 text-center px-6">
      {/* Hero Section */}
      <section className="mt-28 max-w-3xl animate-fadeIn">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-violet-800 mb-4 leading-tight">
          Welcome to <span className="text-violet-900">DevNotes</span> 🚀
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
          Organize your thoughts, manage your projects, and keep your ideas
          safe — all in one simple, beautiful place.
        </p>
        <button
          onClick={() => signIn("google")}
          className="bg-violet-600 hover:bg-violet-700 text-white px-10 py-3 rounded-xl text-lg font-medium shadow-lg transition transform hover:scale-105"
        >
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full px-4">
        <FeatureCard
          icon="💡"
          title="Simple & Clean"
          desc="Focus on what matters — your notes. No clutter, just a sleek interface built for productivity."
        />
        <FeatureCard
          icon="🔒"
          title="Secure & Private"
          desc="Your data stays yours. Notes are encrypted and safely stored in the cloud."
        />
        <FeatureCard
          icon="⚡"
          title="Blazing Fast"
          desc="Powered by Next.js for instant performance and smooth experience on all devices."
        />
      </section>

      {/* Call To Action */}
      <section className="mt-24 mb-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
          Start capturing your best ideas today
        </h2>
        <button
          onClick={() => signIn("google")}
          className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-xl text-lg shadow-lg transition transform hover:scale-105"
        >
          Get Started for Free
        </button>
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 sm:p-8 hover:shadow-xl transition transform hover:-translate-y-1">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-violet-700 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base">{desc}</p>
    </div>
  );
}