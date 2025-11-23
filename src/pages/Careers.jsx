import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BriefcaseIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

const jobOpenings = [
  {
    id: "fullstack",
    title: "Senior Full Stack Developer",
    type: "Full-time",
    location: "Bangalore / Remote",
    icon: BriefcaseIcon,
    blurb:
      "Build scalable web applications using React, Node.js, and cloud technologies. 5-8 years experience required.",
    bullets: [
      "5+ years of experience with React and Node.js",
      "Strong understanding of cloud platforms (AWS/Azure/GCP)",
      "Experience with microservices architecture",
      "Excellent problem-solving and communication skills"
    ]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Analyst",
    type: "Full-time",
    location: "Bangalore",
    icon: BriefcaseIcon,
    blurb:
      "Protect our infrastructure and client systems from security threats. 3-5 years experience required.",
    bullets: [
      "3+ years in cybersecurity or related field",
      "Experience with SIEM, IDS/IPS, and security monitoring tools",
      "Knowledge of compliance standards (ISO 27001, SOC 2)",
      "Relevant certifications (CISSP, CEH, or similar) preferred"
    ]
  },
  {
    id: "devops",
    title: "DevOps Engineer",
    type: "Full-time",
    location: "Bangalore / Remote",
    icon: BriefcaseIcon,
    blurb:
      "Automate infrastructure and streamline deployment pipelines. 4-6 years experience required.",
    bullets: [
      "4+ years of DevOps experience",
      "Proficiency with Kubernetes, Docker, Terraform",
      "Experience with CI/CD tools (Jenkins, GitLab CI, GitHub Actions)",
      "Strong scripting skills (Python, Bash, Go)"
    ]
  },
  {
    id: "aiml",
    title: "AI/ML Engineer",
    type: "Full-time",
    location: "Bangalore / Remote",
    icon: BriefcaseIcon,
    blurb:
      "Develop and deploy machine learning models for enterprise applications. 3-6 years experience required.",
    bullets: [
      "3+ years of ML/AI experience",
      "Proficiency in Python, TensorFlow, PyTorch",
      "Experience with NLP, computer vision, or recommender systems",
      "Strong understanding of data pipelines and MLOps"
    ]
  },
];

const internships = [
  {
    id: "intern-software",
    title: "Software Engineering Intern",
    type: "Internship",
    location: "Bangalore",
    duration: "3-6 months",
    icon: AcademicCapIcon,
    blurb:
      "Learn full-stack development, work on real projects, and gain hands-on experience.",
    bullets: [
      "Currently pursuing Bachelor's/Master's in Computer Science",
      "Knowledge of JavaScript, HTML, CSS",
      "Familiarity with Git and version control",
      "Strong problem-solving skills and eagerness to learn"
    ]
  },
  {
    id: "intern-security",
    title: "Cybersecurity Intern",
    type: "Internship",
    location: "Bangalore",
    duration: "3-6 months",
    icon: AcademicCapIcon,
    blurb:
      "Gain practical experience in cybersecurity, threat analysis, and security operations.",
    bullets: [
      "Pursuing degree in Cybersecurity, IT, or related field",
      "Basic understanding of networking and security concepts",
      "Interest in ethical hacking and security research",
      "Good analytical and documentation skills"
    ]
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Careers() {
  const [openAcc, setOpenAcc] = useState({});
  const [activeTab, setActiveTab] = useState("jobs");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    githubRepo: "",
    position: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const toggleAcc = (id) =>
    setOpenAcc((prev) => ({ ...prev, [id]: !prev[id] }));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch('/api/careers/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          appliedAt: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setSubmitMessage("Application submitted successfully! We'll get back to you soon.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          education: "",
          experience: "",
          githubRepo: "",
          position: ""
        });
      } else {
        setSubmitMessage("Failed to submit application. Please try again.");
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      setSubmitMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentList = activeTab === "jobs" ? jobOpenings : internships;

  return (
    <main className="relative min-h-screen bg-white dark:bg-slate-900 text-black dark:text-slate-100 transition-colors duration-500">
      {/* Close Button - Top Right */}
      <Link
        to="/"
        className="fixed top-6 right-6 z-50 p-2 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-all duration-300 group"
        aria-label="Close and return to home"
      >
        <svg className="w-6 h-6 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </Link>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="font-Poppins text-5xl md:text-6xl font-extralight tracking-tight text-cyan-600 mb-4">
              Join Our Team
            </h1>
            <p className="text-lg text-black/70 dark:text-slate-300 leading-relaxed font-Poppins font-light max-w-3xl">
              Be part of an innovative team building cutting-edge technology solutions.
              We're looking for talented individuals passionate about technology and innovation.
            </p>
            <div className="mt-6 flex items-center gap-3 text-base text-black/70 dark:text-slate-300">
              <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-Poppins font-light">
                For job inquiries: <a href="mailto:shinish@kryil.com" className="text-cyan-600 hover:text-cyan-700 font-medium">shinish@kryil.com</a>
              </span>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b border-black/10 dark:border-slate-700">
            <button
              onClick={() => setActiveTab("jobs")}
              className={`px-6 py-3 font-Poppins font-medium transition-all duration-300 border-b-2 ${
                activeTab === "jobs"
                  ? "border-cyan-600 text-cyan-600"
                  : "border-transparent text-black/60 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-500"
              }`}
            >
              Job Openings
            </button>
            <button
              onClick={() => setActiveTab("internships")}
              className={`px-6 py-3 font-Poppins font-medium transition-all duration-300 border-b-2 ${
                activeTab === "internships"
                  ? "border-cyan-600 text-cyan-600"
                  : "border-transparent text-black/60 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-500"
              }`}
            >
              Internships
            </button>
          </div>

          {/* Job/Internship Listings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mb-16">
            {currentList.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.id}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3, margin: "0px 0px -100px 0px" }}
                  variants={fadeUp}
                  className="relative pl-4 border-l border-black/10 dark:border-slate-700 transition-all duration-300 hover:border-cyan-600 dark:hover:border-cyan-700"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold font-Poppins text-black dark:text-slate-100 flex items-center gap-2">
                      <span className="flex items-center justify-center">
                        <IconComp className="w-6 h-6 text-cyan-600 dark:text-cyan-500" />
                      </span>
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex gap-3 mb-3 flex-wrap">
                    <span className="text-xs px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 rounded-full font-medium">
                      {item.type}
                    </span>
                    <span className="text-xs px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full font-medium">
                      {item.location}
                    </span>
                    {item.duration && (
                      <span className="text-xs px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full font-medium">
                        {item.duration}
                      </span>
                    )}
                  </div>

                  <p className="text-base md:text-lg text-black/70 dark:text-slate-300 font-Poppins font-light leading-relaxed mb-3">
                    {item.blurb}
                  </p>

                  <button
                    onClick={() => toggleAcc(item.id)}
                    className="group inline-block text-sm font-medium text-black dark:text-cyan-700 relative
                             after:block after:w-0 after:h-[1px] after:bg-black dark:after:bg-cyan-700
                             after:transition-all after:duration-300 hover:after:w-full
                             hover:text-black dark:hover:text-cyan-500"
                  >
                    {openAcc[item.id] ? "Hide details" : "View requirements"}
                  </button>

                  <AnimatePresence initial={false}>
                    {openAcc[item.id] && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35 }}
                        className="mt-4 pl-5 list-disc space-y-2 text-black/70 dark:text-slate-300"
                      >
                        {item.bullets.map((b, idx) => (
                          <li key={idx} className="text-sm">
                            {b}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mt-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 p-8 md:p-12 rounded-lg border border-black/10 dark:border-slate-700"
          >
            <h2 className="font-Poppins text-3xl md:text-4xl font-light text-cyan-600 mb-4">
              Apply Now
            </h2>
            <p className="text-black/70 dark:text-slate-300 mb-8 font-Poppins font-light">
              Fill out the form below and we'll get back to you soon.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-black dark:text-slate-200 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-black/20 dark:border-slate-600 rounded-md text-black dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-600 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black dark:text-slate-200 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-black/20 dark:border-slate-600 rounded-md text-black dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-600 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-black dark:text-slate-200 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-black/20 dark:border-slate-600 rounded-md text-black dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-600 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black dark:text-slate-200 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-black/20 dark:border-slate-600 rounded-md text-black dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-600 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-black dark:text-slate-200 mb-2">
                  Position Applying For *
                </label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-black/20 dark:border-slate-600 rounded-md text-black dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-600 transition-all"
                >
                  <option value="">Select a position</option>
                  <optgroup label="Job Openings">
                    {jobOpenings.map(job => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Internships">
                    {internships.map(intern => (
                      <option key={intern.id} value={intern.title}>{intern.title}</option>
                    ))}
                  </optgroup>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-black dark:text-slate-200 mb-2">
                  Education *
                </label>
                <input
                  type="text"
                  name="education"
                  value={formData.education}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., B.Tech in Computer Science, MIT"
                  className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-black/20 dark:border-slate-600 rounded-md text-black dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-600 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black dark:text-slate-200 mb-2">
                  Experience (in years) *
                </label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., 3 years or Fresher"
                  className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-black/20 dark:border-slate-600 rounded-md text-black dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-600 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black dark:text-slate-200 mb-2">
                  GitHub Repository / Portfolio URL
                </label>
                <input
                  type="url"
                  name="githubRepo"
                  value={formData.githubRepo}
                  onChange={handleInputChange}
                  placeholder="https://github.com/yourusername"
                  className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-black/20 dark:border-slate-600 rounded-md text-black dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-600 transition-all"
                />
              </div>

              {submitMessage && (
                <div className={`p-4 rounded-md ${
                  submitMessage.includes('success')
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                    : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                }`}>
                  {submitMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-md transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
