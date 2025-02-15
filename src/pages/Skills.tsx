import React from 'react';
import { Code, Book, Cpu, Link } from 'lucide-react';
import { FaCode, FaGraduationCap } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";


import { MdComputer } from 'react-icons/md';

export default function Skills() {
  return (
    <div className="min-h-screen bg-transparent py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">Skills & Profiles</h2>

        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 shadow-lg hover:shadow-cyan-500/20 transition-all">
            <Code className="w-8 h-8 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Languages</h3>
            <p className="text-gray-300">C/C++, JavaScript, Python, HTML, CSS, SQL, MongoDB</p>
          </div>
          <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 shadow-lg hover:shadow-emerald-500/20 transition-all">
            <Book className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Tools & Technologies</h3>
            <p className="text-gray-300">Git, GitHub, Jupyter Notebook, VS Code</p>
          </div>
          <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 shadow-lg hover:shadow-blue-500/20 transition-all">
            <Cpu className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Libraries</h3>
            <p className="text-gray-300">NumPy, Pandas, React.js, Redux</p>
          </div>
        </div>

        {/* Profiles Section */}
        <h3 className="text-2xl font-bold text-white mt-12 mb-6">Competitive Programming Profiles</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* LeetCode Profile */}
          <a
            href="https://leetcode.com/u/divansharora3/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 shadow-lg hover:shadow-yellow-500/20 transition-all flex items-center space-x-4"
          >
            <SiLeetcode className="w-8 h-8 text-yellow-400" />
            <div>
              <h4 className="text-xl font-semibold text-white">LeetCode</h4>
              <p className="text-gray-300">Solve DSA challenges & contests</p>
            </div>
          </a>

          {/* GeeksforGeeks Profile */}
          <a
            href="https://www.geeksforgeeks.org/user/divansharo2txl/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 shadow-lg hover:shadow-green-500/20 transition-all flex items-center space-x-4"
          >
            <SiGeeksforgeeks className="w-8 h-8 text-green-400" />
            <div>
              <h4 className="text-xl font-semibold text-white">GeeksforGeeks</h4>
              <p className="text-gray-300">Practice coding & tutorials</p>
            </div>
          </a>

          {/* CodeStudio Profile */}
          <a
            href="https://www.naukri.com/code360/profile/divansharora"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 shadow-lg hover:shadow-blue-500/20 transition-all flex items-center space-x-4"
          >
            <MdComputer className="w-8 h-8 text-blue-400" />
            <div>
              <h4 className="text-xl font-semibold text-white">CodeStudio</h4>
              <p className="text-gray-300">Enhance problem-solving skills</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
