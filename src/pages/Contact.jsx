import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader/Preloader";
import SuccessModal from "../components/Common/Modal/SuccessModal";
import SendingModal from "../components/Common/Modal/SendingModal";
import ContactForm from "../components/Form/ContactForm";

export default function Contact() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSuccess = () => {
    setShowModal(true);
    setTimeout(() => setShowModal(false), 4000);
  };

  return (
    <div className="pt-10 min-h-screen flex flex-col bg-gradient-to-r from-gray-200 to-gray-100 ">
      <Preloader />
      <Navbar />

      {/* Sending Modal */}
      <SendingModal show={loading} />

      <main className="flex-grow">
        <section className="py-32 px-6 pt-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold">Connect</h2>
              <p className="mt-2 text-sm sm:text-base text-gray-700">
                Get in touch for collaboration, freelance opportunities, or questions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Contact Info */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-sm mt-1 leading-relaxed text-gray-700">Kathmandu, Nepal</p>
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a
                    href="mailto:hello@hemantaphuyal.com.np"
                    className="text-sm mt-1 text-purple-700 hover:underline"
                  >
                    hello@hemantaphuyal.com.np
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-sm mt-1 text-gray-700">Not Available</p>
                </div>
              </div>

              {/* Contact Form */}
              <ContactForm
                onSuccess={handleSuccess}
                setLoading={setLoading} // Optional, if you want to manage loading from parent
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <SuccessModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
