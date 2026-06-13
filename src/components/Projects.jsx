export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Haul Thrift Shop",
      description: "A mobile thrift shop application built with Flutter and Firebase, featuring buyer and seller flows, wishlist, checkout, and real-time updates.",
      tech: ["Flutter", "Dart", "Firebase", "Firestore", "Provider"],
      image: "assets/HAUL.png", 
      github: "https://github.com/fyodorrrrr/haul-app",   // You can replace with your GitHub repo link if public
      demo: "#",     // Replace with demo video or APK download if available
      featured: true
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Personal portfolio built with React, Tailwind CSS, and Next.js showcasing projects and skills with modern UI.",
      tech: ["Next.js", "React", "Tailwind CSS"],
      image: "assets/port.png",
      github: "#",
      demo: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-[#ece9e2] text-[#111111] py-20 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-20 flex items-center gap-4 sm:gap-5">
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-4xl sm:text-5xl font-semibold leading-none text-[#0f172a] font-heading">/</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-none text-[#0f172a] font-heading">
              projects
            </h2>
          </div>

          <div className="h-px flex-1 bg-black/15 mt-2 sm:mt-3" />

        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center  ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group cursor-pointer">
                  <div className="aspect-video bg-white rounded-xl overflow-hidden border border-black/10 shadow-lg">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-white/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a 
                        href={project.github}
                          className="px-6 py-2 bg-[#111111] backdrop-blur-sm border border-[#111111] rounded-full text-white hover:bg-[#333333] transition-colors duration-200 font-heading"
                      >
                        View Code
                      </a>
                      {project.demo && (
                        <a 
                          href={project.demo}
                          className="px-6 py-2 bg-[#cc5a1f] text-white rounded-full hover:bg-[#b24f1b] transition-colors duration-200 font-heading"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-emerald-400 text-sm font-medium">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {project.featured && (
                      <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-medium font-heading text-[#111111]">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-lg font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <p className="text-sm font-medium text-gray-400 tracking-wide">
                    Built with
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                      className="px-3 py-1 bg-white border border-black/10 rounded-full text-[#555555] text-sm font-light hover:bg-[#f0ede6] hover:border-black/20 transition-all duration-200 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex space-x-6 pt-4">
                  <a 
                    href={project.github}
                    className="group flex items-center text-[#555555] hover:text-[#111111] transition-colors duration-200 font-heading"
                  >
                    <span className="text-sm font-medium">View Code</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo}
                    className="group flex items-center text-[#cc5a1f] hover:text-[#b24f1b] transition-colors duration-200 font-heading"
                    >
                      <span className="text-sm font-medium">Live Demo</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* View More Section */}
        <div className="text-center mt-20 pt-16 border-t border-black/10">
        </div>

      </div>
    </section>
  );
}
