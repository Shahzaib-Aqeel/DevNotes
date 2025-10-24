"use client";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,    
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,   
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY      
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("❌ Failed to send message. Try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-violet-100 via-white to-violet-50 py-10 px-6 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-violet-700 mb-6 text-center">
          📬 Contact Us
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-violet-400 outline-none text-black"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-violet-400 outline-none text-black"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message..."
            value={form.message}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 h-40 resize-none focus:ring-2 focus:ring-violet-400 outline-none text-black"
            required
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`bg-violet-600 hover:bg-violet-700 text-white font-medium py-2 rounded-lg transition ${
              loading ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </main>
  );
}
