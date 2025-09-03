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
    <section id="skills" className="min-h-screen bg-stone-900 text-white flex items-center py-20 px-4 font-sans">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Header with improved hierarchy */}
        <div className="text-center mb-16">
          <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-4 opacity-90">
            Expertise & Capabilities
          </p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 font-heading">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto"></div>
        </div>

        {/* Skills Grid with cards and icons */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-neutral-800 rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-emerald-900/20 hover:-translate-y-1 group"
            >
              {/* Category Header with icon */}
              <div className="bg-neutral-700/50 p-6 flex items-center gap-4 border-b border-neutral-700">
                <div className="w-12 h-12 rounded-lg bg-neutral-800/80 flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-medium text-white tracking-wide font-heading">
                  {category.title}
                </h3>
              </div>

              {/* Skills List with icons */}
              <div className="p-6 space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center p-3 bg-neutral-700/30 rounded-lg hover:bg-neutral-700/60 transition-all duration-200 group-hover:translate-x-1"
                  >
                    <div className="w-8 h-8 flex items-center justify-center mr-4">
                      {skill.icon}
                    </div>
                    <span className="text-gray-300 font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section with improved design */}
        <div className="bg-neutral-800 rounded-2xl p-8 md:p-10 shadow-xl">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-semibold text-white mb-2 font-heading">
              By the Numbers
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              A quantitative look at my experience and learning journey
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "20+", label: "Projects Completed", icon: <BsLightningChargeFill className="text-yellow-400" /> },
              { value: "3+", label: "Years Learning", icon: <FaCode className="text-blue-400" /> },
              { value: "10+", label: "Technologies", icon: <FaReact className="text-emerald-400" /> },
              { value: "∞", label: "Continuous Learning", icon: <BsInfinity className="text-purple-400" /> }
            ].map((stat, index) => (
              <div key={index} className="text-center p-5 bg-neutral-700/30 rounded-xl hover:bg-neutral-700/50 transition-all duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-neutral-800/70 flex items-center justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-light text-emerald-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-gray-400 tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}