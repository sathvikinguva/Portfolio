import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Patents from './components/Patents';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'resume', 'projects', 'contact', 'patents'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Nav activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <section id="home" className="min-h-screen pt-16 sm:pt-20">
            <Hero />
          </section>

          <section id="about" className="min-h-screen py-16 sm:py-20">
            <About />
          </section>

          <section id="resume" className="min-h-screen py-16 sm:py-20">
            <Resume />
          </section>

          <section id="projects" className="min-h-screen py-16 sm:py-20">
            <Projects />
          </section>

          <section id="patents" className="min-h-screen py-16 sm:py-20">
            <Patents />
          </section>

          <section id="contact" className="min-h-screen py-16 sm:py-20">
            <Contact />
          </section>
        </motion.div>
      </main>

      <footer className="bg-gray-800 py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex space-x-6">
              <a href="https://github.com/sathvikinguva" className="hover:text-yellow-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/sathvikinguva/" className="hover:text-yellow-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:sathvikinguva@gmail.com" className="hover:text-yellow-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <p className="text-gray-400 text-sm text-center sm:text-right">
              © {new Date().getFullYear()} Sathvik Inguva. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;