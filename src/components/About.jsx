export default function AboutMe() {
  return (
    <section id="about" className="w-full min-h-screen bg-[#ece9e2] text-[#111111] pt-28 pb-20 px-4 sm:px-8 font-sans">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="mb-12 flex items-center gap-4 sm:gap-5">
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-4xl sm:text-5xl font-semibold leading-none text-[#0f172a] font-heading">/</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-none text-[#0f172a] font-heading">
              about me
            </h2>
          </div>

          <div className="h-px flex-1 bg-black/15 mt-2 sm:mt-3" />
        </div>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Text Content */}
          <div className="w-full lg:w-7/12 max-w-3xl space-y-8 text-left">
            <p className="text-[#4f4f4f] text-lg leading-relaxed">
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

          {/* Image Placeholder */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-md aspect-[4/5] rounded-3xl border border-black/10 bg-[#f8f6f1] shadow-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-[#cc5a1f]/10 flex items-center justify-center text-[#cc5a1f] text-xs font-semibold uppercase tracking-widest">
                    <img
                      src="/assets/about-me.jpg"
                      alt="Jose"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
