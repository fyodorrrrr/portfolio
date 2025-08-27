export default function AboutMe() {
  return (
    <section className="w-full bg-stone-800 text-gray-200 py-20 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-green-400 text-center lg:text-left">
          About Me
        </h2>

        {/* Intro Paragraph */}
        <p className="text-gray-200 text-base sm:text-lg leading-relaxed text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
          A computer science student passionate about creating elegant, efficient, and user-friendly digital solutions. I enjoy exploring web development, AI & machine learning, and turning ideas into functional projects that make an impact.
        </p>

        {/* Skills / Expertise */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-stone-700 p-6 rounded-lg border border-stone-600">
            <h3 className="font-medium text-lg text-green-400 mb-2">Web Development</h3>
            <p className="text-gray-200 text-sm">
              Building responsive, scalable web applications using modern frameworks and best practices.
            </p>
          </div>
          <div className="bg-stone-700 p-6 rounded-lg border border-stone-600">
            <h3 className="font-medium text-lg text-green-400 mb-2">AI & Machine Learning</h3>
            <p className="text-gray-200 text-sm">
              Experimenting with AI models and applying ML techniques to solve real-world challenges.
            </p>
          </div>
          <div className="bg-stone-700 p-6 rounded-lg border border-stone-600">
            <h3 className="font-medium text-lg text-green-400 mb-2">Problem Solving</h3>
            <p className="text-gray-200 text-sm">
              Tackling complex problems algorithmically and optimizing solutions efficiently.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
