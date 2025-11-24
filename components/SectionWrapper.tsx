import React from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className = "" }) => {
  return (
    <section id={id} className={`py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
