import React from 'react';
import SectionWrapper from './SectionWrapper';
import { TECH_STACK } from '../constants';
import { motion } from 'framer-motion';

const TechStack: React.FC = () => {
  const categories = Array.from(new Set(TECH_STACK.map(t => t.category)));

  return (
    <SectionWrapper className="bg-slate-900">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-100 mb-4">Technology Stack</h2>
        <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category, catIndex) => (
          <motion.div 
            key={category}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: catIndex * 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-slate-300 border-b border-slate-800 pb-2">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {TECH_STACK.filter(t => t.category === category).map((tech, i) => (
                <div 
                  key={tech.name} 
                  className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-colors group"
                >
                  <span className="text-slate-400 group-hover:text-blue-400 transition-colors">
                    {tech.icon}
                  </span>
                  <span className="text-slate-300 font-medium text-sm">{tech.name}</span>
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
