import { useNavigate } from "react-router-dom";

const techStacks = [
  {
    label: "HTML5",
    logoSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    link: "/tech/html5",
  },
  {
    label: "CSS3",
    logoSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    link: "/tech/css3",
  },
  {
    label: "JavaScript",
    logoSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    link: "/tech/javascript",
  },
  {
    label: "React",
    logoSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    link: "/tech/react",
  },
  {
    label: "Node.js",
    logoSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    link: "/tech/nodejs",
  },
  // Add more techs as needed
];

export default function TechStackIcons() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-white">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {techStacks.map(({ label, logoSrc, link }) => (
            <div
              key={label}
              className="flex items-center justify-center rounded-lg p-4 cursor-pointer"
              title={label}
              aria-label={label}
              onClick={() => navigate(link)}
            >
              <img
                src={logoSrc}
                alt={label}
                className="max-h-12 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
