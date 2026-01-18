import { useEffect, useRef, useState } from 'react';

export default function WhoWeAre() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [smoothPos, setSmoothPos] = useState({ x: -500, y: -500 });
  const [isHovering, setIsHovering] = useState(false);

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
    }

    return () => observer.disconnect();
  }, []);

  // Smooth animation for mouse position
  useEffect(() => {
    let animationId: number;
    const animate = () => {
      setSmoothPos(prev => ({
        x: prev.x + (mousePos.x - prev.x) * 0.15,
        y: prev.y + (mousePos.y - prev.y) * 0.15,
      }));
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [mousePos]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const text = "We bring together exceptional engineers, designers, and strategists who transform challenges into opportunities. Our team blends technical mastery with innovative thinking to build solutions that drive lasting success. From custom software to scalable digital platforms, KRYIL builds the tools you need to lead.";

  return (
    <section
      ref={sectionRef}
      className="bg-black py-32 md:py-48 overflow-hidden flex items-center justify-center min-h-[60vh]"
    >
      <div className="w-full flex flex-col items-center justify-center px-8 md:px-12">
        {/* Section Label */}
        <div className={`mb-12 md:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-[1px] bg-white/20" />
            <span className="font-['Lato'] text-[0.85rem] text-white/40 uppercase tracking-[0.3em]">
              Who We Are & What We Do
            </span>
            <div className="w-12 h-[1px] bg-white/20" />
          </div>
        </div>

        {/* Main Text with Premium Hover Effect */}
        <div
          ref={textRef}
          className={`max-w-6xl relative transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => {
            setIsHovering(false);
            setMousePos({ x: -500, y: -500 });
          }}
          style={{ cursor: 'default' }}
        >
          {/* Base text */}
          <p className="font-['Lato'] text-[clamp(1.2rem,2.5vw,1.75rem)] text-white/30 leading-[2] text-center">
            {text}
          </p>

          {/* Sharp revealed text with gradient mask */}
          <p
            className="font-['Lato'] text-[clamp(1.2rem,2.5vw,1.75rem)] text-white leading-[2] text-center absolute inset-0 pointer-events-none"
            style={{
              opacity: isHovering ? 1 : 0,
              transition: 'opacity 0.4s ease',
              maskImage: `radial-gradient(ellipse 250px 200px at ${smoothPos.x}px ${smoothPos.y}px, black 0%, black 40%, transparent 100%)`,
              WebkitMaskImage: `radial-gradient(ellipse 250px 200px at ${smoothPos.x}px ${smoothPos.y}px, black 0%, black 40%, transparent 100%)`,
            }}
          >
            {text}
          </p>

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
        </div>

        {/* Subtle hint */}
      
      </div>
    </section>
  );
}
