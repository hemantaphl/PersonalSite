import { useNavigate } from "react-router-dom";

export default function WhoisLookupCard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/services/whoislookup");
  };

  return (
    <div
      onClick={handleClick}
      className="border border-[#800080] bg-gradient-to-r from-gray-200 to-gray-100 transform transition duration-300 ease-in-out hover:scale-105 shadow-md hover:shadow-lg text-black rounded-md p-6 shadow-lg cursor-pointer"
    >
      <h2 className="text-xl font-bold flex items-center space-x-2">
        <i className="fas fa-search"></i>
        <span>WHOIS Lookup</span>
        <span className="bg-green-600 text-xs font-bold ml-2 px-2 py-1 rounded">
          NEW
        </span>
      </h2>
      <p className="text-black mt-2">
        Quickly find domain registration info including registrar, status, and expiration date.
      </p>
    </div>
  );
}
