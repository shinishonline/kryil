import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Careers from './pages/Careers';
import Defense from './pages/Defense';
import InfrastructureServices from './pages/services/InfrastructureServices';
import Cybersecurity from './pages/services/Cybersecurity';
import SoftwareDevelopment from './pages/services/SoftwareDevelopment';
import InfrastructureAutomation from './pages/services/InfrastructureAutomation';
import DigitalMarketing from './pages/services/DigitalMarketing';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f1f0ea]">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/defense" element={<Defense />} />
            <Route path="/services/infrastructure" element={<InfrastructureServices />} />
            <Route path="/services/cybersecurity" element={<Cybersecurity />} />
            <Route path="/services/software-development" element={<SoftwareDevelopment />} />
            <Route path="/services/automation" element={<InfrastructureAutomation />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;
