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
    <section id="skills" className="min-h-screen bg-black text-white flex items-center py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-green-400 text-sm font-medium tracking-wider uppercase mb-4">
            What I Do
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
            Skills
          </h2>
          <div className="w-16 h-px bg-green-400 mx-auto mt-8"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group space-y-6"
            >
              {/* Category Header */}
              <div className="space-y-3">
                <h3 className="text-xl font-medium text-white tracking-wide">
                  {category.title}
                </h3>
                <div className="w-8 h-px bg-gray-700 group-hover:bg-green-400 group-hover:w-12 transition-all duration-500"></div>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="text-gray-400 text-sm font-light hover:text-white transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-light text-green-400">20+</div>
            <div className="text-sm font-light text-gray-400 tracking-wide">Projects</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-light text-green-400">3+</div>
            <div className="text-sm font-light text-gray-400 tracking-wide">Years Learning</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-light text-green-400">10+</div>
            <div className="text-sm font-light text-gray-400 tracking-wide">Technologies</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-light text-green-400">∞</div>
            <div className="text-sm font-light text-gray-400 tracking-wide">Learning</div>
          </div>
        </div>

      </div>
    </section>
  );
}