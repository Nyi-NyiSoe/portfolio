import { Code, Coffee, Sparkles } from "lucide-react";
import React from "react";
import SectionWrapper from "./SectionWrapper";

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" className="bg-slate-800/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-100 mb-6">
            Beyond the Code
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            I’m a developer focused on building useful and easy-to-use apps. I
            enjoy turning ideas into working software.
          </p>
        </div>

        <div className="mb-12">
          <p className="text-slate-400 text-lg leading-relaxed text-center mb-8">
            When I'm not debugging a race condition or centering a div, you can
            find me:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500/30 transition-colors">
              <div className="p-3 bg-blue-500/10 rounded-full text-blue-400 mb-4">
                <Coffee size={28} />
              </div>
              <h4 className="font-semibold text-slate-200 mb-2">
                Coffee Enthusiast
              </h4>
              <p className="text-sm text-slate-500">
                Exploring specialty beans and perfecting brew methods.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-purple-500/30 transition-colors">
              <div className="p-3 bg-purple-500/10 rounded-full text-purple-400 mb-4">
                <Code size={28} />
              </div>
              <h4 className="font-semibold text-slate-200 mb-2">Open Source</h4>
              <p className="text-sm text-slate-500">
                Contibuting to libraries and fixing docs.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-emerald-500/30 transition-colors">
              <div className="p-3 bg-emerald-500/10 rounded-full text-emerald-400 mb-4">
                <Sparkles size={28} />
              </div>
              <h4 className="font-semibold text-slate-200 mb-2">
                AI Enthusiast
              </h4>
              <p className="text-sm text-slate-500">
                Experimenting with AI tools and integrations
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
