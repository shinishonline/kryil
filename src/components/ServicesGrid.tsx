import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    index: '01',
    title: 'Enterprise',
    subtitle: 'Software Development',
    description: 'Custom enterprise solutions & applications',
    link: '/services/software-development',
  },
  {
    index: '02',
    title: 'Cybersecurity',
    subtitle: 'Services',
    description: 'Security audits & threat detection',
    link: '/services/cybersecurity',
  },
  {
    index: '03',
    title: 'Software',
    subtitle: 'Development',
    description: 'Custom enterprise solutions',
    link: '/services/software-development',
  },
  {
    index: '04',
    title: 'Infrastructure',
    subtitle: 'Automation',
    description: 'Terraform, Ansible, Puppet & CI/CD pipelines',
    link: '/services/automation',
  },
  {
    index: '05',
    title: 'Digital',
    subtitle: 'Marketing',
    description: 'SEO, PPC & content strategy',
    link: '/services/digital-marketing',
  },
];

export default function ServicesGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setActiveIndex(index);
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-black overflow-hidden"
    >
      {/* Top Section - Header */}
      <div className="pt-32 md:pt-48" style={{ marginLeft: '40px', marginRight: '40px', paddingBottom: '40px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <div
              className={`flex items-center gap-4 mb-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-12 h-[1px] bg-white/20" />
              <span className="font-['Lato'] text-[0.7rem] text-white/40 uppercase tracking-[0.3em]">
                Services
              </span>
            </div>
            <h2
              className={`font-['Lato'] text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.9] tracking-[-0.04em] text-white transition-all duration-1000 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              What we
              <br />
              <span className="text-white/20">do best</span>
            </h2>
          </div>

          <div
            className={`transition-all duration-1000 delay-200 flex justify-end ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          > 
            <p className="font-['Lato'] text-[1.1rem] text-white/50 leading-[1.8] max-w-lg">
              <br />We craft digital experiences and build technology solutions that transform businesses. Five core services, infinite possibilities.
            </p>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="border-t border-white/10" style={{ marginBottom: '40px' }}>
        {services.map((service, index) => (
          <Link
            to={service.link}
            key={service.index}
            className={`group block border-b border-white/10 transition-all duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: `${300 + index * 100}ms` }}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div
              className="relative overflow-hidden transition-colors duration-500"
              style={{
                backgroundColor: activeIndex === index ? '#1a1a1a' : 'transparent',
              }}
            >
              {/* Cursor Glow Effect */}
              {activeIndex === index && (
                <div
                  className="absolute w-[600px] h-[600px] rounded-full pointer-events-none transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(circle, rgba(223,241,64,0.15) 0%, transparent 70%)',
                    left: mousePos.x - 300,
                    top: mousePos.y - 300,
                  }}
                />
              )}

              <div className="relative z-10 py-12 md:py-16 lg:py-20" style={{ marginLeft: '40px', marginRight: '40px' }}>
                <div className="grid grid-cols-12 gap-4 items-center">
                  {/* Index */}
                  <div className="col-span-2 md:col-span-1">
                    <span className={`font-['Lato'] text-[3rem] md:text-[4rem] font-bold leading-none transition-colors duration-500 ${
                      activeIndex === index ? 'text-[#dff140]/40' : 'text-white/10'
                    }`}>
                      {service.index}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="col-span-10 md:col-span-5 lg:col-span-4">
                    <h3 className={`font-['Lato'] text-[clamp(1.5rem,3vw,2.5rem)] font-light leading-[1] tracking-[-0.03em] transition-colors duration-500 ${
                      activeIndex === index ? 'text-[#dff140]' : 'text-white'
                    }`}>
                      {service.title}
                      <span className={`block font-light transition-colors duration-500 ${
                        activeIndex === index ? 'text-[#dff140]/40' : 'text-white/30'
                      }`}>
                        {service.subtitle}
                      </span>
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="hidden md:block col-span-4 lg:col-span-5">
                    <p className={`font-['Lato'] text-[1rem] leading-relaxed transition-all duration-500 ${
                      activeIndex === index ? 'text-white/70 translate-x-0' : 'text-white/40 -translate-x-4'
                    }`}>
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex col-span-2 justify-end">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 ${
                      activeIndex === index
                        ? 'bg-[#dff140] scale-100'
                        : 'bg-white/10 scale-90'
                    }`}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        className={`transition-all duration-500 ${
                          activeIndex === index
                            ? 'text-black translate-x-1 -translate-y-1'
                            : 'text-white/30'
                        }`}
                      >
                        <path
                          d="M7 17L17 7M17 7H7M17 7V17"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}
