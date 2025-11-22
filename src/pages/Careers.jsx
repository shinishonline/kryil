import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BriefcaseIcon,
  MapPinIcon,
  ClockIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

export default function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");

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

  const filteredJobs = selectedDepartment === "All"
    ? jobOpenings
    : jobOpenings.filter(job => job.department === selectedDepartment);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-darkBg transition-colors duration-500">
      {/* Hero Section */}
      <section className="bg-emerald-600 dark:bg-emerald-700 text-white py-20 px-6">
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
          <h2 className="text-5xl md:text-6xl font-semibold text-emerald-600 text-center mb-12">
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
                className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-emerald-500 transition-all"
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
          <h2 className="text-5xl md:text-6xl font-semibold text-emerald-600 text-center mb-8">
            Open Positions
          </h2>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedDepartment === dept
                    ? "bg-emerald-600 text-white"
                    : "bg-white dark:bg-slate-800 text-gray-700 dark:text-slate-300 border border-gray-300 dark:border-slate-600 hover:border-emerald-500"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job, idx) => (
              <motion.div
                key={job.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                custom={idx}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 hover:border-emerald-500 transition-all hover:shadow-lg"
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
                  <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition-colors whitespace-nowrap">
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

          {filteredJobs.length === 0 && (
            <p className="text-center text-gray-600 dark:text-slate-400 text-lg py-12">
              No openings in this department at the moment. Check back soon!
            </p>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-emerald-600 dark:bg-emerald-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Don't See Your Role?
          </h2>
          <p className="text-xl mb-8">
            We're always looking for exceptional talent. Send us your resume and let's talk!
          </p>
          <a
            href="mailto:careers@kryil.com"
            className="inline-block px-8 py-4 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Send Your Resume
          </a>
        </div>
      </section>
    </div>
  );
}
