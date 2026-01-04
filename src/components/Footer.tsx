import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white flex flex-col font-['Lato'] min-h-[50vh]">
      {/* Top content with padding */}
      <div className="flex-1 w-full flex flex-col justify-between" style={{ padding: '40px' }}>

        {/* ================= TOP CONTENT ================= */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">

          {/* LEFT – LOGO */}
          <div className="flex-shrink-0 mt-4 ml-4">
            <Link to="/" className="inline-flex items-center relative group">
              <img
                src="/logo_white.png"
                alt="Kryil"
                className="h-16"
                style={{
                  filter: 'drop-shadow(1px 1px 0px rgba(255,255,255,0.3)) drop-shadow(-1px -1px 1px rgba(0,0,0,0.5))',
                }}
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300" />
            </Link>
          </div>

          {/* RIGHT – LINK COLUMNS */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 lg:gap-x-20 gap-y-8">

            {/* QUICK LINKS */}
            <div>
              <p className="text-xs uppercase tracking-widest text-white/40 mb-4">
                Quick Links
              </p>
              <ul className="space-y-4 text-white/80 text-sm">
                <li><Link to="/" className="hover:text-white">Home</Link></li>
                <li><Link to="/#services" className="hover:text-white">Services</Link></li>
                <li><Link to="/defense" className="hover:text-white">Defense</Link></li>
                <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
                <li><Link to="/#contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>

            {/* SERVICES */}
            <div>
              <p className="text-xs uppercase tracking-widest text-white/40 mb-4">
                Services
              </p>
              <ul className="space-y-4 text-white/80 text-sm">
                <li><Link to="/services/infrastructure" className="hover:text-white">Infrastructure</Link></li>
                <li><Link to="/services/cybersecurity" className="hover:text-white">Cybersecurity</Link></li>
                <li><Link to="/services/software-development" className="hover:text-white">Software Development</Link></li>
                <li><Link to="/services/automation" className="hover:text-white">Automation</Link></li>
                <li><Link to="/services/digital-marketing" className="hover:text-white">Digital Marketing</Link></li>
                <li><Link to="/services/database" className="hover:text-white">Database Services</Link></li>
              </ul>
            </div>

            {/* SOCIAL */}
            <div>
              <p className="text-xs uppercase tracking-widest text-white/40 mb-4">
                Social
              </p>
              <ul className="space-y-4 text-white/80 text-sm">
                <li><a href="#" className="hover:text-white">X</a></li>
                <li><a href="#" className="hover:text-white">YouTube</a></li>
                <li><a href="#" className="hover:text-white">Instagram</a></li>
                <li><a href="#" className="hover:text-white">Facebook</a></li>
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="border-t border-white/10 flex flex-col lg:flex-row justify-between gap-8" style={{ padding: '40px', paddingTop: '24px', paddingBottom: '24px' }}>

        {/* LEFT – COPYRIGHT + LEGAL */}
        <div className="text-xs text-white/40 space-y-3">
          <p className="uppercase tracking-wider">
            Copyright © {new Date().getFullYear()} Kryil Infotech Private Limited
          </p>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms Of Use</a></li>
            <li><a href="#" className="hover:text-white">Modern Anti-Slavery Policy</a></li>
            <li><a href="#" className="hover:text-white">Investor Relations</a></li>
            <li><a href="#" className="hover:text-white">Carbon Reduction Plan</a></li>
          </ul>
        </div>

        {/* RIGHT – CONTACT */}
        <div className="text-left lg:text-right">
          <a
            href="mailto:info@kryil.com"
            className="text-sm font-medium hover:underline text-white/60 hover:text-white"
          >
            info@kryil.com
          </a>
        </div>

      </div>
    </footer>
  );
}
