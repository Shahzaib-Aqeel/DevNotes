"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-violet-100 via-white to-violet-50 py-20 px-6">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10 border border-violet-100"
      >
        <h1 className="text-5xl font-bold mb-8 text-center text-violet-700">
          About DevNotes
        </h1>

        <p className="text-lg mb-8 leading-relaxed text-gray-700 text-center">
          DevNotes is a simple and elegant note-taking web app built for
          developers, students, and anyone who loves staying organized.
          It helps you create, edit, and manage notes efficiently — all in one
          clean interface.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-violet-600">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              The mission of DevNotes is to provide a fast, distraction-free
              place to store your thoughts, project ideas, and daily plans —
              so you can focus more on creating and less on managing tools.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-violet-600">
              Why I Built This
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              I built DevNotes as part of my journey to become a full-stack web
              developer. The goal was to combine my frontend and backend skills
              using modern technologies like Next.js, MongoDB, and Tailwind CSS,
              while building something genuinely useful.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-violet-600">
              Tech Stack
            </h2>
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-1">
              <li>Next.js (Frontend + Backend)</li>
              <li>MongoDB (Database)</li>
              <li>NextAuth (Authentication)</li>
              <li>Tailwind CSS (Styling)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-violet-600">
              Future Plans
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              I plan to add features like tags, search, and cloud sync —
              making DevNotes even more powerful for daily use.
            </p>
          </section>
        </div>

        <p className="text-center mt-14 text-gray-600 text-lg">
          Built with ❤️ by{" "}
          <span className="font-semibold text-violet-700">Shabby</span>
        </p>
      </motion.section>
    </main>
  );
}
