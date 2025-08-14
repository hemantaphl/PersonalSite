import { useNavigate } from "react-router-dom";

export default function PassStrChkCard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/services/PassStrChk");
  };

  return (
    <div
      onClick={handleClick}
      className="border border-[#800080] bg-gradient-to-r from-gray-200 to-gray-100 transform transition duration-300 ease-in-out hover:scale-105 shadow-md hover:shadow-lg text-black rounded-md p-6 shadow-lg cursor-pointer"
    >
      <h2 className="text-xl font-bold flex items-center space-x-2">
        <i className="fas fa-lock"></i>
        <span>Password Test</span>

      </h2>
      <p className="text-black mt-2">
       Instantly check how strong your password is and get tips to create safer, more secure passwords.
      </p>
    </div>
  );
}
