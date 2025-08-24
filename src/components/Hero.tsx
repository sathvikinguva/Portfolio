import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="flex h-[90vh] items-center justify-center px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-6 max-w-3xl"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
          Hi, I'm <span className="text-yellow-400">Sathvik Inguva</span>
        </h1>
        <TypeWriter
          texts={[
            'Frontend Developer',
            'UI/UX Designer',
            'Software Developer',
          ]}
        />
        <p className="text-lg sm:text-xl text-gray-300">
          Passionate about creating intuitive user interfaces and bringing ideas to life with code. Let’s connect!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.linkedin.com/in/sathvikinguva/"
            className="btn-primary"
          >
            LinkedIn <ArrowRight className="ml-2" size={20} />
          </a>
          <a
            href="https://github.com/sathvikinguva"
            className="btn-outline"
          >
            GitHub <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

const TypeWriter = ({ texts }: { texts: string[] }) => {
  const [currentText, setCurrentText] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentChar < texts[currentText].length) {
          setCurrentChar((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (currentChar > 0) {
          setCurrentChar((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setCurrentText((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentChar, currentText, isDeleting, texts]);

  return (
    <div className="h-8 sm:h-10">
      <p className="text-xl sm:text-2xl font-semibold text-yellow-400">
        {texts[currentText].substring(0, currentChar)}
        <span className="animate-pulse">|</span>
      </p>
    </div>
  );
};

export default Hero;
