import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Preloader from "../../components/Preloader/Preloader";

export default function DnsLookup() {
  const [domain, setDomain] = useState("");
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

const fetchDNS = async () => {
  setLoading(true);
  setRecords([]);
  setError("");

  try {
    const types = ["A", "AAAA", "MX", "CNAME", "NS", "TXT"];
    const results = [];

    for (let type of types) {
      const res = await fetch(
        `https://dns.google/resolve?name=${domain}&type=${type}`
      );
      const data = await res.json();

      if (data.Status === 3) {
        // NXDOMAIN: Domain does not exist
        setError("❌ Domain not found. Please check the spelling and try again.");
        setLoading(false);
        return;
      }

      if (data.Answer) {
        data.Answer.forEach((ans) => {
          results.push({
            type: type,
            name: ans.name,
            data: ans.data,
          });
        });
      }
    }

    if (results.length === 0) {
      setError("❌ No DNS records found. The domain may not exist or has no public records.");
    } else {
      setRecords(results);
    }

  } catch (err) {
    setError("⚠️ Failed to fetch DNS records. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="pt-10 min-h-screen flex flex-col bg-gradient-to-r from-gray-200 to-gray-100 ">
      <Preloader />
      <Navbar />

      <main className="flex-grow py-44 px-6 min-h-screen text-gray-900 pt-24 min-h-[calc(90vh-5rem-4rem)]">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/tools"
            className="inline-block mb-6 bg-[#800080] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-900 transition duration-300 ease-in-out transform hover:scale-105"
          >
            &larr; Back to Tools
          </Link>
          <h2 className="text-2xl font-bold mb-6 text-black">DNS Lookup Tool</h2>

          <div className="border border-[#800080] bg-gradient-to-r from-gray-200 to-gray-100 text-black rounded-xl p-6 shadow-lg">
            <label className="block mb-4 font-semibold text-black text-lg">
              🌐 Enter a domain name:
            </label>
            <form
            onSubmit={(e) => {
                e.preventDefault(); // prevent page refresh
                if (domain) fetchDNS(); // only run if domain is entered
            }}
            >
            <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="example.com"
                className="w-full p-3 rounded-md border border-gray-700 focus:border-[#800080] text-black text-sm focus:outline-none"
            />

            <button
                type="submit"
                disabled={!domain}
                className="cursor-pointer mt-4 bg-[#800080] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-900 transition duration-300 ease-in-out transform hover:scale-105"
            >
                Lookup DNS
            </button>
            </form>


            <small className="text-black text-xs pt-2 block">
              🔍 This tool uses public DNS-over-HTTPS (Google DNS API) to fetch records.
            </small>

            {loading && <p className="mt-4">⏳ Looking up records...</p>}

            {error && <p className="text-red-500 mt-4">{error}</p>}

            {records.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Results:</h3>
                <ul className="text-sm space-y-2">
                  {records.map((rec, index) => (
                    <li key={index} className="border-b pb-2">
                      <strong>{rec.type}</strong>: {rec.data} <br />
                      <span className="text-xs text-gray-600">{rec.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
