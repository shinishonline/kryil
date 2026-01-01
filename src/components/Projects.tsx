import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    id: '01',
    title: 'Enterprise Cloud Platform',
    category: 'Cloud Architecture',
    description: 'Scalable multi-tenant SaaS platform handling 10M+ daily transactions.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop',
    stats: { users: '2M+', uptime: '99.99%' },
  },
  {
    id: '02',
    title: 'AI-Powered Analytics',
    category: 'Machine Learning',
    description: 'Real-time predictive analytics engine for financial services.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    stats: { accuracy: '98.5%', processed: '50TB+' },
  },
  {
    id: '03',
    title: 'Defense Systems Interface',
    category: 'UI/UX Design',
    description: 'Mission-critical command and control interface for defense operations.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
    stats: { response: '<50ms', nodes: '1000+' },
  },
  {
    id: '04',
    title: 'Distributed Computing Grid',
    category: 'Infrastructure',
    description: 'Global edge computing network for IoT data processing.',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2032&auto=format&fit=crop',
    stats: { regions: '24', latency: '<10ms' },
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

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

  return (
    <section
      id="work"
      ref={sectionRef}
      className="py-32 md:py-48 bg-black relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#dff140]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <div
            className={`flex items-center gap-4 mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="w-12 h-[1px] bg-[#dff140]" />
            <span className="font-['Lato'] text-[0.7rem] text-[#bdad96] uppercase tracking-[0.3em]">
              Selected Work
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2
              className={`font-['Lato'] text-[clamp(2.5rem,8vw,6rem)] font-black leading-[0.95] tracking-[-0.05em] text-white transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Projects<span className="text-[#dff140]">.</span>
            </h2>

            <p
              className={`max-w-md font-['Lato'] text-[0.85rem] text-white/40 leading-[1.8] transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              A selection of projects that showcase our expertise in building
              complex, high-performance systems.
            </p>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
              onMouseEnter={() => setActiveProject(index)}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                {/* Project number */}
                <div className="absolute top-6 left-6">
                  <span className="font-['Lato'] text-[0.7rem] text-[#dff140] tracking-[0.2em]">
                    {project.id}
                  </span>
                </div>

                {/* Category badge */}
                <div className="absolute top-6 right-6">
                  <span className="font-['Lato'] text-[0.65rem] text-white/60 uppercase tracking-[0.15em] px-4 py-2 border border-white/20 group-hover:border-[#dff140]/40 group-hover:text-[#dff140] transition-all duration-300">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="font-['Lato'] text-2xl md:text-3xl font-bold tracking-[-0.02em] text-white mb-3 group-hover:text-[#f1f0ea] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="font-['Lato'] text-[0.8rem] text-white/50 leading-[1.6] mb-6 max-w-md group-hover:text-white/70 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="flex gap-6">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key}>
                        <span className="font-['Lato'] text-xl font-bold text-[#dff140]">
                          {value}
                        </span>
                        <p className="font-['Lato'] text-[0.6rem] text-white/40 uppercase tracking-[0.1em] mt-1">
                          {key}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                  <div className="w-12 h-12 rounded-full border border-[#dff140] flex items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="text-[#dff140] -rotate-45"
                    >
                      <path
                        d="M1 11L11 1M11 1H3M11 1V9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="#"
            className="inline-flex items-center gap-3 border border-white/20 text-white font-['Lato'] text-[0.85rem] font-bold uppercase tracking-[0.05em] px-10 py-5 rounded-full hover:border-[#dff140] hover:text-[#dff140] transition-all duration-300"
          >
            <span>View All Projects</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 12 12"
              fill="none"
              className="transform -rotate-45"
            >
              <path
                d="M1 11L11 1M11 1H3M11 1V9"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
