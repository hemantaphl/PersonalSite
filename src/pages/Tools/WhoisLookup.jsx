import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Preloader from "../../components/Preloader/Preloader";

export default function WhoisLookup() {
  const [domain, setDomain] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWhois = async () => {
    if (!domain) return;
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch(`https://api.api-ninjas.com/v1/whois?domain=${domain}`, {
        headers: {
          'X-Api-Key': '/OjA7f1oCo8EhA3o/qFE8g==HKjDO9pA5se7ZBLY'
        }
      });

      if (!response.ok) throw new Error("Failed to fetch WHOIS data");

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWhois();
  };

  return (
    <div className="bg-gradient-to-r from-gray-200 to-gray-100 min-h-screen text-gray-900 flex flex-col">
      <Preloader />
      <Navbar />
      <div className="h-20"></div>

      <main className="min-h-screen flex-grow pt-8 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/tools"
            className="inline-block mb-6 bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-900 transition duration-300 ease-in-out transform hover:scale-105"
          >
            &larr; Back to Tools
          </Link>
          <h2 className="text-2xl font-bold mb-6 text-black">WHOIS Lookup</h2>

          <div className="border border-purple-400 bg-gradient-to-r from-gray-200 to-gray-100 text-black rounded-xl p-6 shadow-lg">
            <form onSubmit={handleSubmit}>
              <label className="block mb-4 font-semibold text-black text-lg">
                🌐 Enter a domain name:
              </label>
              <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="e.g., example.com"
                className="w-full p-3 rounded-md border border-gray-700 focus:border-purple-700 text-sm focus:outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition duration-300 ease-in-out transform hover:scale-105"
              >
                {loading ? "Checking..." : "Lookup"}
              </button>
            </form>

            {error && (
              <p className="mt-4 text-sm text-red-500 font-semibold">{error}</p>
            )}

            {result && (
              <div className="mt-6 text-sm space-y-2">
                <p><strong>Domain Name:</strong> {result.domain_name}</p>
                <p><strong>Registrar:</strong> {result.registrar}</p>
                <p><strong>Creation Date:</strong> {result.creation_date}</p>
                <p><strong>Expiration Date:</strong> {result.expiration_date}</p>
                <p><strong>Status:</strong> {result.status}</p>
                <p><strong>Name Servers:</strong> {result.name_servers?.join(', ')}</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
