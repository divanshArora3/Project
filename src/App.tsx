import React, { useState } from 'react';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Education from './pages/Education';
import { Home as HomeIcon, Code, FolderGit2, GraduationCap } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="relative min-h-screen bg-gray-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute h-[500px] w-[2px] bg-gradient-to-b from-cyan-500 to-transparent animate-slide-down-1 left-[20%] top-0 opacity-30"></div>
        <div className="absolute h-[300px] w-[2px] bg-gradient-to-b from-emerald-500 to-transparent animate-slide-down-2 left-[45%] top-0 opacity-20"></div>
        <div className="absolute h-[400px] w-[2px] bg-gradient-to-b from-blue-500 to-transparent animate-slide-down-3 left-[75%] top-0 opacity-25"></div>
        <div className="absolute h-[2px] w-[400px] bg-gradient-to-r from-cyan-500 to-transparent animate-slide-right-1 top-[30%] left-0 opacity-20"></div>
        <div className="absolute h-[2px] w-[300px] bg-gradient-to-r from-emerald-500 to-transparent animate-slide-right-2 top-[60%] left-0 opacity-30"></div>
      </div>

      {/* Navigation Menu */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 bg-gray-800/50 p-3 rounded-full shadow-lg backdrop-blur-sm z-50">
        <button 
          onClick={() => setCurrentPage('home')}
          className={`p-2 rounded-full transition-all ${currentPage === 'home' ? 'bg-cyan-500/20 text-cyan-400' : 'hover:bg-gray-700/50 text-gray-400 hover:text-white'}`}
          title="Home"
        >
          <HomeIcon size={24} />
        </button>
        <button 
          onClick={() => setCurrentPage('education')}
          className={`p-2 rounded-full transition-all ${currentPage === 'education' ? 'bg-purple-500/20 text-purple-400' : 'hover:bg-gray-700/50 text-gray-400 hover:text-white'}`}
          title="Education"
        >
          <GraduationCap size={24} />
        </button>
        <button 
          onClick={() => setCurrentPage('skills')}
          className={`p-2 rounded-full transition-all ${currentPage === 'skills' ? 'bg-emerald-500/20 text-emerald-400' : 'hover:bg-gray-700/50 text-gray-400 hover:text-white'}`}
          title="Skills"
        >
          <Code size={24} />
        </button>
        <button 
          onClick={() => setCurrentPage('projects')}
          className={`p-2 rounded-full transition-all ${currentPage === 'projects' ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-gray-700/50 text-gray-400 hover:text-white'}`}
          title="Projects"
        >
          <FolderGit2 size={24} />
        </button>
       
      </div>

      {/* Page Content */}
      {currentPage === 'home' && <Home />}
      {currentPage === 'skills' && <Skills />}
      {currentPage === 'education' && <Education />}
      {currentPage === 'projects' && <Projects />}

      {/* Footer */}
      <footer className="bg-gray-800/50 backdrop-blur-sm text-gray-300 py-8 relative">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Divansh Arora. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;