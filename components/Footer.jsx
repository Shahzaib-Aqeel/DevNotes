"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 mt-5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-8">

        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-semibold text-white mb-2">DevNotes</h2>
          <p className="text-sm max-w-sm">
            Organize your ideas, stay productive, and manage your notes easily.
          </p>
        </div>


        <div className="flex flex-col sm:flex-row gap-4 text-sm text-center">
          <a
            href="/about"
            className="hover:text-white transition"
          >
            About
          </a>
          <a
            href="/privacy-policy"
            className="hover:text-white transition"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="hover:text-white transition"
          >
            Terms & Conditions
          </a>
        </div>

        <div className="flex gap-5">
          <a
            href="https://github.com/Shahzaib-Aqeel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition text-xl"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://x.com/ShabbyCodes"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition text-xl"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/shahzaib-aqeel-6168bb388/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition text-xl"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>


      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="text-white font-medium">DevNotes</span>.  
        All rights reserved.
      </div>
    </footer>
  );
}
