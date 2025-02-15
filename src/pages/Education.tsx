import React from 'react';
import { GraduationCap, Book, Award, Clock } from 'lucide-react';

export default function Education() {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-[500px] w-[2px] bg-gradient-to-b from-cyan-500 to-transparent animate-slide-down-1 left-[20%] top-0 opacity-30"></div>
        <div className="absolute h-[300px] w-[2px] bg-gradient-to-b from-emerald-500 to-transparent animate-slide-down-2 left-[45%] top-0 opacity-20"></div>
        <div className="absolute h-[400px] w-[2px] bg-gradient-to-b from-blue-500 to-transparent animate-slide-down-3 left-[75%] top-0 opacity-25"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-12 flex items-center gap-4">
          <GraduationCap className="w-10 h-10 text-cyan-400" />
          Education Journey
        </h1>

        {/* Main Education */}
        <div className="mb-16">
          <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700 shadow-lg hover:shadow-cyan-500/20 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">Dr B R Ambedkar National Institute of Technology Jalandhar</h2>
            <div className="flex items-center gap-2 text-cyan-400 mb-4">
              <Clock size={20} />
              <span>2022 - 2026</span>
            </div>
            <p className="text-gray-300 mb-6">Bachelor of Technology in Instrumentation and Control Engineering</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Book className="w-5 h-5 text-emerald-400" />
                  Key Courses
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Digital Electronics</li>
                  <li>• Microprocessors and Microcontrollers</li>
                  <li>• Communication Systems</li>
                  <li>• Data Structures and Algorithms</li>
                  <li>• Computer Networks</li>
                </ul>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-400" />
                  Activities
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li>•Active Member of SPICE SOCIETY</li>
                  <li>•Volunteer of Utkansh (Cultural Fest of NITJ)</li> 
                  <li>•Core Member of IOTA - College Media Cell</li>
                  <li>•Coordinator in TTA - Technical Fest</li> 
                  <li>• Published Research Paper on IoT Applications</li>
                  <li>• Maintained excellent academic performance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Certifications */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Certifications & Additional Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700 shadow-lg hover:shadow-emerald-500/20 transition-all">
              <h3 className="text-xl font-semibold text-white mb-2">Web Development Bootcamp</h3>
              <p className="text-gray-300">Comprehensive course covering full-stack development with modern technologies</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700 shadow-lg hover:shadow-blue-500/20 transition-all">
              <h3 className="text-xl font-semibold text-white mb-2">Data Structures and Algorithms</h3>
              <p className="text-gray-300">Advanced certification in Data Structures and Algorithms in C/C++ programming</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}