// TechStack.tsx
import { motion } from 'framer-motion';
import React from 'react';
import { TECH_STACK } from '../constants';
import SectionWrapper from './SectionWrapper';

const TechStack: React.FC = () => {
  const categories = Array.from(new Set(TECH_STACK.map(t => t.category)));

  return (
    <SectionWrapper className="bg-[#111111]">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Technology Stack</h2>
        <div className="h-1 w-20 bg-blue-500 rounded-full mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category, catIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: catIndex * 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2">
              {category}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {TECH_STACK.filter(t => t.category === category).map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#111111] border border-gray-700 hover:border-blue-500 transition-colors group"
                >
                  <span className="text-gray-400 group-hover:text-blue-400 transition-colors">
                    {tech.icon}
                  </span>
                  <span className="text-gray-300 font-medium text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default TechStack;
