import Hero from './components/Hero';
import AboutEducation from './components/AboutEducation';
import Skills from './components/Skills';
import ProjectsContact from './components/ProjectsContact';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-extrabold text-lg tracking-tight">AI Portfolio</a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#education" className="hover:text-gray-900">Education</a>
            <a href="#skills" className="hover:text-gray-900">Skills</a>
            <a href="#projects" className="hover:text-gray-900">Projects</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>

      <main className="[scroll-behavior:smooth]">
        <Hero />
        <AboutEducation />
        <Skills />
        <ProjectsContact />
      </main>

      <footer className="py-10 border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="text-sm text-gray-600">Built with React, Tailwind, FastAPI — focused on AI experiences.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
