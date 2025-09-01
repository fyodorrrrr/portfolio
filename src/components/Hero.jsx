"use client";

export default function Hero() {
  return (
    <section id="home" className="w-full min-h-screen flex items-center justify-center bg-stone-900 text-white py-12 lg:py-0 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Side - Text */}
          <div className="space-y-6 text-left order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-medium leading-tight font-heading">
              Hey{' '}
              <span className="text-green-400 font-bold italic">I'm Jose</span>
              ,<br className="hidden sm:block" />
              <span className="block mt-2 lg:mt-0">
                A computer science student.
              </span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg font-medium max-w-lg leading-relaxed">
              Dedicated to transforming businesses through strategic, results-driven lead generation and innovative digital solutions.
            </p>
            <div className="pt-4">
              <button
                className="px-6 sm:px-8 py-3 bg-blue-100 text-black font-semibold rounded-full 
                  transition-all duration-300 flex items-center group
                  hover:bg-blue-200 hover:scale-105 hover:shadow-xl font-heading"
                onClick={() => {
                  const aboutSection = document.getElementById('about');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                About Me
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              {/* Full-size image as background */}
              <img
                src="/assets/port_jose.jpg"
                alt="Jose"
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}