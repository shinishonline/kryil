import { useEffect, useRef, useState } from 'react';

export default function Mission() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [textMousePos, setTextMousePos] = useState({ x: -500, y: -500 });
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

  // Smooth animation for text reveal mouse position
  useEffect(() => {
    let animationId: number;
    const animate = () => {
      setSmoothPos(prev => ({
        x: prev.x + (textMousePos.x - prev.x) * 0.15,
        y: prev.y + (textMousePos.y - prev.y) * 0.15,
      }));
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [textMousePos]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    });
  };

  const handleTextMouseMove = (e: React.MouseEvent) => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      setTextMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  // Calculate scroll-based parallax
  const getParallax = (speed: number) => {
    const relativeScroll = Math.max(0, scrollY - sectionTop + 400);
    return relativeScroll * speed;
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-black py-40 md:py-56 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(223, 241, 64, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(223, 241, 64, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      </div>

      {/* Floating Gradient Orbs with Scroll Parallax */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl will-change-transform"
        style={{
          background: 'radial-gradient(circle, #dff140 0%, transparent 70%)',
          transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2 + getParallax(-0.05)}px)`,
          transition: 'transform 0.5s ease-out',
        }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full opacity-10 blur-3xl will-change-transform"
        style={{
          background: 'radial-gradient(circle, #dff140 0%, transparent 70%)',
          transform: `translate(${-mousePos.x * 1.5}px, ${-mousePos.y * 1.5 + getParallax(0.04)}px)`,
          transition: 'transform 0.5s ease-out',
        }}
      />

      <div className="relative z-10" style={{ marginLeft: '40px', marginRight: '40px', paddingBottom: '40px',paddingTop: '20px'  }}>
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left - Label & Title with Parallax */}
          <div
            className="lg:col-span-7 will-change-transform"
            style={{
              transform: `translate3d(0, ${getParallax(-0.03)}px, 0)`,
            }}
          >
            <div
              className={`flex items-center gap-4 mb-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-3 h-3 bg-[#dff140] animate-pulse" />
              <span className="font-['Lato'] text-[0.7rem] text-[#dff140] uppercase tracking-[0.3em]">
                Our Mission
              </span>
            </div>

            <h2
              className={`font-['Lato'] text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-white transition-all duration-1000 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              Transforming
              <br />
              <span className="text-white/20">visionary ideas</span>
              <br />
              into <span className="text-[#dff140]">results</span>
            </h2>
          </div>

          {/* Right - Description with Text Reveal Hover Effect and Parallax */}
          <div
            ref={textRef}
            className="lg:col-span-5 flex items-center will-change-transform relative"
            onMouseMove={handleTextMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
              setIsHovering(false);
              setTextMousePos({ x: -500, y: -500 });
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

            {/* Text container */}
            <div
              className={`relative transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Base text */}
              <p className="font-['Lato'] text-[1.15rem] text-white/25 leading-[1.8]">
                We bridge the gap between ambitious vision and technological reality.
                Our mission is to empower businesses with solutions that don't just
                meet today's needs but anticipate tomorrow's challenges.
              </p>
              {/* Revealed text */}
              <p
                className="font-['Lato'] text-[1.15rem] text-white/80 leading-[1.8] absolute inset-0 pointer-events-none"
                style={{
                  opacity: isHovering ? 1 : 0,
                  transition: 'opacity 0.4s ease',
                  maskImage: `radial-gradient(ellipse 250px 200px at ${smoothPos.x}px ${smoothPos.y}px, black 0%, black 40%, transparent 100%)`,
                  WebkitMaskImage: `radial-gradient(ellipse 250px 200px at ${smoothPos.x}px ${smoothPos.y}px, black 0%, black 40%, transparent 100%)`,
                }}
              >
                We bridge the gap between ambitious vision and technological reality.
                Our mission is to empower businesses with solutions that don't just
                meet today's needs but anticipate tomorrow's challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
