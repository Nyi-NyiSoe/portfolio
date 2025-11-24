import React from 'react';
import SectionWrapper from './SectionWrapper';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience" className="bg-slate-800/30">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Work Experience</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          A timeline of my professional journey and the value I've delivered.
        </p>
      </div>

      <div className="relative border-l border-slate-700 ml-3 md:ml-6 space-y-12">
        {EXPERIENCE.map((exp) => (
          <div key={exp.id} className="relative pl-8 md:pl-12">
            {/* Dot */}
            <div className="absolute -left-[9px] top-1 bg-slate-900 border-2 border-blue-500 w-5 h-5 rounded-full flex items-center justify-center">
               <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl font-bold text-white">{exp.role}</h3>
              <span className="text-sm text-blue-400 font-mono bg-blue-500/10 px-2 py-1 rounded mt-1 sm:mt-0 w-fit">
                {exp.period}
              </span>
            </div>
            
            <div className="flex items-center gap-2 mb-4 text-slate-300">
              <Briefcase className="w-4 h-4" />
              <span className="font-medium">{exp.company}</span>
            </div>

            <ul className="space-y-2">
              {exp.description.map((item, idx) => (
                <li key={idx} className="text-slate-400 leading-relaxed flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 bg-slate-600 rounded-full flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;
