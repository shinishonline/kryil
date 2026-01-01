import Hero from '../components/Hero';
import About from '../components/About';
import WhoWeAre from '../components/WhoWeAre';
import Mission from '../components/Mission';
import WhyPartner from '../components/WhyPartner';
import ServicesGrid from '../components/ServicesGrid';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhoWeAre />
      <Mission />
      <WhyPartner />
      <ServicesGrid />
      <Contact />
    </>
  );
}
