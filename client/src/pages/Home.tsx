/**
 * Home Page
 * Neo-brutalist cyberpunk portfolio landing page
 * 
 * Sections:
 * - Navbar: Fixed navigation with logo, links, and CTA
 * - Hero: Asymmetric layout with title, decorative elements, and slanted cyan banner
 * - About: About section with highlights
 * - Skills: Skills showcase without percentages
 * - Stats: 3-column features/stats section
 * - My Work Banner: Jagged neon-lime transition banner
 * - Portfolio Grid: 2-column project showcase
 * - Education: Education and certifications
 * - Contact: Contact section with form
 * - Footer: Minimalist footer
 */

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Stats from '@/components/Stats';
import MyWorkBanner from '@/components/MyWorkBanner';
import PortfolioGrid from '@/components/PortfolioGrid';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Stats />
      <MyWorkBanner />
      <PortfolioGrid />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
