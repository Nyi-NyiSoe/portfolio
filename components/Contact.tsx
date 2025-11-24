import { Mail, MapPin, Send } from 'lucide-react';
import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the mailto link
    const recipient = "nyinyisoe.dev@gmail.com";
    const subject = formData.name ? `Portfolio Inquiry from ${formData.name}` : 'Portfolio Inquiry';
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    
    // Open the default mail client
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <SectionWrapper id="contact" className="min-h-[80vh] flex flex-col justify-center">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-100 mb-4">Let's Create Something Together</h2>
        <p className="text-slate-400">Currently open for freelance opportunities and full-time roles.</p>
      </div>

      <div className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Info */}
        <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white">Get in touch</h3>
            <p className="text-slate-400 leading-relaxed">
                Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-4">
                <div className="flex items-center gap-4 text-slate-300">
                    <Mail className="text-blue-500" />
                    <a href="mailto:nyinyisoe.dev@gmail.com" className="hover:text-blue-400 transition-colors">nyinyisoe.dev@gmail.com</a>
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                    <MapPin className="text-blue-500" />
                    <span>Thailand (Remote available)</span>
                </div>
            </div>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-slate-400">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" 
                      placeholder="John Doe" 
                    />
                </div>
                 <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-slate-400">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" 
                      placeholder="john@example.com" 
                    />
                </div>
            </div>
            <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-slate-400">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" 
                  placeholder="Tell me about your project..."
                ></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-lg transition-all flex items-center justify-center gap-2">
                Send Message <Send size={18} />
            </button>
        </form>
      </div>

      <div className="mt-20 text-center text-slate-600 text-sm">
        &copy; {new Date().getFullYear()} DevPortfolio. Built with React & Tailwind.
      </div>
    </SectionWrapper>
  );
};

export default Contact;