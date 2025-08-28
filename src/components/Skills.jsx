export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Flutter"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Flask", "MySQL", "Firestore", "REST APIs"]
    },
    {
      title: "AI/ML",
      skills: ["Python", "TensorFlow", "scikit-learn", "Data Analysis"]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Figma", "VS Code", "Firebase"]
    }
  ];

  return (
    <section id="skills" className="min-h-screen bg-stone-900 text-white flex items-center py-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Header with improved hierarchy */}
        <div className="text-center mb-16">
          <p className="text-green-400 text-sm font-medium tracking-widest uppercase mb-4 opacity-90">
            Expertise & Capabilities
          </p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-green-400 mx-auto"></div>
        </div>

        {/* Skills Grid with enhanced visual design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-neutral-750 rounded-xl p-8 transition-all duration-300 hover:bg-neutral-700/50 group"
            >
              {/* Category Header with icon placeholder */}
              <div className="flex items-center mb-6">
                <div className="w-3 h-8 bg-green-400 rounded-sm mr-4"></div>
                <h3 className="text-2xl font-semibold text-white tracking-wide">
                  {category.title}
                </h3>
              </div>

              {/* Skills List with better visual treatment */}
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center py-3 px-4 bg-neutral-700/30 rounded-lg transition-all duration-300 hover:bg-neutral-700/60 hover:translate-x-1"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <span className="text-gray-300 text-sm font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section with improved layout */}
        <div className="bg-neutral-750 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-semibold text-white mb-2">
              By the Numbers
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              A quantitative look at my experience and learning journey
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "20+", label: "Projects Completed" },
              { value: "3+", label: "Years Learning" },
              { value: "10+", label: "Technologies" },
              { value: "∞", label: "Continuous Learning" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-5 bg-neutral-700/30 rounded-xl hover:bg-neutral-700/50 transition-colors">
                <div className="text-3xl md:text-4xl font-light text-green-400 mb-2">
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