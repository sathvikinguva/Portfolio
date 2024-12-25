import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Download } from 'lucide-react';

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "React Intern",
      company: "Prabodh Technologies LLP, India",
      period: "June 2024 - July 2024",
      skills: "React, TypeScript/JavaScript, Tailwind CSS",
      description: "Developed Login and Sign-up pages for the company website. And also, I developed some features to the website. Integrated an API to verify whether an email is already registered. Utilized Firebase for authentication, sending verification links to registered emails, and redirecting users to the homepage upon successful verification. Managing the local storage to keep user details."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science Engineering",
      school: "SRM University AP",
      period: "2022-2026"
    }
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Resume</h2>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
        <a
          href="https://drive.google.com/file/d/1vwn8JWkPFV3GrNLrvuE05Btydxcotge1/view?usp=sharing"
          className="inline-flex items-center px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
        >
          <Download className="mr-2" size={20} />
          Download Resume
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-center space-x-3 mb-6">
            <Briefcase className="text-yellow-400" size={24} />
            <h3 className="text-2xl font-bold">Experience</h3>
          </div>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <h4 className="text-xl font-semibold text-yellow-400">{exp.title}</h4>
              <p className="text-gray-400 mt-1">{exp.period}</p>
              <p className="text-gray-300 mt-2">{exp.company}</p>
              <p className="text-sm text-yellow-400/80 mt-3">{exp.skills}</p>
              <p className="text-gray-300 mt-3">{exp.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="space-y-8">
          <div className="flex items-center space-x-3 mb-6">
            <GraduationCap className="text-yellow-400" size={24} />
            <h3 className="text-2xl font-bold">Education</h3>
          </div>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <h4 className="text-xl font-semibold text-yellow-400">{edu.degree}</h4>
              <p className="text-gray-400 mt-1">{edu.period}</p>
              <p className="text-gray-300 mt-2">{edu.school}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;