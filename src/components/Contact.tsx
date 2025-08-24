import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "sathvikinguva@gmail.com",
      link: "mailto:sathvikinguva@gmail.com",
      buttonText: "Send Email"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "linkedin.com/in/sathvikinguva",
      link: "https://www.linkedin.com/in/sathvikinguva/",
      buttonText: "Connect"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Contact Form",
      value: "Have a question?",
      link: "https://forms.gle/PkoNBeeY7cMR2uJH7",
      buttonText: "Open Form"
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
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Feel free to reach out to me through any of these channels. 
          I'm always open to discussing new projects, opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {contactMethods.map((method, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-lg text-center group hover:bg-gray-700 transition-colors"
          >
            <div className="flex justify-center text-yellow-400 mb-4 transform group-hover:scale-110 transition-transform">
              {method.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
            <p className="text-gray-300 mb-4">{method.value}</p>
            <a
              href={method.link}
              className="inline-flex items-center justify-center w-full px-4 py-2 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              {method.buttonText}
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Contact;