import { useState } from "react";

export default function SubscriberForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzzP9a_cO7vtVknQ-3PprdGIrEufTn3NkPvAJAe_Hhb1GzgdD8UZJrfinEPPDU8MyhCow/exec";

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
        body: JSON.stringify({ email }),
      });

      setEmail("");
      alert("✅ Subscription successful! Check your email.");
    } catch (error) {
      alert("❌ Subscription failed. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <input
          type="email"
          required
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-gradient-to-r from-gray-200 to-gray-100 border border-gray-700 rounded-lg py-3 px-4 placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#800080] hover:bg-gray-700 text-white rounded-lg px-4 py-1 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "..." : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          )}
        </button>
      </div>
      <p className="mt-2 text-xs text-gray-700">No spam, unsubscribe at any time.</p>
    </form>
  );
}
