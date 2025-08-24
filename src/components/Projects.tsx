import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Globe2 } from 'lucide-react';
import image1 from '../assets/Social-Media-Platform.png';
import image2 from '../assets/KanBan.png';
import image3 from '../assets/NGO.png';
import image4 from '../assets/Cloud.png';
import image5 from '../assets/Quiz.png';


const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "NGO Work Monitoring System",
      description: " The NGO Work Monitoring System is a comprehensive platform that connects donors, NGOs, and government agencies through a transparent blockchain-based donation tracking system. The platform ensures accountability by allowing NGOs to provide evidence of how donations are utilized, while donors can track the impact of their contributions.",
      image: image3,
      github: "https://github.com/sathvikinguva/NGO-Work-Monitoring-System",
      website: "https://ngoworkmonitoring.web.app/"
    },
    {
      title: "Kanban Board Application",
      description: "The Kanban Board App is a task management tool built with React, TypeScript, TailwindCSS, and Firebase, offering real-time collaboration with secure authentication, role-based permissions, and an invitation system. It features drag-and-drop boards, rich card details, light/dark themes, and responsive design, with Firestore ensuring instant sync across devices.",
      image: image2,
      github: "https://github.com/sathvikinguva/KanBan",
      website: "https://kanban---app.web.app/"
    },
    {
      title: "Social Media Platform - NexusNet",
      description: "Developed a responsive login and sign-up page using HTML, CSS, JavaScript, and Firebase. Integrated functionality for users to upload images and videos. Enabled viewing and editing of user profiles. Focused on user-friendly design and seamless navigation. Added content posting and sharing features to enhance community engagement.",
      image: image1,
      github: "https://github.com/sathvikinguva/Social-Media-Platform"
    },
    {
      title: "Cloud-Based-Student-Attendance-System",
      description: "The Cloud-Based Student Attendance System is an academic project using React, Python, and Azure to automate attendance through facial recognition with the Azure Face API. It features a responsive React.js frontend, a Python backend for authentication and data management, and secure cloud storage.",
      image: image4,
      github: "https://github.com/sathvikinguva/Cloud-Based-Student-Attendance-System"
    },
    {
      title: "Quiz Application",
      description: "The Quiz Application is a desktop-based project built with Java Swing and SQLite, featuring secure teacher/student login. Teachers can create and manage quizzes, while students can attempt them with time limits and receive instant score reports. The application uses JDBC for database connectivity and offers a dynamic, user-friendly UI.",
      image: image5,
      github: "https://github.com/sathvikinguva/QuizApp"
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
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Explore a selection of my projects spanning modern front-end development, full-stack engineering, and cloud solutions. These works showcase expertise in React, TypeScript, JavaScript, Firebase, C++, Azure, and advanced data structures—demonstrating a passion for building scalable, secure, and user-friendly applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 rounded-lg overflow-hidden group"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex space-x-4">
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    <Globe2 className="mr-2" size={20} />
                    Link
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  <Github className="mr-2" size={20} />
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;