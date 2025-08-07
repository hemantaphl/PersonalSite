import { useEffect, useState } from "react";
import Favicon from "../../assets/images/favicon.ico";

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1000); // Simulated delay
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-purple-500 dark:bg-purple-800 z-[9999] flex items-center justify-center transition-opacity duration-700">
      <img src={Favicon} alt="Loading..." className="w-12 h-12 animate-pulse" />
    </div>
  );
}
