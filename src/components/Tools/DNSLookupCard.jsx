import { useNavigate } from "react-router-dom";

export default function DnsLookupCard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/services/DnsLookup");
  };

  return (
    <div
      onClick={handleClick}
      className="border border-purple-400 bg-gradient-to-r from-gray-200 to-gray-100 transform transition duration-300 ease-in-out hover:scale-105 shadow-md hover:shadow-lg text-black rounded-md p-6 shadow-lg cursor-pointer"
    >
      <h2 className="text-xl font-bold flex items-center space-x-2">
        <i className="fas fa-globe"></i>
        <span>DNS Lookup</span>
        <span className="bg-green-600 text-xs font-bold ml-2 px-2 py-1 rounded">
          NEW
        </span>
      </h2>
      <p className="text-black mt-2">
        Quickly look up DNS records (A, MX, CNAME, TXT, etc.) for any domain.
      </p>
    </div>
  );
}
