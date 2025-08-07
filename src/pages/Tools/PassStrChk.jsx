import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Preloader from "../../components/Preloader/Preloader";
import ScrollToTop from "../../components/Common/ScrollToTop";

export default function PasswordStrengthChecker() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState({ label: "", color: "" });
  const [hints, setHints] = useState([]);


  const evaluateStrength = (pwd) => {
    const newHints = [];

    const hasUpper = /[A-Z]/.test(pwd);
    const hasLower = /[a-z]/.test(pwd);
    const hasNumber = /[0-9]/.test(pwd);
    const hasSymbol = /[\W_]/.test(pwd);
    const isLong8 = pwd.length >= 8;
    const isLong12 = pwd.length >= 12;

    if (!isLong8) newHints.push("Use at least 8 characters");
    if (!hasUpper) newHints.push("Add at least one uppercase letter");
    if (!hasLower) newHints.push("Add at least one lowercase letter");
    if (!hasNumber) newHints.push("Include at least one number");
    if (!hasSymbol) newHints.push("Include a special character (@, #, $, etc.)");
    if (!isLong12) newHints.push("Use 12+ characters for strong security");

    let label = "Weak";
    let color = "text-rose-400";

    if (isLong8 && hasUpper && hasLower && (hasNumber || hasSymbol)) {
      label = "Moderate";
      color = "text-amber-400";
    }

    if (isLong12 && hasUpper && hasLower && hasNumber && hasSymbol) {
      label = "Strong";
      color = "text-emerald-400";
    }

    if (pwd.length >= 16 && hasUpper && hasLower && hasNumber && hasSymbol) {
      label = "Very Strong";
      color = "text-purple-300";
    }

    return { result: { label, color }, hints: newHints };
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    const { result, hints } = evaluateStrength(value);
    setStrength(result);
    setHints(hints);
  };

  return (
    <div className="bg-gradient-to-r from-gray-200 to-gray-100 text-gray-900 min-h-screen flex flex-col">
      <Preloader />
      <Navbar />
      
      {/* Spacer to offset fixed navbar height (adjust height if needed) */}
      <div className="h-20"></div>

      <main className="flex-grow pt-8 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/tools"
            className="inline-block mb-6 bg-purple-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-800 transition duration-300 ease-in-out transform hover:scale-105"
          >
            &larr; Back to Tools
          </Link>
          <h2 className="text-2xl font-bold mb-6 text-black">Password Strength Checker</h2>

          <div className="border border-purple-400 bg-gradient-to-r from-gray-200 to-gray-100 text-black rounded-xl p-6 shadow-lg">
            <label className="block mb-4 font-semibold text-black text-lg">
              🔐 Enter your password:
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handleChange}
              placeholder="Type your password..."
              className="w-full p-3 rounded-md border border-gray-700 focus:border-purple-700 text-black text-sm focus:outline-none"
            />

            <label className="flex items-center mt-3 text-sm text-black">
              <input
                type="checkbox"
                className="mr-2"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              Show Password
            </label>

            <small className="text-black text-xs pt-2 block">
              🔒 Your password is never stored or sent anywhere. All checks run locally in your browser.
            </small>
            {password && (
              <div className="mt-4">
                <p className={`font-semibold ${strength.color}`}>
                  Strength: {strength.label}
                </p>

                {hints.length > 0 && (
                  <ul className="mt-2 text-sm list-disc list-inside opacity-90">
                    {hints.map((hint, index) => (
                      <li key={index}>{hint}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
