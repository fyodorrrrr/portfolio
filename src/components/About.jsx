export default function AboutMe() {
  return (
    <section id="about" className="w-full min-h-screen bg-[#ece9e2] text-[#111111] py-20 px-4 sm:px-8 font-sans flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header - Matches Skills section style */}
        <div className="text-center mb-16">
          <p className="text-[#cc5a1f] text-sm font-medium tracking-widest uppercase mb-4 opacity-90">
            Get to Know Me
          </p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 font-heading">
            About Me
          </h2>
          <div className="w-20 h-1 bg-[#cc5a1f] mx-auto"></div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col items-start">
          {/* Text Content */}
          <div className="w-full space-y-8">
            <p className="text-[#4f4f4f] text-lg leading-relaxed max-w-3xl">
              A computer science student passionate about creating elegant, efficient, and user-friendly digital solutions. I enjoy exploring web development, AI & machine learning, and turning ideas into functional projects that make an impact.
            </p>
            
            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#cc5a1f] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#555555]">Focus on clean, maintainable code</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#cc5a1f] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#555555]">Passionate about learning new technologies</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#cc5a1f] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#555555]">Strong problem-solving skills</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#cc5a1f] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#555555]">User-centered design approach</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
