import { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  isForm?: boolean;
}

interface LeadForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// Knowledge base with all website information
const knowledgeBase = {
  company: {
    name: 'KRYIL Infotech',
    location: 'Bangalore, India',
    address: 'Workflow Ranka Junction, 3rd Floor, 224 KR Puram, Bangalore, Karnataka 560016',
    phone: '+91-8089090365',
    email: 'info@kryil.com',
    coverage: 'Worldwide',
    about: 'KRYIL Infotech is a technology company specializing in AI, Cloud, and Software Solutions. We build digital excellence through innovative infrastructure, cybersecurity, and software development services.',
  },
  services: [
    {
      name: 'Infrastructure Services',
      description: 'Cloud migration across AWS, Azure, GCP. Multi-cloud management, network architecture, disaster recovery, and cost optimization.',
      stats: '99.99% Uptime SLA, 50% Cost Reduction, 200+ Projects, 24/7 Support',
    },
    {
      name: 'Cybersecurity Services',
      description: 'Security audits, penetration testing, threat detection, incident response, and compliance management (GDPR, HIPAA, PCI-DSS, SOC 2).',
      stats: '0 Breaches, 24/7 Monitoring, 500+ Audits, <15min Response',
    },
    {
      name: 'Software Development',
      description: 'Enterprise applications, web & mobile development, API development (REST/GraphQL), legacy modernization. Tech: React, Node.js, Python, Java, TypeScript.',
      stats: '200+ Apps Built, 99.9% Uptime, 40% Faster Delivery',
    },
    {
      name: 'Infrastructure Automation',
      description: 'Infrastructure as Code (Terraform, Ansible), CI/CD pipelines, configuration management, RPA, monitoring & alerting.',
      stats: '90% Faster Deployments, 80% Less Manual Work, 1000+ Pipelines',
    },
    {
      name: 'Digital Marketing',
      description: 'SEO, PPC advertising, social media marketing, content marketing, email campaigns, and analytics.',
      stats: '300% Traffic Growth, 5M+ Leads Generated, 4.2x ROI',
    },
    {
      name: 'Database Administration',
      description: 'Database management, optimization, migration, and business intelligence. SQL Server, Oracle, MySQL, PostgreSQL, MongoDB, Power BI, Microsoft Fabric.',
      stats: '500+ Databases Managed, 99.99% Uptime, 60% Performance Boost',
    },
  ],
  careers: [
    { title: 'Senior Full Stack Developer', department: 'Engineering', location: 'Remote', experience: '5+ years' },
    { title: 'AI/ML Engineer', department: 'AI & Data Science', location: 'Remote', experience: '3+ years' },
    { title: 'Cloud Solutions Architect', department: 'Cloud Infrastructure', location: 'Remote', experience: '7+ years' },
    { title: 'Cybersecurity Analyst', department: 'Security', location: 'Remote', experience: '4+ years' },
    { title: 'Digital Marketing Specialist', department: 'Marketing', location: 'Remote', experience: '3+ years' },
    { title: 'UI/UX Designer', department: 'Design', location: 'Remote', experience: '4+ years' },
  ],
  defense: {
    about: 'KRYIL Defense Division specializes in advanced UAV/drone technology for defense applications.',
    products: ['QDYNA 101 (Surveillance UAV)', 'QDYNA 501 (Combat UAV)', 'QDYNA 901 (Tactical Swarm)'],
    capabilities: 'Autonomous navigation, encrypted communications, real-time intelligence, swarm coordination, stealth technology.',
    stats: '500+ Units Deployed, 99.9% Mission Success, 15+ Defense Partners',
  },
};

// Simple keyword-based response system
function getResponse(input: string): string {
  const lowerInput = input.toLowerCase();

  // Greetings
  if (lowerInput.match(/^(hi|hello|hey|greetings)/)) {
    return "Hello! Welcome to KRYIL Infotech. I can help you with information about our services, careers, or company. What would you like to know?";
  }

  // Company info
  if (lowerInput.includes('about') || lowerInput.includes('company') || lowerInput.includes('who are you') || lowerInput.includes('what is kryil')) {
    return `${knowledgeBase.company.about}\n\nWe're based in ${knowledgeBase.company.location} and serve clients worldwide.`;
  }

  // Contact info
  if (lowerInput.includes('contact') || lowerInput.includes('phone') || lowerInput.includes('email') || lowerInput.includes('reach') || lowerInput.includes('address')) {
    return `You can reach us at:\n📧 ${knowledgeBase.company.email}\n📞 ${knowledgeBase.company.phone}\n📍 ${knowledgeBase.company.address}`;
  }

  // Location
  if (lowerInput.includes('location') || lowerInput.includes('where') || lowerInput.includes('based') || lowerInput.includes('office')) {
    return `We're located in ${knowledgeBase.company.location}.\n📍 ${knowledgeBase.company.address}\n\nWe serve clients worldwide!`;
  }

  // Services - general
  if (lowerInput.includes('service') && !lowerInput.includes('infrastructure') && !lowerInput.includes('cyber') && !lowerInput.includes('software') && !lowerInput.includes('automation') && !lowerInput.includes('marketing') && !lowerInput.includes('database')) {
    const serviceList = knowledgeBase.services.map(s => `• ${s.name}`).join('\n');
    return `We offer 6 core services:\n${serviceList}\n\nAsk me about any specific service for more details!`;
  }

  // Infrastructure
  if (lowerInput.includes('infrastructure') || lowerInput.includes('cloud') || lowerInput.includes('aws') || lowerInput.includes('azure')) {
    const s = knowledgeBase.services[0];
    return `**${s.name}**\n${s.description}\n\n📊 ${s.stats}`;
  }

  // Cybersecurity
  if (lowerInput.includes('cyber') || lowerInput.includes('security') || lowerInput.includes('penetration') || lowerInput.includes('audit')) {
    const s = knowledgeBase.services[1];
    return `**${s.name}**\n${s.description}\n\n📊 ${s.stats}`;
  }

  // Software Development
  if (lowerInput.includes('software') || lowerInput.includes('development') || lowerInput.includes('app') || lowerInput.includes('web') || lowerInput.includes('mobile')) {
    const s = knowledgeBase.services[2];
    return `**${s.name}**\n${s.description}\n\n📊 ${s.stats}`;
  }

  // Automation
  if (lowerInput.includes('automation') || lowerInput.includes('devops') || lowerInput.includes('ci/cd') || lowerInput.includes('terraform')) {
    const s = knowledgeBase.services[3];
    return `**${s.name}**\n${s.description}\n\n📊 ${s.stats}`;
  }

  // Digital Marketing
  if (lowerInput.includes('marketing') || lowerInput.includes('seo') || lowerInput.includes('ppc') || lowerInput.includes('social media')) {
    const s = knowledgeBase.services[4];
    return `**${s.name}**\n${s.description}\n\n📊 ${s.stats}`;
  }

  // Database Administration
  if (lowerInput.includes('database') || lowerInput.includes('dba') || lowerInput.includes('sql') || lowerInput.includes('power bi') || lowerInput.includes('fabric') || lowerInput.includes('mongodb') || lowerInput.includes('postgresql')) {
    const s = knowledgeBase.services[5];
    return `**${s.name}**\n${s.description}\n\n📊 ${s.stats}`;
  }

  // Careers - general
  if (lowerInput.includes('career') || lowerInput.includes('job') || lowerInput.includes('hiring') || lowerInput.includes('work') || lowerInput.includes('position') || lowerInput.includes('opening') || lowerInput.includes('vacancy')) {
    const jobList = knowledgeBase.careers.map(j => `• ${j.title} (${j.experience})`).join('\n');
    return `We're currently hiring for:\n${jobList}\n\nAll positions are remote! Visit /careers for more details or share your resume with us.`;
  }

  // Specific job roles
  if (lowerInput.includes('developer') || lowerInput.includes('engineer') || lowerInput.includes('full stack')) {
    const job = knowledgeBase.careers.find(j => j.title.toLowerCase().includes('developer') || j.title.toLowerCase().includes('engineer'));
    if (job) {
      return `**${job.title}**\nDepartment: ${job.department}\nLocation: ${job.location}\nExperience: ${job.experience}\n\nInterested? Share your details and we'll get back to you!`;
    }
  }

  if (lowerInput.includes('ai') || lowerInput.includes('ml') || lowerInput.includes('machine learning')) {
    const job = knowledgeBase.careers.find(j => j.title.includes('AI'));
    if (job) {
      return `**${job.title}**\nDepartment: ${job.department}\nLocation: ${job.location}\nExperience: ${job.experience}\n\nWe're building cutting-edge AI solutions. Interested? Share your details!`;
    }
  }

  if (lowerInput.includes('designer') || lowerInput.includes('ux') || lowerInput.includes('ui')) {
    const job = knowledgeBase.careers.find(j => j.title.includes('Designer'));
    if (job) {
      return `**${job.title}**\nDepartment: ${job.department}\nLocation: ${job.location}\nExperience: ${job.experience}\n\nJoin our design team! Share your portfolio with us.`;
    }
  }

  // Defense
  if (lowerInput.includes('defense') || lowerInput.includes('drone') || lowerInput.includes('uav') || lowerInput.includes('military')) {
    return `**KRYIL Defense Division**\n${knowledgeBase.defense.about}\n\nProducts: ${knowledgeBase.defense.products.join(', ')}\n\nCapabilities: ${knowledgeBase.defense.capabilities}\n\n📊 ${knowledgeBase.defense.stats}`;
  }

  // Pricing
  if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('pricing') || lowerInput.includes('quote')) {
    return "Our pricing is customized based on project requirements. Share your details and requirements, and our team will provide a tailored quote!";
  }

  // Help
  if (lowerInput.includes('help') || lowerInput.includes('what can you')) {
    return "I can help you with:\n• Company information\n• Our services (Infrastructure, Cybersecurity, Software, Automation, Marketing)\n• Career opportunities\n• Defense products\n• Contact details\n\nJust ask away!";
  }

  // Connect / Talk to someone
  if (lowerInput.includes('talk') || lowerInput.includes('speak') || lowerInput.includes('human') || lowerInput.includes('representative') || lowerInput.includes('connect')) {
    return "I'd be happy to connect you with our team! Please share your details and we'll have someone reach out to you shortly.";
  }

  // Thank you
  if (lowerInput.includes('thank') || lowerInput.includes('thanks')) {
    return "You're welcome! Is there anything else I can help you with?";
  }

  // Bye
  if (lowerInput.includes('bye') || lowerInput.includes('goodbye')) {
    return "Goodbye! Feel free to reach out anytime. Have a great day!";
  }

  // Default
  return "I'd be happy to help! You can ask me about:\n• Our services\n• Career opportunities\n• Company information\n• Contact details\n\nOr share your details and our team will reach out to you!";
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi! I'm KRYIL's assistant. How can I help you today?", isBot: true },
  ]);
  const [input, setInput] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<LeadForm>({ name: '', email: '', phone: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { id: Date.now(), text: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);

    // Check if user wants to share details
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes('share') || lowerInput.includes('contact me') || lowerInput.includes('interested') || lowerInput.includes('apply') || lowerInput.includes('get in touch') || lowerInput.includes('quote') || lowerInput.includes('details')) {
      setTimeout(() => {
        setMessages(prev => [...prev, { id: Date.now(), text: "Great! Please fill out the form below and our team will reach out to you.", isBot: true }]);
        setShowForm(true);
      }, 500);
    } else {
      const response = getResponse(input);
      setTimeout(() => {
        setMessages(prev => [...prev, { id: Date.now(), text: response, isBot: true }]);
      }, 500);
    }

    setInput('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = encodeURIComponent(`New Lead from KRYIL Chatbot - ${formData.name}`);
    const body = encodeURIComponent(
      `New lead from KRYIL website chatbot:\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Message: ${formData.message}\n\n` +
      `---\nSent via Kryil Infotech Chatbot`
    );

    // Open mailto link
    window.open(`mailto:shinish@kryil.com?subject=${subject}&body=${body}`, '_blank');

    // Also log to console for backend integration
    console.log('Lead submitted:', formData);

    setFormSubmitted(true);
    setShowForm(false);
    setMessages(prev => [...prev, {
      id: Date.now(),
      text: `Thank you, ${formData.name}! Your details have been sent to our team. We'll reach out to you at ${formData.email} soon!`,
      isBot: true
    }]);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const quickActions = [
    { label: 'Services', query: 'What services do you offer?' },
    { label: 'Careers', query: 'What jobs are available?' },
    { label: 'Contact', query: 'How can I contact you?' },
  ];

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#dff140] hover:bg-[#e8f756] rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Chat with us"
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 h-[28rem] bg-black border border-white/10 rounded-lg shadow-2xl flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-[#dff140] px-5 py-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-black flex items-center justify-center">
              <span className="text-[#dff140] text-sm font-bold font-['Lato']">K</span>
            </div>
            <div>
              <h3 className="text-black font-semibold text-sm font-['Lato']">KRYIL Assistant</h3>
              <p className="text-black/60 text-xs font-['Lato']">Online • Here to help</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-3 text-sm whitespace-pre-line font-['Lato'] ${
                    msg.isBot
                      ? 'bg-white/10 text-white'
                      : 'bg-[#dff140] text-black'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Lead Form */}
            {showForm && !formSubmitted && (
              <div className="bg-white/5 border border-white/10 p-4 mt-2">
                <form onSubmit={handleFormSubmit} className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white text-sm font-['Lato'] placeholder:text-white/40 focus:outline-none focus:border-[#dff140]"
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white text-sm font-['Lato'] placeholder:text-white/40 focus:outline-none focus:border-[#dff140]"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white text-sm font-['Lato'] placeholder:text-white/40 focus:outline-none focus:border-[#dff140]"
                  />
                  <textarea
                    placeholder="How can we help?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={2}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white text-sm font-['Lato'] placeholder:text-white/40 focus:outline-none focus:border-[#dff140] resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#dff140] hover:bg-[#e8f756] text-black font-semibold text-sm font-['Lato'] transition-colors"
                  >
                    Send Details
                  </button>
                </form>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length === 1 && (
            <div className="px-5 pb-3 flex gap-2 flex-wrap">
              {quickActions.map((action) => (
                <button
                  key={action.label}
                  onClick={() => {
                    setInput(action.query);
                    setTimeout(() => {
                      const userMessage: Message = { id: Date.now(), text: action.query, isBot: false };
                      setMessages(prev => [...prev, userMessage]);
                      const response = getResponse(action.query);
                      setTimeout(() => {
                        setMessages(prev => [...prev, { id: Date.now(), text: response, isBot: true }]);
                      }, 500);
                      setInput('');
                    }, 0);
                  }}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-['Lato'] transition-colors"
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="px-5 py-4 border-t border-white/10">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white text-sm font-['Lato'] placeholder:text-white/40 focus:outline-none focus:border-[#dff140]"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="px-4 py-3 bg-[#dff140] hover:bg-[#e8f756] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
