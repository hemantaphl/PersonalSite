import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader/Preloader";
import SuccessModal from "../components/SuccessModal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false);

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwE6IYkBpfagX5cePAYSm-9jjsCwiXSiYtB3ZdAGweSWEXH4AYby5CQ2tNIV_A-FQaofw/exec";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setShowModal(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setShowModal(false), 4000);
    } catch (error) {
      console.error("Error!", error.message);
      alert("❌ There was an error sending your message.");
    }
  };

  return (
    <div className="pt-10 min-h-screen flex flex-col">
      <Preloader />
      <Navbar />

      <main className="flex-grow">
        <section className="py-32 bg-white text-gray-800 px-6 pt-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Connect</h2>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                Get in touch for collaboration, freelance opportunities, or questions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Contact Info */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-700">Address</h4>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">Kathmandu, Nepal</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Email</h4>
                  <a href="mailto:hello@hemantaphuyal.com.np" className="text-gray-600 text-sm mt-1 hover:text-gray-800">
                    hello@hemantaphuyal.com.np
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Phone</h4>
                  <p className="text-gray-600 text-sm mt-1">Not Available</p>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                ></textarea>
                <button
                  type="submit"
                  className="bg-purple-500 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-purple-800"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <SuccessModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
