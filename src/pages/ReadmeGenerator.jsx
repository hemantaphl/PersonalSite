import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const skillCategories = {
  "Programming Languages": [
    "c", "cpp", "java", "python", "javascript", "typescript", "go", "rust"
  ],
  "Frontend Development": [
    "html5", "css3", "react", "vuejs", "angular", "tailwind", "bootstrap"
  ],
  "Backend Development": [
    "nodejs", "express", "django", "spring", "flask", "nestjs"
  ],
  "Database": [
    "mysql", "postgresql", "mongodb", "sqlite", "redis"
  ]
};

const socialLinks = [
  "github", "linkedin", "twitter", "devto", "codepen", "stackoverflow",
  "medium", "youtube", "facebook", "instagram"
];

export default function AdvancedReadmeGenerator() {
  const [form, setForm] = useState({
    name: "",
    subtitle: "",
    work: "",
    workLink: "",
    collaborate: "",
    collaborateLink: "",
    help: "",
    helpLink: "",
    learning: "",
    ask: "",
    reach: "",
    projects: "",
    blog: "",
    resume: "",
    funfact: "",
    selectedSkills: [],
    socials: Object.fromEntries(socialLinks.map((s) => [s, ""])),
    showStatsCard: true,
    showTrophies: true,
    showVisitorBadge: true
  });

  const [generated, setGenerated] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkillToggle = (skill) => {
    setForm((prev) => {
      const updated = prev.selectedSkills.includes(skill)
        ? prev.selectedSkills.filter((s) => s !== skill)
        : [...prev.selectedSkills, skill];
      return { ...prev, selectedSkills: updated };
    });
  };

  const handleSocialChange = (platform, value) => {
    setForm((prev) => ({
      ...prev,
      socials: { ...prev.socials, [platform]: value }
    }));
  };

  const generateReadme = () => {
    const {
      name,
      subtitle,
      work,
      workLink,
      collaborate,
      collaborateLink,
      help,
      helpLink,
      learning,
      ask,
      reach,
      projects,
      blog,
      resume,
      funfact,
      selectedSkills,
      socials,
      showStatsCard,
      showTrophies,
      showVisitorBadge
    } = form;

    let readme = `# Hi \u{1F44B}, I'm ${name}

### ${subtitle}

`; 
    if (work) readme += `\u{1F52D} I’m currently working on [${work}](${workLink})\n`;
    if (collaborate) readme += `\u{1F91D} I’m looking to collaborate on [${collaborate}](${collaborateLink})\n`;
    if (help) readme += `\u{1F64F} I’m looking for help with [${help}](${helpLink})\n`;
    if (learning) readme += `\u{1F331} I’m currently learning ${learning}\n`;
    if (ask) readme += `\u{1F4AC} Ask me about ${ask}\n`;
    if (reach) readme += `\u{1F4E7} How to reach me: ${reach}\n`;
    if (projects) readme += `\u{1F468}\u200D\u{1F4BB} All of my projects are available at [Portfolio](${projects})\n`;
    if (blog) readme += `\u{1F4DD} I regularly write articles on [Blog](${blog})\n`;
    if (resume) readme += `\u{1F4C4} Know about my experiences [Resume](${resume})\n`;
    if (funfact) readme += `\u{26A1} Fun fact: ${funfact}\n`;

    readme += `\n### \u{1F6E0}\uFE0F Languages and Tools:\n`;
    readme += selectedSkills.map(skill => `![${skill}](https://img.shields.io/badge/-${skill}-05122A?style=flat&logo=${skill})`).join(" ") + "\n";

    readme += `\n### \u{1F4E2} Connect with me:\n`;
    for (let [platform, username] of Object.entries(socials)) {
      if (username) {
        let url = platform === "devto"
          ? `https://dev.to/${username}`
          : platform === "medium"
          ? `https://medium.com/@${username}`
          : platform === "stackoverflow"
          ? `https://stackoverflow.com/users/${username}`
          : platform === "youtube"
          ? `https://youtube.com/${username}`
          : `https://${platform}.com/${username}`;

        readme += `[![${platform}](https://img.shields.io/badge/${platform}-${username}-05122A?style=flat&logo=${platform})](${url})\n`;
      }
    }

    if (showVisitorBadge) readme += `\n![Visitor Count](https://komarev.com/ghpvc/?username=${socials.github}&label=Profile%20views&color=0e75b6&style=flat)\n`;
    if (showStatsCard) readme += `![GitHub stats](https://github-readme-stats.vercel.app/api?username=${socials.github}&show_icons=true&theme=radical)\n`;
    if (showTrophies) readme += `[![trophy](https://github-profile-trophy.vercel.app/?username=${socials.github})](https://github.com/ryo-ma/github-profile-trophy)\n`;

    setGenerated(readme.trim());
  };

  return (
    <div className="bg-white min-h-screen flex flex-col pt-10">
      <Navbar />

      <main className="flex-grow px-6 py-10 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-slate-800 mb-8">
          🚀 Advanced GitHub README Generator
        </h1>

        <div className="grid gap-4">
          {[
            ["Name", "name"],
            ["Subtitle", "subtitle"],
            ["Current Work", "work"],
            ["Work Link", "workLink"],
            ["Collaborate On", "collaborate"],
            ["Collaborate Link", "collaborateLink"],
            ["Help With", "help"],
            ["Help Link", "helpLink"],
            ["Currently Learning", "learning"],
            ["Ask Me About", "ask"],
            ["Email / Contact", "reach"],
            ["Portfolio", "projects"],
            ["Blog", "blog"],
            ["Resume", "resume"],
            ["Fun Fact", "funfact"]
          ].map(([label, key]) => (
            <div key={key}>
              <label className="block font-medium text-slate-700">{label}</label>
              <input
                type="text"
                name={key}
                value={form[key]}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border rounded-md border-slate-300"
              />
            </div>
          ))}
        </div>

        <h2 className="text-xl mt-8 font-semibold text-slate-800">Select Your Tech Stack:</h2>
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="my-4">
            <h3 className="font-medium text-purple-600">{category}</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {skills.map(skill => (
                <button
                  key={skill}
                  onClick={() => handleSkillToggle(skill)}
                  className={`px-3 py-1 rounded-full border ${form.selectedSkills.includes(skill) ? "bg-purple-600 text-white" : "bg-gray-100 text-slate-800"}`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        ))}

        <h2 className="text-xl mt-8 font-semibold text-slate-800">Social Links:</h2>
        {socialLinks.map((platform) => (
          <div key={platform} className="mb-2">
            <label className="block font-medium capitalize text-slate-700">{platform}</label>
            <input
              type="text"
              value={form.socials[platform]}
              onChange={(e) => handleSocialChange(platform, e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-md border-slate-300"
            />
          </div>
        ))}

        <h2 className="text-xl mt-8 font-semibold text-slate-800">Add-ons:</h2>
        <label className="block mb-2">
          <input type="checkbox" checked={form.showVisitorBadge} onChange={() => setForm(prev => ({ ...prev, showVisitorBadge: !prev.showVisitorBadge }))} /> Show Visitor Badge
        </label>
        <label className="block mb-2">
          <input type="checkbox" checked={form.showStatsCard} onChange={() => setForm(prev => ({ ...prev, showStatsCard: !prev.showStatsCard }))} /> Show GitHub Stats Card
        </label>
        <label className="block mb-2">
          <input type="checkbox" checked={form.showTrophies} onChange={() => setForm(prev => ({ ...prev, showTrophies: !prev.showTrophies }))} /> Show GitHub Trophies
        </label>

        <div className="text-center mt-6">
          <button
            onClick={generateReadme}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 font-medium"
          >
            Generate README
          </button>
        </div>

        {generated && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-slate-800 mb-3">
              📄 Generated README
            </h2>
            <textarea
              readOnly
              rows="25"
              className="w-full p-4 font-mono border border-slate-300 rounded-md bg-slate-50"
              value={generated}
            />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}