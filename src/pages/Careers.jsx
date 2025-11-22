import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BriefcaseIcon,
  MapPinIcon,
  ClockIcon,
  CurrencyDollarIcon,
  XMarkIcon,
  PaperClipIcon,
} from "@heroicons/react/24/outline";

export default function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedTab, setSelectedTab] = useState("jobs"); // "jobs" or "internships"
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [showInitialPopup, setShowInitialPopup] = useState(true);
  const [visitorInfo, setVisitorInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedIn: "",
    coverLetter: "",
    resume: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "5-8 years",
      description: "Build scalable web applications using React, Node.js, and cloud technologies.",
      requirements: [
        "5+ years of experience with React and Node.js",
        "Strong understanding of cloud platforms (AWS/Azure/GCP)",
        "Experience with microservices architecture",
        "Excellent problem-solving and communication skills"
      ]
    },
    {
      id: 2,
      title: "Cybersecurity Analyst",
      department: "Security",
      location: "Bangalore, India / Remote",
      type: "Full-time",
      experience: "3-5 years",
      description: "Protect our infrastructure and client systems from security threats.",
      requirements: [
        "3+ years in cybersecurity or related field",
        "Experience with SIEM, IDS/IPS, and security monitoring tools",
        "Knowledge of compliance standards (ISO 27001, SOC 2)",
        "Relevant certifications (CISSP, CEH, or similar) preferred"
      ]
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "4-6 years",
      description: "Automate infrastructure and streamline deployment pipelines.",
      requirements: [
        "4+ years of DevOps experience",
        "Proficiency with Kubernetes, Docker, Terraform",
        "Experience with CI/CD tools (Jenkins, GitLab CI, GitHub Actions)",
        "Strong scripting skills (Python, Bash, Go)"
      ]
    },
    {
      id: 4,
      title: "AI/ML Engineer",
      department: "AI & Data",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "3-6 years",
      description: "Develop and deploy machine learning models for enterprise applications.",
      requirements: [
        "3+ years of ML/AI experience",
        "Proficiency in Python, TensorFlow, PyTorch",
        "Experience with NLP, computer vision, or recommender systems",
        "Strong understanding of data pipelines and MLOps"
      ]
    },
    {
      id: 5,
      title: "IoT Solutions Architect",
      department: "Engineering",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "6-10 years",
      description: "Design and implement IoT solutions for industrial and commercial clients.",
      requirements: [
        "6+ years in IoT or embedded systems",
        "Experience with MQTT, CoAP, and IoT protocols",
        "Knowledge of edge computing and sensor networks",
        "Strong understanding of cloud IoT platforms (AWS IoT, Azure IoT)"
      ]
    },
    {
      id: 6,
      title: "UI/UX Designer",
      department: "Design",
      location: "Bangalore, India / Remote",
      type: "Full-time",
      experience: "3-5 years",
      description: "Create intuitive and engaging user experiences for web and mobile applications.",
      requirements: [
        "3+ years of UI/UX design experience",
        "Proficiency in Figma, Adobe XD, or Sketch",
        "Strong portfolio demonstrating design thinking",
        "Understanding of front-end development (HTML, CSS, React)"
      ]
    }
  ];

  const departments = ["All", "Engineering", "Security", "AI & Data", "Design"];

  const internshipPrograms = [
    {
      id: 1,
      title: "Software Engineering Intern",
      department: "Engineering",
      location: "Bangalore, India",
      duration: "3-6 months",
      type: "Internship",
      description: "Learn full-stack development, work on real projects, and gain hands-on experience with modern technologies.",
      responsibilities: [
        "Assist in developing web applications using React and Node.js",
        "Participate in code reviews and team meetings",
        "Work on assigned features under mentorship",
        "Learn best practices for software development"
      ],
      eligibility: [
        "Currently pursuing Bachelor's/Master's in Computer Science or related field",
        "Knowledge of JavaScript, HTML, CSS",
        "Familiarity with Git and version control",
        "Strong problem-solving skills and eagerness to learn"
      ],
      benefits: [
        "Monthly stipend",
        "Mentorship from senior engineers",
        "Certificate of completion",
        "Potential for full-time offer upon graduation"
      ]
    },
    {
      id: 2,
      title: "Cybersecurity Intern",
      department: "Security",
      location: "Bangalore, India / Remote",
      duration: "3-6 months",
      type: "Internship",
      description: "Gain practical experience in cybersecurity, threat analysis, and security operations.",
      responsibilities: [
        "Assist in security monitoring and incident response",
        "Learn to use security tools (SIEM, IDS/IPS)",
        "Participate in vulnerability assessments",
        "Document security procedures and findings"
      ],
      eligibility: [
        "Pursuing degree in Cybersecurity, IT, or related field",
        "Basic understanding of networking and security concepts",
        "Interest in ethical hacking and security research",
        "Good analytical and documentation skills"
      ],
      benefits: [
        "Monthly stipend",
        "Hands-on security experience",
        "Access to security training resources",
        "Industry-recognized certificate"
      ]
    },
    {
      id: 3,
      title: "AI/ML Research Intern",
      department: "AI & Data",
      location: "Bangalore, India",
      duration: "4-6 months",
      type: "Internship",
      description: "Work on cutting-edge AI/ML projects and research under guidance of experienced data scientists.",
      responsibilities: [
        "Assist in building and training machine learning models",
        "Data preprocessing and feature engineering",
        "Experiment with different ML algorithms",
        "Document research findings and results"
      ],
      eligibility: [
        "Pursuing Master's/PhD in Computer Science, AI, or related field",
        "Strong foundation in Python and ML libraries (TensorFlow, PyTorch)",
        "Understanding of statistics and linear algebra",
        "Research-oriented mindset"
      ],
      benefits: [
        "Competitive stipend",
        "Access to high-performance computing resources",
        "Opportunity to publish research",
        "Mentorship from AI experts"
      ]
    },
    {
      id: 4,
      title: "UI/UX Design Intern",
      department: "Design",
      location: "Bangalore, India / Remote",
      duration: "3-6 months",
      type: "Internship",
      description: "Create user-centered designs for web and mobile applications while learning industry best practices.",
      responsibilities: [
        "Create wireframes, mockups, and prototypes",
        "Conduct user research and usability testing",
        "Collaborate with developers and product managers",
        "Maintain design system and documentation"
      ],
      eligibility: [
        "Pursuing degree in Design, HCI, or related field",
        "Portfolio showcasing design projects",
        "Proficiency in Figma, Adobe XD, or Sketch",
        "Understanding of UX principles and design thinking"
      ],
      benefits: [
        "Monthly stipend",
        "Portfolio-building opportunities",
        "Mentorship from senior designers",
        "Latest design tools and resources"
      ]
    },
    {
      id: 5,
      title: "DevOps Intern",
      department: "Engineering",
      location: "Bangalore, India",
      duration: "3-6 months",
      type: "Internship",
      description: "Learn infrastructure automation, CI/CD pipelines, and cloud technologies in a production environment.",
      responsibilities: [
        "Assist in automating deployment processes",
        "Learn Docker, Kubernetes, and cloud platforms",
        "Monitor system performance and logs",
        "Support DevOps team with daily operations"
      ],
      eligibility: [
        "Pursuing Bachelor's/Master's in Computer Science or IT",
        "Basic knowledge of Linux and command line",
        "Interest in automation and infrastructure",
        "Willingness to learn new technologies quickly"
      ],
      benefits: [
        "Monthly stipend",
        "Hands-on cloud platform experience",
        "Industry certifications support",
        "Fast-track career growth opportunity"
      ]
    },
    {
      id: 6,
      title: "IoT Engineering Intern",
      department: "Engineering",
      location: "Bangalore, India",
      duration: "4-6 months",
      type: "Internship",
      description: "Work on IoT projects involving sensors, embedded systems, and edge computing.",
      responsibilities: [
        "Develop IoT applications and integrations",
        "Work with sensors and microcontrollers",
        "Test and debug IoT systems",
        "Document technical specifications"
      ],
      eligibility: [
        "Pursuing degree in Electronics, Computer Engineering, or related field",
        "Knowledge of C/C++, Python, or JavaScript",
        "Basic understanding of IoT protocols (MQTT, HTTP)",
        "Interest in hardware and embedded systems"
      ],
      benefits: [
        "Monthly stipend",
        "Access to IoT hardware and tools",
        "Real-world project experience",
        "Industry mentorship"
      ]
    }
  ];

  const filteredJobs = selectedDepartment === "All"
    ? jobOpenings
    : jobOpenings.filter(job => job.department === selectedDepartment);

  const filteredInternships = selectedDepartment === "All"
    ? internshipPrograms
    : internshipPrograms.filter(internship => internship.department === selectedDepartment);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const handleApplyClick = (position) => {
    setSelectedPosition(position);
    setShowApplicationModal(true);
    setSubmitSuccess(false);
    setSubmitError("");
  };

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleInitialSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!visitorInfo.name || !visitorInfo.email || !visitorInfo.phone) {
      setSubmitError("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Save visitor info to database
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';

      const response = await fetch(`${apiUrl}/api/submit-contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: visitorInfo.name,
          email: visitorInfo.email,
          phone: visitorInfo.phone,
          message: `Career interest - ${selectedTab === 'internships' ? 'Internship' : 'Job'} inquiry`,
          source: 'careers_visitor'
        })
      });

      const data = await response.json();

      if (data.success) {
        // Determine email recipient based on tab
        const emailRecipient = selectedTab === 'internships' ? 'connect@kryil.com' : 'info@kryil.com';

        // Log email that should be sent (in production, trigger actual email service)
        console.log(`Resume request email to be sent to ${emailRecipient}:`, {
          to: visitorInfo.email,
          cc: emailRecipient,
          subject: `Resume Submission Request - Kryil ${selectedTab === 'internships' ? 'Internship' : 'Career'} Opportunities`,
          body: `Dear ${visitorInfo.name},\n\nThank you for your interest in ${selectedTab === 'internships' ? 'internship' : 'career'} opportunities at Kryil Infotech!\n\nPlease submit your resume by emailing it to ${emailRecipient}.\n\nWe look forward to reviewing your application.\n\nBest regards,\nKryil Infotech Team`
        });

        // Close popup and show success message
        setShowInitialPopup(false);
        setSubmitSuccess(true);
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        setSubmitError("Failed to save information. Please try again.");
      }
    } catch (error) {
      console.error('Error saving visitor info:', error);
      setSubmitError("Failed to save information. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmitApplication = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Convert resume to base64 if provided
      let resumeData = null;
      if (formData.resume) {
        const reader = new FileReader();
        resumeData = await new Promise((resolve, reject) => {
          reader.onload = () => resolve({
            name: formData.resume.name,
            type: formData.resume.type,
            size: formData.resume.size,
            data: reader.result
          });
          reader.onerror = reject;
          reader.readAsDataURL(formData.resume);
        });
      }

      // Submit to MongoDB API
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';

      const response = await fetch(`${apiUrl}/api/submit-application`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          linkedIn: formData.linkedIn,
          coverLetter: formData.coverLetter,
          position: `${selectedPosition.title} - ${selectedPosition.department}`,
          resumeData: resumeData
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitSuccess(true);
        setTimeout(() => {
          setShowApplicationModal(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            linkedIn: "",
            coverLetter: "",
            resume: null,
          });
        }, 2000);
      } else {
        setSubmitError("Failed to submit application. Please try again or email us directly at info@kryil.com");
      }

    } catch (error) {
      console.error('Error submitting application:', error);
      setSubmitError("Failed to submit application. Please try again or email us directly at info@kryil.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setShowApplicationModal(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      linkedIn: "",
      coverLetter: "",
      resume: null,
    });
    setSubmitSuccess(false);
    setSubmitError("");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-darkBg transition-colors duration-500">
      {/* Initial Visitor Info Popup */}
      <AnimatePresence>
        {showInitialPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 dark:bg-cyan-900/30 rounded-full mb-4">
                  <BriefcaseIcon className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Welcome to Kryil Careers
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Please share your details to explore opportunities
                </p>
              </div>

              <form onSubmit={handleInitialSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={visitorInfo.name}
                    onChange={(e) => setVisitorInfo({ ...visitorInfo, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={visitorInfo.email}
                    onChange={(e) => setVisitorInfo({ ...visitorInfo, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={visitorInfo.phone}
                    onChange={(e) => setVisitorInfo({ ...visitorInfo, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                {submitError && (
                  <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg text-sm space-y-2">
                    <p>{submitError}</p>
                    <a
                      href={`mailto:${selectedTab === 'internships' ? 'connect@kryil.com' : 'info@kryil.com'}?subject=Career Interest from ${encodeURIComponent(visitorInfo.name)}&body=${encodeURIComponent(`Name: ${visitorInfo.name}\nEmail: ${visitorInfo.email}\nPhone: ${visitorInfo.phone}\n\nInterested in: ${selectedTab === 'internships' ? 'Internship' : 'Job'} opportunities`)}`}
                      className="inline-block mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition text-sm"
                    >
                      📧 Send via Email Instead
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Continue to Careers"
                  )}
                </button>

                <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
                  We'll send you an email with instructions to submit your resume
                </p>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Message Toast */}
      <AnimatePresence>
        {submitSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-6 right-6 z-50 bg-green-500 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <p className="font-semibold">Success!</p>
              <p className="text-sm">Check your email for resume submission instructions</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="bg-cyan-600 dark:bg-cyan-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-semibold mb-6"
          >
            Join Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl font-light max-w-3xl mx-auto"
          >
            Build the future of technology with us. We're looking for passionate innovators
            who want to make a real impact.
          </motion.p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 px-6 bg-white dark:bg-[#272727]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-semibold text-cyan-600 text-center mb-12">
            Why Kryil?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Innovation First", desc: "Work on cutting-edge projects with the latest technologies." },
              { title: "Growth & Learning", desc: "Continuous learning opportunities and career development programs." },
              { title: "Work-Life Balance", desc: "Flexible hours, remote options, and a supportive work environment." },
              { title: "Competitive Benefits", desc: "Industry-leading compensation, health insurance, and perks." },
              { title: "Collaborative Culture", desc: "Open communication, knowledge sharing, and teamwork." },
              { title: "Impact & Purpose", desc: "Build solutions that transform businesses and industries." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                custom={idx}
                className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-cyan-500 transition-all"
              >
                <h3 className="text-2xl font-extralight mb-3 text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-base text-gray-600 dark:text-slate-300">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-semibold text-cyan-600 text-center mb-8">
            Open Positions
          </h2>

          {/* Tabs for Jobs vs Internships */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setSelectedTab("jobs")}
              className={`px-8 py-3 rounded-lg text-lg font-semibold transition-all ${
                selectedTab === "jobs"
                  ? "bg-cyan-600 text-white shadow-lg"
                  : "bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-slate-300 hover:bg-gray-300 dark:hover:bg-slate-600"
              }`}
            >
              Full-Time Jobs
            </button>
            <button
              onClick={() => setSelectedTab("internships")}
              className={`px-8 py-3 rounded-lg text-lg font-semibold transition-all ${
                selectedTab === "internships"
                  ? "bg-cyan-600 text-white shadow-lg"
                  : "bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-slate-300 hover:bg-gray-300 dark:hover:bg-slate-600"
              }`}
            >
              Internship Programs
            </button>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedDepartment === dept
                    ? "bg-cyan-600 text-white"
                    : "bg-white dark:bg-slate-800 text-gray-700 dark:text-slate-300 border border-gray-300 dark:border-slate-600 hover:border-cyan-500"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          {selectedTab === "jobs" && (
          <div className="space-y-6">
            {filteredJobs.map((job, idx) => (
              <motion.div
                key={job.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                custom={idx}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 hover:border-cyan-500 transition-all hover:shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-3xl font-extralight text-gray-900 dark:text-white mb-2">
                      {job.title}
                    </h3>
                    <p className="text-base text-gray-600 dark:text-slate-300 mb-3">
                      {job.description}
                    </p>
                  </div>
                  <button
                    onClick={() => handleApplyClick(job)}
                    className="px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500 transition-colors whitespace-nowrap"
                  >
                    Apply Now
                  </button>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-slate-400 mb-4">
                  <div className="flex items-center gap-2">
                    <BriefcaseIcon className="w-5 h-5" />
                    <span>{job.department}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="w-5 h-5" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-5 h-5" />
                    <span>{job.type} • {job.experience}</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-slate-700 pt-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Requirements:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-base text-gray-600 dark:text-slate-300">
                    {job.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          )}

          {/* Internship Listings */}
          {selectedTab === "internships" && (
          <div className="space-y-6">
            {filteredInternships.map((internship, idx) => (
              <motion.div
                key={internship.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                custom={idx}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 hover:border-cyan-500 transition-all hover:shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <div className="inline-block px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 rounded-full text-xs font-semibold mb-2">
                      INTERNSHIP
                    </div>
                    <h3 className="text-3xl font-extralight text-gray-900 dark:text-white mb-2">
                      {internship.title}
                    </h3>
                    <p className="text-base text-gray-600 dark:text-slate-300 mb-3">
                      {internship.description}
                    </p>
                  </div>
                  <button
                    onClick={() => handleApplyClick(internship)}
                    className="px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500 transition-colors whitespace-nowrap"
                  >
                    Apply Now
                  </button>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-slate-400 mb-4">
                  <div className="flex items-center gap-2">
                    <BriefcaseIcon className="w-5 h-5" />
                    <span>{internship.department}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="w-5 h-5" />
                    <span>{internship.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-5 h-5" />
                    <span>{internship.duration}</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-slate-700 pt-4 space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Responsibilities:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-base text-gray-600 dark:text-slate-300">
                      {internship.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Eligibility:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-base text-gray-600 dark:text-slate-300">
                      {internship.eligibility.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Benefits:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-base text-gray-600 dark:text-slate-300">
                      {internship.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          )}

          {selectedTab === "jobs" && filteredJobs.length === 0 && (
            <p className="text-center text-gray-600 dark:text-slate-400 text-lg py-12">
              No job openings in this department at the moment. Check back soon!
            </p>
          )}

          {selectedTab === "internships" && filteredInternships.length === 0 && (
            <p className="text-center text-gray-600 dark:text-slate-400 text-lg py-12">
              No internship programs in this department at the moment. Check back soon!
            </p>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-cyan-600 dark:bg-cyan-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Don't See Your Role?
          </h2>
          <p className="text-xl mb-8">
            We're always looking for exceptional talent. Send us your resume and let's talk!
          </p>
          <a
            href="mailto:careers@kryil.com"
            className="inline-block px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Send Your Resume
          </a>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {showApplicationModal && selectedPosition && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-slate-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl"
            >
              {/* Modal header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Apply for {selectedPosition.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-slate-400 mt-1">
                    {selectedPosition.department} • {selectedPosition.location}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              {/* Application form */}
              <form onSubmit={handleSubmitApplication} className="space-y-4">
                {/* Name field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email and Phone in grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                      placeholder="+91 1234567890"
                    />
                  </div>
                </div>

                {/* LinkedIn */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">
                    LinkedIn Profile (Optional)
                  </label>
                  <input
                    type="url"
                    name="linkedIn"
                    value={formData.linkedIn}
                    onChange={handleFormChange}
                    placeholder="https://linkedin.com/in/yourprofile"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                  />
                </div>

                {/* Resume upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">
                    Resume *
                  </label>
                  <div className="flex items-center gap-2">
                    <label className="flex-1 flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-700 bg-white dark:bg-slate-700 transition-colors">
                      <PaperClipIcon className="w-5 h-5 text-gray-500 dark:text-slate-400" />
                      <span className="text-sm text-gray-700 dark:text-slate-300 truncate">
                        {formData.resume ? formData.resume.name : "Choose file (PDF, DOC, DOCX)"}
                      </span>
                      <input
                        type="file"
                        name="resume"
                        onChange={handleFormChange}
                        accept=".pdf,.doc,.docx"
                        required
                        className="hidden"
                      />
                    </label>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">
                    Max file size: 5MB
                  </p>
                </div>

                {/* Cover Letter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">
                    Cover Letter *
                  </label>
                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleFormChange}
                    required
                    rows="6"
                    placeholder="Tell us why you're a great fit for this position..."
                    className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-white resize-none"
                  />
                </div>

                {/* Error message */}
                {submitError && (
                  <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg text-sm space-y-2">
                    <p>{submitError}</p>
                    <a
                      href={`mailto:${selectedPosition?.department === 'Internship' ? 'connect@kryil.com' : 'info@kryil.com'}?subject=Application for ${encodeURIComponent(selectedPosition?.title || 'Position')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nLinkedIn: ${formData.linkedIn}\n\nPosition: ${selectedPosition?.title}\n\nCover Letter:\n${formData.coverLetter}\n\nPlease find my resume attached separately.`)}`}
                      className="inline-block mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition text-sm"
                    >
                      📧 Send Application via Email Instead
                    </a>
                  </div>
                )}

                {/* Success message */}
                {submitSuccess && (
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-sm">
                    Application submitted successfully! We'll be in touch soon.
                  </div>
                )}

                {/* Submit buttons */}
                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting || submitSuccess}
                    className="flex-1 px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-6 py-3 bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-slate-300 rounded-lg hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
