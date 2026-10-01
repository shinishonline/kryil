import { useEffect, useRef, useState } from 'react';

// Work we have actually delivered. No invented metrics: each entry states the
// client's sector and where they operate, and links to the live site so the
// claim is checkable. Replaced four placeholder projects that were never real.
const projects = [
  {
    id: '01',
    title: 'Cheers Wisdom',
    category: 'Web platform',
    description:
      'Website and front end for a behavioural-AI platform working across healthcare and education, built to carry research claims and study status without overstating them.',
    image: '/work/cheers-wisdom.png',
    url: 'https://www.cheerswisdom.com/',
    stats: { sector: 'Health & education', region: 'India' },
  },
  {
    id: '02',
    title: 'Abdulwahab Trading',
    category: 'Corporate website',
    description:
      'Corporate website for an industrial supply and engineering business — global sourcing, automation components and refractories — across two Gulf markets.',
    image: '/work/abdulwahab-trading.png',
    url: 'http://wahabintl.com/',
    stats: { sector: 'Industrial supply', region: 'UAE & KSA' },
  },
  {
    id: '03',
    title: 'True Star Business Solutions',
    category: 'Corporate website',
    description:
      'Corporate website for a printing, signage and office-supply company, covering a wide product catalogue with enquiry routed straight to the branch.',
    image: '/work/true-star.png',
    url: 'https://truestaroman.com/',
    stats: { sector: 'Printing & signage', region: 'Oman' },
  },
  {
    id: '04',
    title: 'NextDOOH',
    category: 'Our own product',
    description:
      'Our cloud digital-signage platform: publish once from a web dashboard and every paired screen picks it up, across Android TV, Tizen, webOS and browser players.',
    image: '/work/nextdooh.png',
    url: '/products/nextdooh',
    stats: { sector: 'Digital signage', region: 'Multi-platform' },
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [_activeProject, setActiveProject] = useState(0);

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
              className={`heading-display text-white transition-all duration-700 delay-100 ${
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
              Sites and systems we have built and shipped, plus the product we
              run ourselves. Every one is live — follow the link and judge it.
            </p>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.url}
              {...(project.url.startsWith('http')
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              aria-label={`${project.title} — ${project.category}`}
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
            </a>
          ))}
        </div>

        {/* View all button */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="/#contact"
            className="inline-flex items-center gap-3 border border-white/20 text-white font-['Lato'] text-[0.85rem] font-bold uppercase tracking-[0.05em] px-10 py-5 rounded-full hover:border-[#dff140] hover:text-[#dff140] transition-all duration-300"
          >
            <span>Talk to us about yours</span>
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
