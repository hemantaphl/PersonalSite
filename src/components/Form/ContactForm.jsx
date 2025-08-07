import React, { useState } from "react";

export default function ContactForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwMD_YBUjCdsz6Q86LN2PLhHybZQbumKkk_iuYjjP8Qf-eFeHlY3FoAFpa-c6NeXnWDTA/exec";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
      setLoading(false);

      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Error!", error.message);
      alert("❌ There was an error sending your message.");
      setLoading(false);
    }
  };

  return (
    <>
      {/* You can handle loading outside this component */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-400 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-400 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <small className="text-gray-700 text-xs pt-1">
              Your email will remain confidential and never be shared.
            </small>
          </div>
        </div>

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-400 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-400 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="cursor-pointer bg-purple-700 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105 inline-block disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </>
  );
}
