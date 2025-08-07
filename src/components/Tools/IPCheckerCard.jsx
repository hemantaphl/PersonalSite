import { useNavigate } from "react-router-dom";

export default function IPCheckerCard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/services/MyIP");
  };

  return (
    <div
      onClick={handleClick}
      className="border border-purple-400 bg-gradient-to-r from-gray-200 to-gray-100 transform transition duration-300 ease-in-out hover:scale-105 shadow-md hover:shadow-lg text-black rounded-md p-6 shadow-lg cursor-pointer"
    >
      <h2 className="text-xl font-bold flex items-center space-x-2">
        <i className="fas fa-network-wired"></i>
        <span>Find My IP</span>

      </h2>
      <p className="text-black mt-2">
        Easily check your current public IP address along with basic location info and network provider details.
      </p>
    </div>
  );
}
