export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-stone-900 text-white py-20 px-4 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Simplified Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 font-heading">
            Let's Work Together
          </h2>
          <p className="text-gray-300 text-lg font-light max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Drop me a message and I'll get back to you within 24 hours.
          </p>
        </div>

        {/* Single Column Layout for Better Focus */}
        <div className="max-w-2xl mx-auto space-y-12">
          
          {/* Quick Contact Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a 
              href="mailto:your@email.com"
              className="bg-neutral-700 p-6 rounded-xl hover:bg-neutral-600 transition-all duration-300 group text-center"
            >
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/30 transition-colors duration-300">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 font-heading">Email Me</h3>
              <p className="text-gray-400 text-sm">your@email.com</p>
            </a>

            <a 
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-700 p-6 rounded-xl hover:bg-neutral-600 transition-all duration-300 group text-center"
            >
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/30 transition-colors duration-300">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 font-heading">LinkedIn</h3>
              <p className="text-gray-400 text-sm">Connect with me</p>
            </a>
          </div>

          {/* Divider */}
          <div className="flex items-center">
            <div className="flex-1 h-px bg-neutral-600"></div>
            <span className="px-4 text-gray-400 text-sm">or</span>
            <div className="flex-1 h-px bg-neutral-600"></div>
          </div>

          {/* Simplified Contact Form */}
          <div className="bg-neutral-700 rounded-xl p-8">
            <h3 className="text-xl font-medium text-white mb-6 text-center font-heading">Send a Message</h3>
            
            <form className="space-y-5">
              
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 bg-neutral-600 border border-neutral-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/50 transition-all duration-200"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 bg-neutral-600 border border-neutral-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/50 transition-all duration-200"
                  required
                />
              </div>

              <div>
                <textarea
                  rows="5"
                  placeholder="Tell me about your project or just say hello..."
                  className="w-full p-4 bg-neutral-600 border border-neutral-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/50 transition-all duration-200 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-emerald-500 text-white font-medium rounded-lg hover:bg-emerald-600 active:bg-emerald-700 transition-colors duration-200 flex items-center justify-center group font-heading"
              >
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
