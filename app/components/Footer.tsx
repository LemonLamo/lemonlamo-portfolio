export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-linear-to-br from-gray-900 via-gray-800 to-black text-white py-16 px-6 overflow-hidden">
      {/* Vibrant animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-rose-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          {/* Logo/Name with vibrant gradient */}
          <div className="space-y-4">
            <h3 className="text-4xl md:text-5xl font-bold">
              <span className="bg-linear-to-r from-teal-400 via-cyan-400 to-rose-400 bg-clip-text text-transparent">
                Lamia Koucem
              </span>
            </h3>
            
            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-12 bg-linear-to-r from-transparent to-teal-400" />
              <p className="text-gray-300 text-lg font-medium">
                Software Engineering Student @ USTHB
              </p>
              <div className="h-px w-12 bg-linear-to-l from-transparent to-rose-400" />
            </div>
            
            <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
              Passionate about building innovative solutions • Always learning • Available for opportunities
            </p>
          </div>
          
          {/* Social Links with vibrant hover effects */}
          <div className="flex justify-center space-x-8 pt-6">
            <a
              href="https://github.com/LemonLamo"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-gray-400 hover:text-white transition-all duration-500 hover:scale-125"
              aria-label="GitHub"
            >
              <div className="absolute inset-0 bg-teal-500/0 group-hover:bg-teal-500/20 rounded-full blur-xl transition-all duration-500" />
              <svg className="w-8 h-8 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/lamia-koucem-1a4447260"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-gray-400 hover:text-white transition-all duration-500 hover:scale-125"
              aria-label="LinkedIn"
            >
              <div className="absolute inset-0 bg-rose-500/0 group-hover:bg-rose-500/20 rounded-full blur-xl transition-all duration-500" />
              <svg className="w-8 h-8 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="mailto:lamia.koucem@gmail.com"
              className="group relative text-gray-400 hover:text-white transition-all duration-500 hover:scale-125"
              aria-label="Email"
            >
              <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/20 rounded-full blur-xl transition-all duration-500" />
              <svg
                className="w-8 h-8 relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
          
          {/* Vibrant gradient divider */}
          <div className="pt-8">
            <div className="h-px w-full bg-linear-to-r from-transparent via-teal-500/50 to-transparent" />
          </div>
          
          {/* Bottom section with vibrant elements */}
          <div className="pt-8 space-y-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Lamia Koucem. All rights reserved.
            </p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-gray-400 text-sm">Made with</span>
              <span className="text-2xl animate-pulse" style={{ animation: 'pulse 1.5s ease-in-out infinite' }}>
                ♥
              </span>
              <span className="text-gray-400 text-sm">by</span>
              <span className="font-semibold bg-linear-to-r from-teal-400 to-rose-400 bg-clip-text text-transparent">
                Lamia
              </span>
            </div>
            <div className="flex justify-center gap-4 text-xs text-gray-500">
              <span className="px-3 py-1 bg-teal-500/10 border border-teal-500/30 rounded-full">Next.js</span>
              <span className="px-3 py-1 bg-rose-500/10 border border-rose-500/30 rounded-full">Three.js</span>
              <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full">GSAP</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
