import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}

const sections: Section[] = [
  {
    id: 'commitment',
    title: 'Commitment Statement',
    content: (
      <p className="text-white/70 leading-relaxed">
        KRYIL Infotech Private Limited is committed to achieving Net Zero carbon emissions by 2040. We recognize our responsibility to minimize our environmental impact and contribute to global efforts to combat climate change. This Carbon Reduction Plan outlines our current emissions, reduction targets, and the actions we are taking to achieve them.
      </p>
    ),
  },
  {
    id: 'carbon-footprint',
    title: 'Our Carbon Footprint',
    content: (
      <div className="space-y-8">
        <p className="text-white/70 leading-relaxed">
          As a technology services company, our carbon emissions primarily arise from:
        </p>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Scope 1 - Direct Emissions</h3>
          <ul className="space-y-2 text-white/70">
            <li className="flex items-start gap-3">
              <span className="text-[#dff140] mt-1">•</span>
              <span>Company-owned vehicles</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dff140] mt-1">•</span>
              <span>On-site fuel combustion</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dff140] mt-1">•</span>
              <span>Refrigerant gases</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Scope 2 - Indirect Emissions</h3>
          <ul className="space-y-2 text-white/70">
            <li className="flex items-start gap-3">
              <span className="text-[#dff140] mt-1">•</span>
              <span>Purchased electricity</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dff140] mt-1">•</span>
              <span>Data center energy consumption</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dff140] mt-1">•</span>
              <span>Office heating and cooling</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Scope 3 - Value Chain Emissions</h3>
          <ul className="space-y-2 text-white/70">
            <li className="flex items-start gap-3">
              <span className="text-[#dff140] mt-1">•</span>
              <span>Business travel</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dff140] mt-1">•</span>
              <span>Employee commuting</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dff140] mt-1">•</span>
              <span>Purchased goods and services</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dff140] mt-1">•</span>
              <span>Cloud computing services</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dff140] mt-1">•</span>
              <span>Waste disposal</span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 'targets',
    title: 'Reduction Targets',
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Near-term Target (2028)</h3>
          <p className="text-white/70">50% reduction in carbon emissions compared to 2024 baseline</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Medium-term Target (2035)</h3>
          <p className="text-white/70">80% reduction in carbon emissions compared to 2024 baseline</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Long-term Target (2040)</h3>
          <p className="text-white/70">Net Zero carbon emissions across all scopes</p>
        </div>
      </div>
    ),
  },
  {
    id: 'initiatives',
    title: 'Carbon Reduction Initiatives',
    content: (
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Energy Efficiency</h3>
          <ul className="space-y-2 text-white/70">
            <li className="flex items-start gap-3">
              <span className="text-[#dff140] mt-1">•</span>
              <span>Transition to energy-efficient LED lighting in all offices</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dff140] mt-1">•</span>
              <span>Implementation of smart building management systems</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dff140] mt-1">•</span>
              <span>Regular energy audits and optimization</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dff140] mt-1">•</span>
              <span>Use of energy-efficient IT equipment and servers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dff140] mt-1">•</span>
              <span>Optimization of data center cooling systems</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Renewable Energy</h3>
          <ul className="space-y-2 text-white/70">
            <li className="flex items-start gap-3">
              <span className="text-[#dff140] mt-1">•</span>
              <span>Installation of solar panels at our facilities</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dff140] mt-1">•</span>
              <span>Procurement of renewable energy certificates</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dff140] mt-1">•</span>
              <span>Partnership with green energy providers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dff140] mt-1">•</span>
              <span>Target: 100% renewable electricity by 2030</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Sustainable Transportation</h3>
          <ul className="space-y-2 text-white/70">
            <li className="flex items-start gap-3">
              <span className="text-[#dff140] mt-1">•</span>
              <span>Electric vehicle charging stations at offices</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dff140] mt-1">•</span>
              <span>Transition to electric/hybrid company vehicles</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dff140] mt-1">•</span>
              <span>Encouraging public transport and carpooling</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dff140] mt-1">•</span>
              <span>Remote work policies to reduce commuting</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dff140] mt-1">•</span>
              <span>Virtual meeting preference over business travel</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Digital Sustainability</h3>
          <ul className="space-y-2 text-white/70">
            <li className="flex items-start gap-3">
              <span className="text-[#dff140] mt-1">•</span>
              <span>Selection of green cloud service providers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dff140] mt-1">•</span>
              <span>Optimization of code for energy efficiency</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dff140] mt-1">•</span>
              <span>Efficient data storage and management</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dff140] mt-1">•</span>
              <span>Green software development practices</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Waste Reduction</h3>
          <ul className="space-y-2 text-white/70">
            <li className="flex items-start gap-3">
              <span className="text-[#dff140] mt-1">•</span>
              <span>Paperless office initiatives</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dff140] mt-1">•</span>
              <span>E-waste recycling programs</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dff140] mt-1">•</span>
              <span>Responsible disposal of IT equipment</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dff140] mt-1">•</span>
              <span>Reduction of single-use plastics</span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 'supply-chain',
    title: 'Supply Chain Engagement',
    content: (
      <div className="space-y-4">
        <p className="text-white/70 leading-relaxed">
          We are committed to working with our suppliers to reduce emissions across our value chain:
        </p>
        <ul className="space-y-2 text-white/70">
          <li className="flex items-start gap-3">
            <span className="text-[#dff140] mt-1">•</span>
            <span>Supplier sustainability assessments</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#dff140] mt-1">•</span>
            <span>Preference for suppliers with carbon reduction commitments</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#dff140] mt-1">•</span>
            <span>Collaborative initiatives to reduce Scope 3 emissions</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#dff140] mt-1">•</span>
            <span>Green procurement policies</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'monitoring',
    title: 'Monitoring & Reporting',
    content: (
      <div className="space-y-4">
        <p className="text-white/70 leading-relaxed">
          We maintain transparency in our carbon reduction efforts through:
        </p>
        <ul className="space-y-2 text-white/70">
          <li className="flex items-start gap-3">
            <span className="text-[#dff140] mt-1">•</span>
            <span>Annual carbon footprint measurement and reporting</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#dff140] mt-1">•</span>
            <span>Regular progress updates against targets</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#dff140] mt-1">•</span>
            <span>Third-party verification of emissions data</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#dff140] mt-1">•</span>
            <span>Stakeholder communication and engagement</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'offsetting',
    title: 'Carbon Offsetting',
    content: (
      <p className="text-white/70 leading-relaxed">
        While our primary focus is on emissions reduction, we will invest in high-quality carbon offset projects to address residual emissions that cannot be eliminated. These projects include reforestation, renewable energy projects, and community-based initiatives. We prioritize certified projects that deliver verified environmental and social benefits.
      </p>
    ),
  },
  {
    id: 'employee-engagement',
    title: 'Employee Engagement',
    content: (
      <div className="space-y-4">
        <p className="text-white/70 leading-relaxed">
          We believe in engaging our employees in our sustainability journey:
        </p>
        <ul className="space-y-2 text-white/70">
          <li className="flex items-start gap-3">
            <span className="text-[#dff140] mt-1">•</span>
            <span>Sustainability awareness training programs</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#dff140] mt-1">•</span>
            <span>Green champions program</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#dff140] mt-1">•</span>
            <span>Employee suggestions for carbon reduction</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#dff140] mt-1">•</span>
            <span>Recognition for sustainable practices</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'declaration',
    title: 'Declaration & Sign-off',
    content: (
      <div className="space-y-6">
        <p className="text-white/70 leading-relaxed">
          This Carbon Reduction Plan has been reviewed and approved by the leadership of Kryil Infotech Private Limited. We are committed to implementing the measures outlined in this plan and will review and update it annually to ensure continuous improvement in our environmental performance.
        </p>
        <div className="bg-white/5 p-6 border border-white/10">
          <h3 className="text-lg font-bold text-white mb-4">Kryil Infotech Private Limited</h3>
          <div className="space-y-3 text-white/70">
            <p>Workflow Ranka Junction, 3rd Floor, 224 KR Puram</p>
            <p>Bangalore, Karnataka - 560016, India</p>
            <p className="mt-4">
              <span className="text-white/50">Email:</span>{' '}
              <a href="mailto:contact@kryil.com" className="text-white font-medium hover:underline">
                contact@kryil.com
              </a>
            </p>
          </div>
        </div>
      </div>
    ),
  },
];

export default function CarbonReductionPlan() {
  const [activeSection, setActiveSection] = useState('commitment');

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }));

      for (const section of sectionElements) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom > 150) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#0a0a0a]">
      {/* Navbar spacer */}
      <div className="h-20 md:h-24 bg-[#0a0a0a]"></div>

      {/* Hero Section */}
      <section className="bg-[#0a0a0a] py-16 md:py-20">
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '40px', paddingRight: '40px' }}>
          <AnimatedSection>
            <div className="flex items-center gap-2 text-sm text-white/50 mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/70">Carbon Reduction Plan</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
              <span className="text-[#dff140] text-sm font-medium">Sustainability</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Carbon Reduction Plan
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <p className="text-lg md:text-xl text-white/60 max-w-3xl mb-8">
              Our roadmap to Net Zero emissions by 2040, outlining our commitment to environmental sustainability and climate action.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="flex items-center gap-4 text-sm text-white/50">
              <span>Last Updated: January 1, 2026</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '40px', paddingRight: '40px', paddingBottom: '40px' }}>
          <div className="grid lg:grid-cols-[280px_1fr] gap-12">
            {/* Sidebar Navigation */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-4">
                  On This Page
                </h3>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`block w-full text-left px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                        activeSection === section.id
                          ? 'bg-[#dff140]/10 text-[#dff140] border-l-2 border-[#dff140]'
                          : 'text-white/50 hover:text-white/80 hover:bg-white/5'
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <div className="space-y-16">
              {sections.map((section, index) => (
                <AnimatedSection key={section.id} delay={index * 50}>
                  <div id={section.id} className="scroll-mt-28">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                      {section.title}
                    </h2>
                    {section.content}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
