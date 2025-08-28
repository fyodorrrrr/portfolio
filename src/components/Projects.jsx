export default function Projects() {

    return (
        <section id="projects" className="w-full py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Project Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-6 flex flex-col">
                <img 
                src="/projects/thriftshop.png" 
                alt="Thrift E-commerce Website" 
                className="rounded-lg mb-4 object-cover h-40"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Thrift Shop E-commerce</h3>
                <p className="text-gray-600 flex-grow">
                A full-stack e-commerce website with seller and buyer features, 
                built using Flask, MySQL, and React.
                  </p>
        <div className="flex gap-4 mt-4">
          <a href="#" className="text-blue-600 hover:underline">GitHub</a>
          <a href="#" className="text-blue-600 hover:underline">Live Demo</a>
        </div>
      </div>

      {/* Project Card 2 */}
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-6 flex flex-col">
        <img 
          src="/projects/flutterbank.png" 
          alt="Flutter Banking App" 
          className="rounded-lg mb-4 object-cover h-40"
        />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Banking App</h3>
        <p className="text-gray-600 flex-grow">
          A simple banking system app developed in Flutter with Firebase 
          integration for authentication and data storage.
        </p>
        <div className="flex gap-4 mt-4">
          <a href="#" className="text-blue-600 hover:underline">GitHub</a>
          <a href="#" className="text-blue-600 hover:underline">Demo</a>
        </div>
      </div>

      {/* Project Card 3 */}
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-6 flex flex-col">
        <img 
          src="/projects/portfolio.png" 
          alt="Portfolio Website" 
          className="rounded-lg mb-4 object-cover h-40"
        />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Portfolio Website</h3>
        <p className="text-gray-600 flex-grow">
          A personal portfolio built with React, Tailwind CSS, and Next.js 
          showcasing projects and skills with a modern UI.
        </p>
        <div className="flex gap-4 mt-4">
          <a href="#" className="text-blue-600 hover:underline">GitHub</a>
          <a href="#" className="text-blue-600 hover:underline">Live</a>
        </div>
      </div>

    </div>
  </div>
</section>

    )
}