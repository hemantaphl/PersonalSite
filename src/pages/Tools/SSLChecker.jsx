import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Preloader from "../../components/Preloader/Preloader";

export default function SslChecker() {
  const [domain, setDomain] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const checkSSL = async () => {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      let url = `https://api.ssllabs.com/api/v4/analyze?host=${encodeURIComponent(domain)}&startNew=on&all=done`;
      let res = await fetch(url);
      let data = await res.json();

      let status = data.status;
      while (status === "DNS" || status === "IN_PROGRESS") {
        await new Promise((r) => setTimeout(r, status === "DNS" ? 5000 : 10000));
        res = await fetch(`https://api.ssllabs.com/api/v4/analyze?host=${encodeURIComponent(domain)}&all=done`);
        data = await res.json();
        status = data.status;
      }

      if (status === "READY") {
        const endpoint = data.endpoints?.[0];
        const cert = endpoint?.details?.cert;
        setResult({
          grade: endpoint?.grade || "N/A",
          commonName: cert?.commonNames?.[0] || "N/A",
          issuer: cert?.issuerLabel || "N/A",
          validFrom: cert ? new Date(cert.notBefore * 1000).toLocaleDateString() : "N/A",
          validTo: cert ? new Date(cert.notAfter * 1000).toLocaleDateString() : "N/A",
        });
      } else {
        setError(`⚠️ SSL Labs returned status: ${status}. Please try again later.`);
      }
    } catch (err) {
      setError("❌ Failed to fetch SSL info. Invalid domain or API error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-10 min-h-screen flex flex-col bg-gradient-to-r from-gray-200 to-gray-100 ">
      <Preloader />
      <Navbar />

      <main className="min-h-screen flex-grow py-44 px-6 pt-24 text-gray-900 min-h-[calc(90vh-5rem-4rem)]">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/tools"
            className="inline-block mb-6 bg-[#800080] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-800 transition duration-300 ease-in-out transform hover:scale-105"
          >
            ← Back to Tools
          </Link>
          <h2 className="text-2xl font-bold mb-6 text-black">
            SSL Certificate Checker
          </h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (domain) checkSSL();
            }}
          >
            <div className="border border-[#800080] bg-gradient-to-r from-gray-200 to-gray-100 text-black rounded-xl p-6 shadow-lg">
              <label className="block mb-4 font-semibold text-black text-lg">
                🔐 Enter a domain:
              </label>
              <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="example.com"
                className="w-full p-3 rounded-md border border-gray-900 focus:border-[#800080] text-black text-sm focus:outline-none"
              />

              <button
                type="submit"
                disabled={!domain || loading}
                className="mt-4 bg-[#800080] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-800 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Check SSL
              </button>

              <small className="text-black text-xs pt-2 block">
                🛡️ Powered by SSL Labs API – scans may take 60+ seconds.
              </small>

              {loading && <p className="mt-4">⏳ Performing SSL evaluation...</p>}

              {error && (
                <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm">
                  {error}
                </div>
              )}

              {result && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2">Certificate Info:</h3>
                  <ul className="text-sm space-y-2">
                    <li>
                      <strong>Grade:</strong> {result.grade}
                    </li>
                    <li>
                      <strong>Domain (CN):</strong> {result.commonName}
                    </li>
                    <li>
                      <strong>Issuer:</strong> {result.issuer}
                    </li>
                    <li>
                      <strong>Valid From:</strong> {result.validFrom}
                    </li>
                    <li>
                      <strong>Valid To:</strong> {result.validTo}
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
