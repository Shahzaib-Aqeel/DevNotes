"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-violet-100 via-white to-violet-50 py-20 px-6">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10 border border-violet-100"
      >
        <h1 className="text-5xl font-bold mb-8 text-center text-violet-700">
          Terms & Conditions
        </h1>

        <p className="text-lg mb-8 leading-relaxed text-gray-700 text-center">
          Welcome to <span className="font-semibold text-violet-700">DevNotes</span>.  
          By accessing or using this website, you agree to the following Terms & Conditions.  
          Please read them carefully before using the site.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-violet-600">
              1. Use of Service
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              DevNotes is provided for personal and educational purposes.  
              You agree not to misuse the service for illegal, harmful, or malicious activities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-violet-600">
              2. Account Responsibility
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              You are responsible for maintaining the security of your account and any activity that occurs under it.  
              DevNotes will not be liable for any loss or damage caused by unauthorized access to your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-violet-600">
              3. Content Ownership
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              You own the content you create on DevNotes.  
              However, by using the service, you grant us permission to store and process your content for functionality purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-violet-600">
              4. Privacy
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              We respect your privacy. Your data will never be sold or shared with third parties.  
              Review our Privacy Policy to learn how we handle your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-violet-600">
              5. Changes to Terms
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              DevNotes reserves the right to modify these terms at any time.  
              Continued use of the site means you accept the updated terms.
            </p>
          </section>
        </div>

        <p className="text-center mt-14 text-gray-600 text-lg">
          Last updated: <span className="font-semibold text-violet-700">October 2025</span>
        </p>
      </motion.section>
    </main>
  );
}
