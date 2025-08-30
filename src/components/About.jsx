export default function AboutMe() {
  return (
    <section id="about" className="w-full bg-neutral-800 text-white py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header - Matches Skills section style */}
        <div className="text-center mb-16">
          <p className="text-green-400 text-sm font-medium tracking-widest uppercase mb-4 opacity-90">
            Get to Know Me
          </p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-green-400 mx-auto"></div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Text Content */}
          <div className="lg:w-7/12 space-y-8">
            <p className="text-gray-200 text-lg leading-relaxed max-w-3xl">
              A computer science student passionate about creating elegant, efficient, and user-friendly digital solutions. I enjoy exploring web development, AI & machine learning, and turning ideas into functional projects that make an impact.
            </p>
            
            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Focus on clean, maintainable code</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Passionate about learning new technologies</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Strong problem-solving skills</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">User-centered design approach</p>
              </div>
            </div>
          </div>
          
          {/* Expertise Cards - Matches Skills section style */}
          <div className="lg:w-5/12">
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-neutral-750 p-6 rounded-xl border-l-4 border-green-400">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-400/10 rounded-lg flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg text-white">Web Development</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Building responsive, scalable web applications using modern frameworks and best practices.
                </p>
              </div>
              
              <div className="bg-neutral-750 p-6 rounded-xl border-l-4 border-green-400">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-400/10 rounded-lg flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg text-white">AI & Machine Learning</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Experimenting with AI models and applying ML techniques to solve real-world challenges.
                </p>
              </div>
              
              <div className="bg-neutral-750 p-6 rounded-xl border-l-4 border-green-400">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-400/10 rounded-lg flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg text-white">Problem Solving</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Tackling complex problems algorithmically and optimizing solutions efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}