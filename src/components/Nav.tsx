import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Nav = ({ activeSection, setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    const headerOffset = 70; // Adjust this value based on your header height

    if (section) {
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      setActiveSection(id);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Name Always Visible */}
          <button 
            onClick={() => handleScrollToSection('home')} 
            className="text-lg sm:text-xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors"
          >
            Sathvik Inguva
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollToSection(item.id)}
                className={`nav-link ${activeSection === item.id ? 'nav-link-active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;
