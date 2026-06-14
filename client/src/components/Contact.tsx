/**
 * Contact Section Component
 * Neo-brutalist cyberpunk contact section
 * 
 * Design: Cyan title, contact info cards, contact form
 */

import { Mail, Phone, MapPin, Linkedin, Github, Send, Link as LinkIcon } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:yahmed0112000@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="w-full bg-black py-16 md:py-24" data-section="contact">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Title */}
        <h2 
          className="text-6xl md:text-8xl font-black uppercase mb-12 md:mb-16 text-[#00FFFF] tracking-tight"
          style={{ fontFamily: "'Pixelify Sans'" }}
        >
          CONTACT
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Information */}
          <div>
            <h3 
              className="text-2xl md:text-3xl font-bold text-white mb-8 uppercase"
              style={{ fontFamily: "'JetBrains Mono'" }}
            >
              Get In Touch
            </h3>

            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:yahmed0112000@gmail.com"
                className="flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-lg border-2 border-[#333333] hover:border-[#00FFFF] transition-colors duration-300 group"
              >
                <div className="p-3 bg-[#0F1535] rounded-lg group-hover:bg-[#1a1f3a] transition-colors">
                  <Mail className="text-[#00FFFF]" size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[#A8FF00] font-bold text-sm" style={{ fontFamily: "'JetBrains Mono'" }}>Email</p>
                  <p className="text-white font-medium" style={{ fontFamily: "'Plus Jakarta Sans'" }}>yahmed0112000@gmail.com</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+201080656061"
                className="flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-lg border-2 border-[#333333] hover:border-[#A8FF00] transition-colors duration-300 group"
              >
                <div className="p-3 bg-[#0F1535] rounded-lg group-hover:bg-[#1a1f3a] transition-colors">
                  <Phone className="text-[#A8FF00]" size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[#A8FF00] font-bold text-sm" style={{ fontFamily: "'JetBrains Mono'" }}>Phone</p>
                  <p className="text-white font-medium" style={{ fontFamily: "'Plus Jakarta Sans'" }}>+20 108 065 6061</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-lg border-2 border-[#333333] group">
                <div className="p-3 bg-[#0F1535] rounded-lg group-hover:bg-[#1a1f3a] transition-colors">
                  <MapPin className="text-[#FF00FF]" size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[#A8FF00] font-bold text-sm" style={{ fontFamily: "'JetBrains Mono'" }}>Location</p>
                  <p className="text-white font-medium" style={{ fontFamily: "'Plus Jakarta Sans'" }}>Giza, Egypt</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 flex gap-4">
                <a
                  href="https://linkedin.com/in/yahia-el-shamy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-[#1a1a1a] rounded-lg border-2 border-[#333333] hover:border-[#00FFFF] hover:bg-[#00FFFF]/10 transition-all duration-300"
                >
                  <Linkedin size={20} color="#00FFFF" strokeWidth={1.5} />
                </a>
                <a
                  href="https://github.com/yahia-elshamy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-[#1a1a1a] rounded-lg border-2 border-[#333333] hover:border-[#A8FF00] hover:bg-[#A8FF00]/10 transition-all duration-300"
                >
                  <Github size={20} color="#A8FF00" strokeWidth={1.5} />
                </a>
                <a
                  href="https://linktr.ee/yahia_elshamy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-[#1a1a1a] rounded-lg border-2 border-[#333333] hover:border-[#FF00FF] hover:bg-[#FF00FF]/10 transition-all duration-300"
                >
                  <LinkIcon size={20} color="#FF00FF" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 
              className="text-2xl md:text-3xl font-bold text-white mb-8 uppercase"
              style={{ fontFamily: "'JetBrains Mono'" }}
            >
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1a1a] border-2 border-[#333333] rounded-lg text-white placeholder-[#666666] focus:border-[#00FFFF] focus:outline-none transition-colors font-medium"
                  style={{ fontFamily: "'Plus Jakarta Sans'" }}
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1a1a] border-2 border-[#333333] rounded-lg text-white placeholder-[#666666] focus:border-[#00FFFF] focus:outline-none transition-colors font-medium"
                  style={{ fontFamily: "'Plus Jakarta Sans'" }}
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border-2 border-[#333333] rounded-lg text-white placeholder-[#666666] focus:border-[#00FFFF] focus:outline-none transition-colors resize-none font-medium"
                  style={{ fontFamily: "'Plus Jakarta Sans'" }}
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#00FFFF] text-black font-bold uppercase rounded-lg hover:opacity-90 transition-opacity duration-200 active:scale-95 border-2 border-[#00FFFF] flex items-center justify-center gap-2"
                style={{ fontFamily: "'JetBrains Mono'" }}
              >
                <Send size={18} strokeWidth={1.5} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
