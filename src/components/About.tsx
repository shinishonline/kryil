import { useEffect, useRef, useState } from 'react';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: -500, y: -500 });
  const [smoothPos, setSmoothPos] = useState({ x: -500, y: -500 });
  const [isHovering, setIsHovering] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [sectionTop, setSectionTop] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      setSectionTop(sectionRef.current.offsetTop);
    }

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth animation for mouse position
  useEffect(() => {
    let animationId: number;
    const animate = () => {
      setSmoothPos(prev => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.15,
        y: prev.y + (mousePosition.y - prev.y) * 0.15,
      }));
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [mousePosition]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Calculate scroll-based parallax
  const getParallax = (speed: number) => {
    const relativeScroll = Math.max(0, scrollY - sectionTop + 500);
    return relativeScroll * speed;
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-[#010101] text-white overflow-hidden"
    >
      {/* Hero Section with Parallax */}
      <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0 scale-110">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop"
            alt="Kryil Infotech Team"
            className="w-full h-full object-cover will-change-transform"
            style={{
              transform: `translate3d(0, ${Math.max(0, (scrollY - 500) * 0.15)}px, 0)`,
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#010101]" />

        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(rgba(223, 241, 64, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(223, 241, 64, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }} />
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 max-w-4xl">
            <span
              className={`inline-block px-6 py-2 border border-[#dff140]/30 rounded-full font-['Lato'] text-[0.7rem] uppercase tracking-[0.3em] text-[#dff140] mb-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              About Kryil Infotech
            </span>
            <h1
              className={`font-['Lato'] text-[clamp(2.5rem,8vw,5rem)] font-bold leading-[1] tracking-[-0.04em] text-white transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              We Build
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#dff140] to-[#a8c928]">
                Digital Excellence
              </span>
            </h1>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className={`flex flex-col items-center gap-3 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <span className="font-['Lato'] text-[0.65rem] uppercase tracking-[0.2em] text-white/40">
              Scroll
            </span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-[#dff140] to-transparent animate-pulse" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 md:py-24" ref={contentRef}>
        <div style={{ marginLeft: '40px', marginRight: '40px' }}>
          {/* Main Layout */}
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">

            {/* Left - Large Title with Parallax */}
            <div
              className="lg:w-1/2 will-change-transform"
              style={{
                transform: `translate3d(0, ${getParallax(-0.03)}px, 0)`,
              }}
            >
              <div
                className={`flex items-center gap-4 mb-10 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="w-3 h-3 bg-[#dff140]" />
                <span className="font-['Lato'] text-[0.7rem] text-white/40 uppercase tracking-[0.3em]">
                  About Us
                </span>
              </div>
              <h2
                className={`font-['Lato'] text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.95] tracking-[-0.04em] text-white transition-all duration-1000 delay-100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              >
                Technology
                <br />
                Partner
                <br />
                <span className="text-[#dff140]">For Your</span>
                <br />
                <span className="text-white/20">Growth</span>
              </h2>
            </div>

            {/* Right - Content with Text Reveal Hover Effect and Parallax */}
            <div
              className="lg:w-1/2 lg:pt-20 relative will-change-transform"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => {
                setIsHovering(false);
                setMousePosition({ x: -500, y: -500 });
              }}
              style={{
                transform: `translate3d(0, ${getParallax(0.02)}px, 0)`,
                cursor: 'default',
              }}
            >
              {/* Glow effect behind the reveal */}
              <div
                className="absolute pointer-events-none rounded-full"
                style={{
                  width: 300,
                  height: 250,
                  left: smoothPos.x - 150,
                  top: smoothPos.y - 125,
                  background: 'radial-gradient(ellipse, rgba(223,241,64,0.08) 0%, transparent 70%)',
                  opacity: isHovering ? 1 : 0,
                  transition: 'opacity 0.4s ease',
                  filter: 'blur(30px)',
                }}
              />

              {/* Intro - with text reveal effect */}
              <div
                className={`relative mb-12 transition-all duration-1000 delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Base text */}
                <p className="font-['Lato'] text-[1.3rem] font-light text-white/30 leading-[1.6]">
                  Kryil Infotech is a technology solutions company headquartered in Bangalore, India.
                </p>
                {/* Revealed text */}
                <p
                  className="font-['Lato'] text-[1.3rem] font-light text-white leading-[1.6] absolute inset-0 pointer-events-none"
                  style={{
                    opacity: isHovering ? 1 : 0,
                    transition: 'opacity 0.4s ease',
                    maskImage: `radial-gradient(ellipse 250px 200px at ${smoothPos.x}px ${smoothPos.y}px, black 0%, black 40%, transparent 100%)`,
                    WebkitMaskImage: `radial-gradient(ellipse 250px 200px at ${smoothPos.x}px ${smoothPos.y}px, black 0%, black 40%, transparent 100%)`,
                  }}
                >
                  Kryil Infotech is a technology solutions company headquartered in Bangalore, India.
                </p>
              </div>

              {/* Description - with text reveal effect */}
              <div
                className={`relative space-y-6 mb-12 transition-all duration-1000 delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Base text */}
                <div>
                  <p className="font-['Lato'] text-[1rem] text-white/25 leading-[1.9]">
                    We specialize in transforming businesses through cutting-edge AI, cloud computing,
                    and custom software development. Our approach combines deep technical expertise
                    with a keen understanding of business challenges.
                  </p>
                  <p className="font-['Lato'] text-[1rem] text-white/25 leading-[1.9] mt-6">
                    From startups to Fortune 500 companies, we've helped organizations across
                    industries achieve their digital transformation goals with innovation,
                    scalability, and security.
                  </p>
                </div>
                {/* Revealed text */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    opacity: isHovering ? 1 : 0,
                    transition: 'opacity 0.4s ease',
                    maskImage: `radial-gradient(ellipse 250px 200px at ${smoothPos.x}px ${smoothPos.y}px, black 0%, black 40%, transparent 100%)`,
                    WebkitMaskImage: `radial-gradient(ellipse 250px 200px at ${smoothPos.x}px ${smoothPos.y}px, black 0%, black 40%, transparent 100%)`,
                  }}
                >
                  <p className="font-['Lato'] text-[1rem] text-white/70 leading-[1.9]">
                    We specialize in transforming businesses through cutting-edge AI, cloud computing,
                    and custom software development. Our approach combines deep technical expertise
                    with a keen understanding of business challenges.
                  </p>
                  <p className="font-['Lato'] text-[1rem] text-white/70 leading-[1.9] mt-6">
                    From startups to Fortune 500 companies, we've helped organizations across
                    industries achieve their digital transformation goals with innovation,
                    scalability, and security.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="relative z-10 w-full h-[1px] bg-white/10 mb-12" />

              {/* CTA */}
              <div
                className={`relative z-10 transition-all duration-1000 delay-400 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-6"
                >
                  <div className="w-14 h-14 border border-white/20 group-hover:border-[#dff140] group-hover:bg-[#dff140] flex items-center justify-center transition-all duration-300">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-white group-hover:text-black transform -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                  <span className="font-['Lato'] text-[0.85rem] font-medium uppercase tracking-[0.15em] text-white/60 group-hover:text-[#dff140] transition-colors duration-300">
                    Work With Us
                  </span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
