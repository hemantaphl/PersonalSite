import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Preloader from "../../components/Preloader/Preloader";

export default function FindMyIP() {
  const [ipData, setIpData] = useState(null);
  const [locationSource, setLocationSource] = useState("");
  const [loading, setLoading] = useState(true);
  const [typedData, setTypedData] = useState("");

  const openCageAPIKey = "72af9bf2c326482d8adf06b141275a96";

  const typeWriter = (text, callback) => {
    let i = 0;
    const speed = 15;
    setTypedData(""); // reset before typing
    const type = () => {
      if (i < text.length) {
        setTypedData((prev) => prev + text.charAt(i));
        i++;
        setTimeout(type, speed);
      } else if (callback) callback();
    };
    type();
  };

  const fetchLocationFromGPS = () => {
    typeWriter("📡 Scanning for GPS location...", () => {});
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await axios.get(
            `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${openCageAPIKey}`
          );
          const result = response.data.results[0];
          const components = result.components;

          const city =
            components.city ||
            components.town ||
            components.village ||
            components.suburb ||
            components.neighbourhood ||
            "Unknown";

          setLocationSource("gps");
          setIpData({
            ip: await getMyIP(),
            city,
            region: components.state || "Unknown",
            country: components.country || "Unknown",
            country_code: components.country_code || "N/A",
            continent: components.continent || "N/A",
            timezone: result.annotations?.timezone || { id: "N/A" },
            postal: components.postcode || "N/A",
            isp: "GPS-based location",
            asn: "N/A",
            latitude,
            longitude,
          });
          typeWriter("✅ Accurate GPS location retrieved...", () => setLoading(false));
        } catch (error) {
          console.error("Reverse geocoding failed:", error);
          fallbackToIP();
        }
      },
      (error) => {
        console.warn("Geolocation failed:", error);
        fallbackToIP();
      }
    );
  };

  const getMyIP = async () => {
    try {
      const ipRes = await axios.get("https://api.ipify.org?format=json");
      return ipRes.data.ip;
    } catch {
      return "Unavailable";
    }
  };

  const fallbackToIP = async () => {
    typeWriter("🌐 Scanning via IP lookup...", () => {});
    try {
      const ipRes = await axios.get("https://api.ipify.org?format=json");
      const ip = ipRes.data.ip;

      const geoRes = await axios.get(`https://ipwho.is/${ip}`);
      if (geoRes.data.success) {
        setLocationSource("ip");
        setIpData({ ip, ...geoRes.data });
        typeWriter("📍 IP-based location retrieved...", () => setLoading(false));
      } else {
        alert("Failed to retrieve IP data.");
        setLoading(false);
      }
    } catch (err) {
      console.error("IP fetch failed:", err);
      alert("Could not retrieve location data.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLocationFromGPS();
  }, []);

  return (
    <div className="w-full pt-10 min-h-screen flex flex-col bg-gradient-to-r from-gray-200 to-gray-100">
      <Preloader />
      <Navbar />
        <main className="min-h-screen flex-grow py-32 px-6 pt-24 min-h-[calc(90vh-5rem-4rem)]">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/tools"
              className="inline-block mb-6 bg-purple-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-800 transition duration-300 ease-in-out transform hover:scale-105"
            >
              &larr; Back to Tools
            </Link>

            <h2 className="text-2xl font-bold mb-6">IP Information</h2>

            {loading ? (
              <p className="text-black text-lg animate-pulse">{typedData}</p>
            ) : ipData ? (
              <div className="border border-purple-400 bg-gradient-to-r from-gray-200 to-gray-100 text-black rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">
                  Your IP Address: <span className="text-black">{ipData.ip}</span>
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2 text-lg">📍 Location Details</h4>
                    <ul className="space-y-1">
                      <li><strong>City:</strong> {ipData.city}</li>
                      <li><strong>Region:</strong> {ipData.region}</li>
                      <li><strong>Country:</strong> {ipData.country} ({ipData.country_code})</li>
                      <li><strong>Continent:</strong> {ipData.continent}</li>
                      <li><strong>Time Zone:</strong> {ipData.timezone?.id || "N/A"}</li>
                      <li><strong>Postal Code:</strong> {ipData.postal || "N/A"}</li>
                      <li><strong>ISP:</strong> {ipData.connection?.isp || ipData.isp || "N/A"}</li>
                      <li><strong>ASN:</strong> {ipData.connection?.asn || ipData.asn || "N/A"}</li>
                      <li><strong>Latitude:</strong> {ipData.latitude}</li>
                      <li><strong>Longitude:</strong> {ipData.longitude}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-lg">🗺️ Location on Map</h4>
                    {ipData.latitude &&
                    ipData.longitude &&
                    ipData.latitude !== 0 &&
                    ipData.longitude !== 0 ? (
                      <iframe
                        className="rounded-lg w-full h-64"
                        src={`https://maps.google.com/maps?q=${ipData.latitude},${ipData.longitude}&z=14&output=embed`}
                        title="IP Location"
                        loading="lazy"
                      ></iframe>
                    ) : (
                      <p className="text-sm text-red-200">⚠️ Map not available for this location.</p>
                    )}
                  </div>
                </div>
                <p className="text-sm mt-4 opacity-80">
                  {locationSource === "gps"
                    ? "✅ Location retrieved via GPS (Browser)"
                    : "⚠️ Location estimated via IP and ISP"}
                </p>
              </div>
            ) : (
              <p className="text-red-500">Could not load IP information.</p>
            )}
          </div>
        </main>
        <Footer />
    </div>
  );
}
