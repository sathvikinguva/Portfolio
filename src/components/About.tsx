import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Wrench, Layers } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    {
      title: "Languages",
      items: ["Python", "C", "C++", "SQL", "HTML", "CSS", "JavaScript", "Solidity", "Java", "TypeScript"],
      icon: <Code className="w-8 h-8 text-yellow-400" />,
    },
    {
      title: "Tools",
      items: ["Visual Studio Code", "GitHub", "MetaMask", "Thirdweb", "Microsoft Excel", "Microsoft Word", "Figma", "Azure"],
      icon: <Wrench className="w-8 h-8 text-yellow-400" />,
    },
    {
      title: "Libraries & Frameworks",
      items: ["React.js", "Node.js", "Bootstrap", "MySQL", "Firebase", "Tailwind CSS"],
      icon: <Layers className="w-8 h-8 text-yellow-400" />,
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="space-y-16 px-4"
    >
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
      </div>

      {/* Introduction Section */}
      <div className="flex flex-col items-center space-y-8">
        <p className="text-lg text-gray-300 text-center max-w-4xl leading-relaxed">
          A motivated Computer Science undergraduate specializing in Cloud Computing, with internship experience as a React Intern at Celebal Technologies and Prabodh Technologies LLP, where I built responsive UIs, implemented API integrations, and enhanced authentication systems. Skilled in Python, C++, JavaScript, React.js, Node.js, Firebase, and Solidity, with strong problem-solving abilities. Successfully developed impactful projects including a blockchain-based NGO Work Monitoring System, a social media platform (NexusNet), and an AI-powered sensitive content detection system published as a patent. Recognized as a winner at HackSRM 6.0 (Blockchain Track) and the Hack For India AI Hackathon, demonstrating innovation in blockchain and AI solutions. Passionate about building scalable, real-world applications that combine modern frameworks with cloud technologies.
        </p>
      </div>

      {/* Skills Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-800 p-8 rounded-lg flex flex-col items-center text-center space-y-6"
          >
            {/* Icon */}
            <div>{category.icon}</div>
            {/* Title */}
            <h3 className="text-xl font-semibold text-yellow-400">{category.title}</h3>
            {/* Items */}
            <ul className="space-y-2 text-gray-300">
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default About;
