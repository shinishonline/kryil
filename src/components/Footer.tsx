import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] text-white font-['Lato'] overflow-hidden">
      {/* Yellow Smoke Effect - Flowing Left to Right */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Main Smoke Stream */}
        <div
          className="absolute w-[300%] h-[40%] top-[30%]"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(223,241,64,0.12) 20%, rgba(223,241,64,0.28) 40%, rgba(223,241,64,0.2) 60%, transparent 85%)',
            filter: 'blur(65px)',
            animation: 'footerSmokeMain 15s linear infinite',
          }}
        />
        {/* Secondary Stream */}
        <div
          className="absolute w-[250%] h-[50%] top-[25%]"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(223,241,64,0.1) 25%, rgba(223,241,64,0.22) 50%, rgba(223,241,64,0.1) 75%, transparent 100%)',
            filter: 'blur(80px)',
            animation: 'footerSmokeMain 18s linear infinite',
            animationDelay: '-5s',
          }}
        />
        {/* Smoke Puffs */}
        <div
          className="absolute w-[600px] h-[400px] top-[25%]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(223,241,64,0.28) 0%, rgba(223,241,64,0.14) 40%, transparent 70%)',
            filter: 'blur(60px)',
            animation: 'footerPuff1 10s linear infinite',
          }}
        />
        <div
          className="absolute w-[500px] h-[350px] top-[35%]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(223,241,64,0.24) 0%, rgba(223,241,64,0.12) 45%, transparent 70%)',
            filter: 'blur(55px)',
            animation: 'footerPuff2 8s linear infinite',
            animationDelay: '-3s',
          }}
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(223,241,64,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(223,241,64,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Top decorative line */}
      <div className="relative">
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-12 lg:px-16" style={{ paddingTop: '64px', paddingBottom: '8px' }}>

        {/* Top Section - Logo and Links */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-16">

          {/* Left - Logo & Tagline */}
          <div className="flex-shrink-0 max-w-sm" style={{ paddingLeft: '40px' }}>
            <Link to="/" className="inline-flex items-center gap-3 group mb-6">
              <img
                src="/logo_white.png"
                alt="KRYIL Infotech"
                className="h-14 transition-all duration-300 group-hover:brightness-125"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(223,241,64,0.2))',
                }}
              />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              Pioneering defense technology, UAV systems, and enterprise solutions from Bangalore, India.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/company/kryil-infotech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/40 hover:bg-[#dff140] hover:text-black hover:border-[#dff140] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com/kryilinfotech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/40 hover:bg-[#dff140] hover:text-black hover:border-[#dff140] transition-all duration-300"
                aria-label="X (Twitter)"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com/@kryilinfotech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/40 hover:bg-[#dff140] hover:text-black hover:border-[#dff140] transition-all duration-300"
                aria-label="YouTube"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/kryilinfotech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/40 hover:bg-[#dff140] hover:text-black hover:border-[#dff140] transition-all duration-300"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right - Link Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-10">

            {/* Company */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#dff140] mb-6 font-bold">
                Company
              </h4>
              <ul className="space-y-4">
                <li><Link to="/" className="text-sm text-white/50 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/#about" className="text-sm text-white/50 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/defense" className="text-sm text-white/50 hover:text-white transition-colors">Defense</Link></li>
                <li><Link to="/careers" className="text-sm text-white/50 hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/#contact" className="text-sm text-white/50 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#dff140] mb-6 font-bold">
                Services
              </h4>
              <ul className="space-y-4">
                <li><Link to="/services/infrastructure" className="text-sm text-white/50 hover:text-white transition-colors">Infrastructure</Link></li>
                <li><Link to="/services/cybersecurity" className="text-sm text-white/50 hover:text-white transition-colors">Cybersecurity</Link></li>
                <li><Link to="/services/software-development" className="text-sm text-white/50 hover:text-white transition-colors">Software Dev</Link></li>
                <li><Link to="/services/robotics" className="text-sm text-white/50 hover:text-white transition-colors">Robotics</Link></li>
                <li><Link to="/services/database" className="text-sm text-white/50 hover:text-white transition-colors">Database</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#dff140] mb-6 font-bold">
                Resources
              </h4>
              <ul className="space-y-4">
                <li><Link to="/blog" className="text-sm text-white/50 hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/news" className="text-sm text-white/50 hover:text-white transition-colors">Newsroom</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#dff140] mb-6 font-bold">
                Contact
              </h4>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:info@kryil.com" className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <path d="M22 6l-10 7L2 6"/>
                    </svg>
                    info@kryil.com
                  </a>
                </li>
                <li>
                  <a href="tel:+918089090365" className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                    +91-8089090365
                  </a>
                </li>
                <li className="text-sm text-white/40 pt-2">
                  <p>Bangalore, Karnataka</p>
                  <p>India</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" style={{ marginBottom: '8px' }} />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6" style={{ paddingTop: '5px', paddingBottom: '5px' }}>

          {/* Copyright */}
          <p className="text-xs text-white/30" style={{ paddingLeft: '40px' }}>
            © {new Date().getFullYear()} Kryil Infotech Private Limited. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/privacy-policy" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-use" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Terms of Use
            </Link>
            <Link to="/anti-slavery-policy" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Anti-Slavery Policy
            </Link>
            <Link to="/carbon-reduction-plan" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Carbon Reduction
            </Link>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes footerSmokeMain {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(50%); }
        }
        @keyframes footerPuff1 {
          0% { transform: translateX(-100vw) translateY(0) scale(1); opacity: 0; }
          10% { opacity: 0.32; }
          90% { opacity: 0.32; }
          100% { transform: translateX(100vw) translateY(-20px) scale(1.2); opacity: 0; }
        }
        @keyframes footerPuff2 {
          0% { transform: translateX(-100vw) translateY(0) scale(1); opacity: 0; }
          10% { opacity: 0.28; }
          90% { opacity: 0.28; }
          100% { transform: translateX(100vw) translateY(20px) scale(1.15); opacity: 0; }
        }
      `}</style>
    </footer>
  );
}
