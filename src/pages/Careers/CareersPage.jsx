import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Building2, GraduationCap, Clock, MapPin, FileText } from 'lucide-react';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const CareersPage = () => {
  const [selectedTab, setSelectedTab] = useState('jobs');

  const jobs = [
    {
      title: "Senior Frontend Developer",
      type: "Full-time",
      location: "Remote / Hong Kong",
      department: "Engineering",
      description: "We're looking for a Senior Frontend Developer to join our team and help build beautiful, responsive web applications.",
      requirements: [
        "5+ years of experience with React and modern JavaScript",
        "Strong understanding of web performance optimization",
        "Experience with TypeScript and state management",
        "Knowledge of 3D libraries (Three.js) is a plus"
      ]
    },
    {
      title: "UI/UX Designer",
      type: "Full-time",
      location: "Hong Kong",
      department: "Design",
      description: "Join our design team to create stunning user interfaces and experiences for our clients.",
      requirements: [
        "3+ years of UI/UX design experience",
        "Proficiency in Figma and design systems",
        "Strong portfolio demonstrating web and mobile design",
        "Experience with motion design is a plus"
      ]
    }
  ];

  const internships = [
    {
      title: "Frontend Development Intern",
      duration: "3-6 months",
      location: "Hong Kong",
      department: "Engineering",
      description: "Learn and contribute to real-world projects while working with our development team.",
      requirements: [
        "Currently pursuing a degree in Computer Science or related field",
        "Basic knowledge of HTML, CSS, and JavaScript",
        "Familiarity with React is a plus",
        "Strong desire to learn and grow"
      ]
    },
    {
      title: "Design Intern",
      duration: "3 months",
      location: "Remote / Hong Kong",
      department: "Design",
      description: "Get hands-on experience in digital product design and branding.",
      requirements: [
        "Currently pursuing a degree in Design or related field",
        "Basic knowledge of design tools (Figma, Adobe Suite)",
        "Understanding of UI/UX principles",
        "Creative mindset and attention to detail"
      ]
    }
  ];

  const JobCard = ({ job, isInternship }) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
          <div className="flex flex-wrap gap-3">
            <span className="flex items-center text-sm text-gray-400">
              <Building2 className="w-4 h-4 mr-1" />
              {job.department}
            </span>
            <span className="flex items-center text-sm text-gray-400">
              <MapPin className="w-4 h-4 mr-1" />
              {job.location}
            </span>
            {isInternship ? (
              <span className="flex items-center text-sm text-gray-400">
                <Clock className="w-4 h-4 mr-1" />
                {job.duration}
              </span>
            ) : (
              <span className="flex items-center text-sm text-gray-400">
                <FileText className="w-4 h-4 mr-1" />
                {job.type}
              </span>
            )}
          </div>
        </div>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm transition-colors">
          Apply Now
        </button>
      </div>
      
      <p className="text-gray-300 mb-4">{job.description}</p>
      
      <div>
        <h4 className="font-semibold mb-2">Requirements:</h4>
        <ul className="list-disc list-inside text-gray-300">
          {job.requirements.map((req, index) => (
            <li key={index} className="mb-1">{req}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-black text-white p-8" data-scroll-section>
      {/* Background Sphere */}
      <div className="fixed left-0 top-0 w-1/2 h-screen">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full aspect-square rounded-full bg-blue-500/20 blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We're looking for talented individuals who are passionate about creating amazing digital experiences.
            Join us in building the future of web development and design.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setSelectedTab('jobs')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              selectedTab === 'jobs' ? 'bg-white/10' : 'hover:bg-white/5'
            }`}
          >
            <Building2 className="w-5 h-5" />
            Full-time Positions
          </button>
          <button
            onClick={() => setSelectedTab('internships')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              selectedTab === 'internships' ? 'bg-white/10' : 'hover:bg-white/5'
            }`}
          >
            <GraduationCap className="w-5 h-5" />
            Internships
          </button>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {selectedTab === 'jobs' ? (
            jobs.map((job, index) => (
              <JobCard key={index} job={job} isInternship={false} />
            ))
          ) : (
            internships.map((internship, index) => (
              <JobCard key={index} job={internship} isInternship={true} />
            ))
          )}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Don't see a perfect fit?</h2>
          <p className="text-gray-400 mb-6">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <button className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
            Send General Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;