import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Careers from './pages/Careers';
import EnterpriseSolutions from './pages/services/EnterpriseSolutions';
import ProfessionalServices from './pages/services/ProfessionalServices';
import Cybersecurity from './pages/services/Cybersecurity';
import InfrastructureAutomation from './pages/services/InfrastructureAutomation';
import DatabaseServices from './pages/services/DatabaseServices';
import AIMLServices from './pages/services/AIMLServices';
import NextDOOH from './pages/products/NextDOOH';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfUse from './pages/legal/TermsOfUse';
import AntiSlaveryPolicy from './pages/legal/AntiSlaveryPolicy';
import CarbonReductionPlan from './pages/legal/CarbonReductionPlan';
import BrandRefresh from './pages/BrandRefresh';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import News from './pages/News';
import NewsArticle from './pages/NewsArticle';
import ChatBot from './components/ChatBot';

// Page SEO data
interface PageSEO {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
}

const pageSEO: Record<string, PageSEO> = {
  '/': {
    title: 'KRYIL Infotech | Applied AI & Data Engineering | Bangalore',
    description: 'KRYIL Infotech builds production AI systems for Indian enterprises \u2014 deployed inside your own cloud or on your own hardware. Applied AI, data engineering and private LLM deployment from Bangalore.',
  },
  '/careers': {
    title: 'Careers | Join Our Team | KRYIL Infotech',
    description: 'Join KRYIL Infotech and work on production AI systems, data platforms and our own products. Explore career opportunities in Bangalore.',
  },
  '/blog': {
    title: 'Blog | Engineering Notes on AI & Data | KRYIL Infotech',
    description: 'Technical writing from the KRYIL engineering team on production AI, retrieval systems, private model deployment, data engineering and the things that did not work.',
  },
  '/news': {
    title: 'News & Updates | KRYIL Infotech',
    description: 'Latest news and updates from KRYIL Infotech - announcements, achievements, and industry insights.',
  },
  '/services/enterprise-solutions': {
    title: 'Enterprise Software Development | KRYIL Infotech',
    description: 'Custom enterprise application development services. Build scalable, secure solutions that transform your business operations.',
  },
  '/services/professional-services': {
    title: 'Professional Services & Consulting | KRYIL Infotech',
    description: 'Strategic technology consulting and managed services. Expert consultants to optimize operations and drive business transformation.',
  },
  '/services/cybersecurity': {
    title: 'Security Engineering | AI Security & DPDP | KRYIL Infotech',
    description: 'Threat modelling, secure architecture review, AI security and governance, and DPDP Act readiness. Security designed into the systems we build, not sold as a separate retainer.',
  },
  '/services/automation': {
    title: 'Infrastructure Automation & Cloud DevOps | KRYIL Infotech',
    description: 'Comprehensive infrastructure services and automation. Cloud migration, network architecture, CI/CD pipelines, Kubernetes, and Infrastructure as Code.',
  },
  '/services/database': {
    title: 'Database Administration & Development | KRYIL Infotech',
    description: 'Professional database administration services. SQL Server, Oracle, PostgreSQL, MongoDB, and data warehouse solutions.',
  },
  '/services/aimlservices': {
    title: 'AI/ML Services | Artificial Intelligence | KRYIL Infotech',
    description: 'Advanced Artificial Intelligence solutions. Custom AI development, predictive analytics, natural language processing, and intelligent automation.',
  },
  '/products/nextdooh': {
    title: 'NextDOOH — Cloud Digital Signage | KRYIL Infotech',
    description: 'NextDOOH is a cloud-based digital signage platform for Android displays. Real-time content sync (<2s), multi-zone layouts, remote device management, and WebSocket-powered control. Manage unlimited screens from anywhere.',
    keywords: 'digital signage software, DOOH platform, digital out of home, Android TV signage, cloud signage, content management system, remote screen control, digital menu boards, retail displays, WebSocket sync, multi-zone layouts, kiosk mode',
    ogImage: 'https://kryil.com/nextdooh-og.png',
  },
  '/brand': {
    title: 'Our New Logo | Brand Update | KRYIL Infotech',
    description: 'KRYIL Infotech has refreshed its logo and colour system. The previous logo was in use through 8 July 2026; the new mark is effective from 9 July 2026. Download the approved brand assets.',
    keywords: 'KRYIL logo, KRYIL Infotech brand, new logo 2026, brand refresh, brand assets, logo download',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | KRYIL Infotech',
    description: 'KRYIL Infotech privacy policy - how we collect, use, and protect your personal information.',
  },
  '/terms-of-use': {
    title: 'Terms of Use | KRYIL Infotech',
    description: 'Terms of use and service agreement for KRYIL Infotech website and services.',
  },
  '/anti-slavery-policy': {
    title: 'Anti-Slavery Policy | KRYIL Infotech',
    description: 'KRYIL Infotech anti-slavery and human trafficking policy statement.',
  },
  '/carbon-reduction-plan': {
    title: 'Carbon Reduction Plan | KRYIL Infotech',
    description: 'KRYIL Infotech carbon reduction plan and environmental sustainability commitment.',
  },
};

// Helper to update or create meta tag
function updateMetaTag(name: string, content: string, property?: boolean) {
  const attribute = property ? 'property' : 'name';
  let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, name);
    document.head.appendChild(meta);
  }
  meta.content = content;
}

// Helper to update canonical link
function updateCanonical(url: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = url;
}

// Component to handle hash scroll navigation and page SEO
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    // Get SEO data for current route
    const basePath = location.pathname.split('/').slice(0, 3).join('/');
    const seo = pageSEO[location.pathname] || pageSEO[basePath] || {
      title: 'KRYIL Infotech',
      description: 'KRYIL Infotech \u2014 applied AI and data engineering for Indian enterprises. Bangalore, India.',
    };

    // Set document title
    document.title = seo.title;

    // Update meta description
    updateMetaTag('description', seo.description);

    // Update keywords if provided
    if (seo.keywords) {
      updateMetaTag('keywords', seo.keywords);
    }

    // Update Open Graph tags
    updateMetaTag('og:title', seo.title, true);
    updateMetaTag('og:description', seo.description, true);
    updateMetaTag('og:url', `https://kryil.com${location.pathname}`, true);
    if (seo.ogImage) {
      updateMetaTag('og:image', seo.ogImage, true);
    }

    // Update Twitter tags
    updateMetaTag('twitter:title', seo.title);
    updateMetaTag('twitter:description', seo.description);
    updateMetaTag('twitter:url', `https://kryil.com${location.pathname}`);

    // Update canonical URL
    updateCanonical(`https://kryil.com${location.pathname}`);

    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Handle hash navigation
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToHash />
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#dff140] focus:text-black focus:rounded-lg focus:font-semibold"
      >
        Skip to main content
      </a>
      <div className="min-h-screen bg-[#f1f0ea]">
        <Header />
        <main id="main-content" className="pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/careers" element={<Careers />} />
            {/* Retired: defence/UAV positioning removed. Kept as a redirect so existing links and
                indexed URLs do not 404. src/pages/Defense.tsx is retained but unrouted. */}
            <Route path="/defense" element={<Navigate to="/" replace />} />
            <Route path="/services/enterprise-solutions" element={<EnterpriseSolutions />} />
            <Route path="/services/professional-services" element={<ProfessionalServices />} />
            <Route path="/services/aimlservices" element={<AIMLServices />} />
            <Route path="/services/cybersecurity" element={<Cybersecurity />} />
            <Route path="/services/automation" element={<InfrastructureAutomation />} />
            <Route path="/services/database" element={<DatabaseServices />} />
            {/* Products */}
            {/* Retired: Avionix withdrawn from the public site. Redirect keeps indexed URLs
                alive; src/pages/products/Avionix.tsx is retained but unrouted. */}
            <Route path="/products/avionix" element={<Navigate to="/" replace />} />
            <Route path="/products/nextdooh" element={<NextDOOH />} />
            {/* Brand */}
            <Route path="/brand" element={<BrandRefresh />} />
            {/* Blog & News */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<NewsArticle />} />
            {/* Legal Pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/anti-slavery-policy" element={<AntiSlaveryPolicy />} />
                        <Route path="/carbon-reduction-plan" element={<CarbonReductionPlan />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;
