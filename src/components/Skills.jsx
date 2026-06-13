import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma, FaCode } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiFlutter, SiFlask, SiMysql, SiFirebase } from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";
import { BsLightningChargeFill, BsInfinity } from "react-icons/bs";
import { DiVisualstudio } from 'react-icons/di';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaReact className="text-blue-400 w-6 h-6" />,
      skills: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
        { name: "Flutter", icon: <SiFlutter className="text-cyan-500" /> }
      ]
    },
    {
      title: "Backend",
      icon: <FaNodeJs className="text-green-500 w-6 h-6" />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Flask", icon: <SiFlask /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
        { name: "Firestore", icon: <SiFirebase className="text-yellow-500" /> },
        { name: "REST APIs", icon: <AiOutlineApi className="text-purple-400" /> }
      ]
    },
    {
      title: "Tools",
      icon: <FaCode className="text-emerald-400 w-6 h-6" />,
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "GitHub", icon: <FaGithub className="text-gray-200" /> },
        { name: "Figma", icon: <FaFigma className="text-purple-400" /> },
        { name: "VS Code", icon: <DiVisualstudio className="text-blue-500" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen bg-[#f2f0ea] text-[#111111] flex items-center py-20 px-4 font-sans">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Header */}
        <div className="mb-16 flex items-center gap-4 sm:gap-5">
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-4xl sm:text-5xl font-semibold leading-none text-[#0f172a] font-heading">/</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-none text-[#0f172a] font-heading">
              skills
            </h2>
          </div>

          <div className="h-px flex-1 bg-black/15 mt-2 sm:mt-3" />

        </div>

        {/* Skills Grid with cards and icons */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-[#f8f6f1] rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-black/10 hover:-translate-y-1 group"
            >
              {/* Category Header with icon */}
              <div className="bg-[#efece6] p-6 flex items-center gap-4 border-b border-black/10">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-medium text-[#111111] tracking-wide font-heading">
                  {category.title}
                </h3>
              </div>

              {/* Skills List with icons */}
              <div className="p-6 space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center p-3 bg-white rounded-lg hover:bg-[#f0ede6] transition-all duration-200 group-hover:translate-x-1"
                  >
                    <div className="w-8 h-8 flex items-center justify-center mr-4">
                      {skill.icon}
                    </div>
                    <span className="text-[#555555] font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
