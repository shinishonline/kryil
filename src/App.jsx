// src/App.jsx
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

import Home from "./pages/Home";
import InfrastructureServices from "./pages/Infrastructure";
import CybersecurityServices from "./pages/CybersecurityServices";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import Footer from "./components/Footer";
import InfrastructureAutomation from "./pages/Automation";
import DigitalMarketing from "./pages/DigitalMarketing";
import Careers from "./pages/Careers";
import Admin from "./pages/Admin";
import CookieConsent from "./components/CookieConsent";
import Chatbot from "./components/Chatbot";

// ✅ Inline scroll reset using useLocation
function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// ✅ Conditional Footer - only show on home page
function ConditionalFooter() {
  const { pathname } = useLocation();
  const showFooter = pathname === "/";

  return showFooter ? <Footer /> : null;
}

export default function App() {
  return (
    <HelmetProvider>
      {/* ✅ Always reset scroll on route change */}
      <ScrollToTopOnRouteChange />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/infrastructure-services" element={<InfrastructureServices />} />
        <Route path="/cyber-security" element={<CybersecurityServices />} />
        <Route path="/software" element={<SoftwareDevelopment />} />
        <Route path="/automation" element={<InfrastructureAutomation />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/admin" element={<Admin />} />
        {/* 404 Catch-all - Redirect to home */}
        <Route path="*" element={<Home />} />
      </Routes>

      <ConditionalFooter />
      <CookieConsent />
      <Chatbot />
    </HelmetProvider>
  );
}
