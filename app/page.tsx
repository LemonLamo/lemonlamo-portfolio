import dynamic from 'next/dynamic';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const About = dynamic(() => import('./components/About'));
const Skills = dynamic(() => import('./components/Skills'));
const Projects = dynamic(() => import('./components/Projects'));
const Services = dynamic(() => import('./components/Services'));
const Education = dynamic(() => import('./components/Education'));
const Contact = dynamic(() => import('./components/Contact'));
const Footer = dynamic(() => import('./components/Footer'));

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
