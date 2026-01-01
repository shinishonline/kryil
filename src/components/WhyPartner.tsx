import { useEffect, useRef, useState } from 'react';

const benefits = [
  {
    title: 'Innovation',
    description: 'AI-driven solutions and cutting-edge technology to accelerate your digital transformation.',
  },
  {
    title: 'Scalability',
    description: 'Cloud-native architectures designed to grow seamlessly with your business needs.',
  },
  {
    title: 'Security',
    description: 'Comprehensive cybersecurity with audits, threat detection, and compliance management.',
  },
  {
    title: 'Reliability',
    description: '24/7 expert support ensuring your systems run smoothly at all times.',
  },
];

export default function WhyPartner() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
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

  // Calculate scroll-based parallax
  const getParallax = (speed: number, offset: number = 0) => {
    const relativeScroll = Math.max(0, scrollY - sectionTop + 400);
    return (relativeScroll * speed) + offset;
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[#f1f0ea] min-h-screen overflow-hidden"
      style={{ padding: '100px 40px' }}
    >
      {/* Header */}
      <div className="mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-8 items-center">
          {/* Left Column - Label and Title */}
          <div>
            <div
              className={`group flex items-center gap-4 mb-8 transition-all duration-1000 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-3 h-3 bg-orange-500 group-hover:bg-[#dff140] transition-colors duration-300" />
              <span className="font-['Lato'] text-[0.7rem] text-black/40 uppercase tracking-[0.3em]">
                Why Partner With Us
              </span>
            </div>

            <h2
              className={`font-['Lato'] text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] tracking-[-0.03em] text-black transition-all duration-1000 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              Built on principles
              <br />
              <span className="text-black/25">that drive success</span>
            </h2>
          </div>

          {/* Right Column - Description */}
          <p
            className={`font-['Lato'] text-[1.1rem] text-black/50 leading-[1.8] transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            We combine deep technical expertise with a client-first approach
            to deliver solutions that drive real business outcomes.
          </p>
        </div>
      </div>

      {/* Benefits Grid with Staggered Parallax */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 mb-24">
        {benefits.map((benefit, index) => (
          <div
            key={benefit.title}
            className={`transition-all duration-700 will-change-transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{
              transitionDelay: `${300 + index * 100}ms`,
              transform: `translate3d(0, ${getParallax(index % 2 === 0 ? -0.025 : 0.025)}px, 0)`,
            }}
          >
            <div className="border-t border-black/15 pt-8">
              <span className="font-['Lato'] text-[3rem] md:text-[4rem] font-bold leading-none text-black/[0.06]">
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3 className="font-['Lato'] text-[1.5rem] font-semibold text-black mt-4 mb-3">
                {benefit.title}
              </h3>

              <p className="font-['Lato'] text-[1rem] text-black/45 leading-[1.8]">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
