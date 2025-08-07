import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader/Preloader";
import IPCheckerCard from "../components/Tools/IPCheckerCard";
import PassStrChkCard from "../components/Tools/PassStrChkCard";
import SSLCheckerCard from "../components/Tools/SSLCheckerCard";
import DnsLookupCard from "../components/Tools/DNSLookupCard";

export default function Tools() {
  const services = [
    { id: "dns-lookup", component: <DnsLookupCard /> },
    { id: "ssl-checker", component: <SSLCheckerCard /> },
    { id: "ip-checker-1", component: <IPCheckerCard /> },
    { id: "pass-strength-checker-1", component: <PassStrChkCard /> },

  ];

  return (
    <div className="pt-10 min-h-screen flex flex-col bg-[#0D1117]">
      <Preloader />
      <Navbar />
        <main className="flex-grow">
          <section className="py-32 bg-gradient-to-r from-gray-200 to-gray-100  text-gray-800 px-6 pt-24">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-black">
                  Tools
                </h2>
                <p className="text-black mt-2 text-sm sm:text-base">
                  I offer a growing collection of easy-to-use tools on my personal website, with more helpful features coming soon.
                </p>
              </div>

              {/* Flex container for responsive card layout */}
              <div className="flex flex-wrap justify-center gap-6">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="w-full sm:w-[400px] flex"
                  >
                    {service.component}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      <Footer />
    </div>
  );
}
