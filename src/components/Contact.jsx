export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-[#f2f0ea] text-[#111111] py-20 px-4 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 flex items-center gap-4 sm:gap-5">
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-4xl sm:text-5xl font-semibold leading-none text-[#0f172a] font-heading">/</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-none text-[#0f172a] font-heading">
              contact me
            </h2>
          </div>

          <div className="h-px flex-1 bg-black/15 mt-2 sm:mt-3" />
        </div>

        <div className="text-center mb-16">
          <p className="text-[#555555] text-lg font-light max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Drop me a message and I'll get back to you within 24 hours.
          </p>
        </div>

        {/* Single Column Layout for Better Focus */}
        <div className="max-w-2xl mx-auto space-y-12">
          
          {/* Quick Contact Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a 
              href="mailto:aquinojxse@email.com"
              className="bg-white p-6 rounded-xl hover:bg-[#f0ede6] transition-all duration-300 group text-center shadow-sm"
            >
                <div className="w-12 h-12 bg-[#cc5a1f]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#cc5a1f]/20 transition-colors duration-300">
                <svg className="w-6 h-6 text-[#cc5a1f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-[#111111] font-medium mb-2 font-heading">Email Me</h3>
              <p className="text-[#666666] text-sm">aquinojxse@email.com</p>
            </a>

            <a 
              href="https://www.linkedin.com/in/jose-aquino-a16884382/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl hover:bg-[#f0ede6] transition-all duration-300 group text-center shadow-sm"
            >
                <div className="w-12 h-12 bg-[#cc5a1f]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#cc5a1f]/20 transition-colors duration-300">
                <svg className="w-6 h-6 text-[#cc5a1f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-[#111111] font-medium mb-2 font-heading">LinkedIn</h3>
              <p className="text-[#666666] text-sm">Connect with me</p>
            </a>
          </div>

          {/* Divider */}
          <div className="flex items-center">
            <div className="flex-1 h-px bg-black/10"></div>
            <span className="px-4 text-[#666666] text-sm">or</span>
            <div className="flex-1 h-px bg-black/10"></div>
          </div>

          {/* Simplified Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-medium text-[#111111] mb-6 text-center font-heading">Send a Message</h3>
            
            <form className="space-y-5">
              
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                   className="w-full p-4 bg-[#f7f5f0] border border-black/10 rounded-lg text-[#111111] placeholder-[#888888] focus:outline-none focus:border-[#cc5a1f] focus:ring-1 focus:ring-[#cc5a1f]/40 transition-all duration-200"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                   className="w-full p-4 bg-[#f7f5f0] border border-black/10 rounded-lg text-[#111111] placeholder-[#888888] focus:outline-none focus:border-[#cc5a1f] focus:ring-1 focus:ring-[#cc5a1f]/40 transition-all duration-200"
                  required
                />
              </div>

              <div>
                <textarea
                  rows="5"
                  placeholder="Tell me about your project or just say hello..."
                   className="w-full p-4 bg-[#f7f5f0] border border-black/10 rounded-lg text-[#111111] placeholder-[#888888] focus:outline-none focus:border-[#cc5a1f] focus:ring-1 focus:ring-[#cc5a1f]/40 transition-all duration-200 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                 className="w-full py-4 bg-[#111111] text-white font-medium rounded-lg hover:bg-[#333333] active:bg-[#000000] transition-colors duration-200 flex items-center justify-center group font-heading"
              > Send Message
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
