import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Social Media Platform - NexusNet",
      description: "Developed a responsive login and sign-up page using HTML, CSS, JavaScript, and Firebase. Integrated functionality for users to upload images and videos. Enabled viewing and editing of user profiles. Focused on user-friendly design and seamless navigation.",
      image: "Social-Media-Platform.png",
      github: "https://github.com/sathvikinguva/Social-Media-Platform"
    },
    {
      title: "Shopping Cart",
      description: " Utilized data structures in C++ for efficient shopping cart management. Supported item addition, removal, and quantity adjustments. Implemented logic to ensure accurate total price calculations. Focused on an intuitive interface for ease of use.",
      image: "Shopping-Cart.png",
      github: "https://github.com/sathvikinguva/Shopping-Cart"
    },
    {
      title: "Student Management System",
      description: "Built using C++ with a Binary Search Tree (BST) for optimized data organization. Supported operations: adding, removing, and searching for student records. Designed for scalability and quick retrieval of student information.",
      image: "Student-Management-System.png",
      github: "https://github.com/sathvikinguva/Student_Management_System"
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
        Here are some of my projects in front-end development (HTML/CSS), software engineering, and utilizing React, TypeScript/JavaScript, Firebase, C++, and data structures.
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
                <a
                  href={project.github}
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