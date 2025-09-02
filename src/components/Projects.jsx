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
    <section id="projects" className="min-h-screen bg-neutral-800 text-white py-20 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-emerald-400 text-sm font-medium tracking-wider uppercase mb-4">
            My Recent Work
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white font-heading">
            Projects
          </h2>
          <div className="w-16 h-px bg-emerald-400 mx-auto mt-8"></div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group cursor-pointer">
                  <div className="aspect-video bg-neutral-700 rounded-xl overflow-hidden border border-neutral-600 shadow-lg">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a 
                        href={project.github}
                        className="px-6 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white hover:bg-white/30 transition-colors duration-200 font-heading"
                      >
                        View Code
                      </a>
                      {project.demo && (
                        <a 
                          href={project.demo}
                          className="px-6 py-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors duration-200 font-heading"
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
                  
                  <h3 className="text-2xl md:text-3xl font-medium text-white font-heading">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-lg font-light leading-relaxed">
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
                        className="px-3 py-1 bg-neutral-700 border border-neutral-600 rounded-full text-gray-300 text-sm font-light hover:bg-neutral-600 hover:border-neutral-500 transition-all duration-200 shadow-sm"
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
                    className="group flex items-center text-gray-400 hover:text-white transition-colors duration-200 font-heading"
                  >
                    <span className="text-sm font-medium">View Code</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo}
                      className="group flex items-center text-emerald-400 hover:text-emerald-300 transition-colors duration-200 font-heading"
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
        <div className="text-center mt-20 pt-16 border-t border-neutral-600">
        </div>

      </div>
    </section>
  );
}