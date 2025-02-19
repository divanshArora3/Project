import React from 'react';
import { Github, Linkedin, Mail, Award, Briefcase, GraduationCap, Terminal } from 'lucide-react';
import myImage from "../img/me.jpeg"; 

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-[500px] w-[2px] bg-gradient-to-b from-cyan-500 to-transparent animate-slide-down-1 left-[20%] top-0 opacity-30"></div>
        <div className="absolute h-[300px] w-[2px] bg-gradient-to-b from-emerald-500 to-transparent animate-slide-down-2 left-[45%] top-0 opacity-20"></div>
        <div className="absolute h-[400px] w-[2px] bg-gradient-to-b from-blue-500 to-transparent animate-slide-down-3 left-[75%] top-0 opacity-25"></div>
      </div>

      {/* Hero Section */}
      <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-20 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <img src={myImage} alt="Description" className="w-32 h-32 md:w-40 md:h-40 rounded-lg" />
          </a>
          <div>
            <div className="inline-block px-4 py-2 bg-cyan-500/10 rounded-full text-cyan-400 font-medium mb-4">
              👋 Welcome to my portfolio
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Divansh Arora</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6">Software Developer & Tech Enthusiast</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              {[
                { href: "https://github.com/divanshArora3", icon: <Github size={20} />, text: "GitHub" },
                { href: "https://www.linkedin.com/in/divansh-arora-dk30/", icon: <Linkedin size={20} />, text: "LinkedIn" },
                { href: "tel:+917814600927", icon: <Mail size={24} />, text: "Contact" },
                { href: "mailto:divansharora03@gmail.com", icon: <Mail size={20} />, text: "Email" }
              ].map(({ href, icon, text }) => (
                <a 
                  key={text} 
                  href={href} 
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full shadow-lg hover:shadow-cyan-500/20 transition-all hover:bg-gray-800 text-gray-300 hover:text-white">
                  {icon}
                  <span>{text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info Section */}
      <div className="relative backdrop-blur-sm bg-gray-800/50 py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { title: "Education", icon: <GraduationCap className="w-8 h-8 text-cyan-400 mb-4" />, content: (
              <ul className="text-gray-300 space-y-2">
                <li><span className="font-semibold">Dr. B R Ambedkar NIT Jalandhar</span></li>
                <li><span className="font-semibold">Class 12th:</span> Holy Heart School (2022)</li>
                <li><span className="font-semibold">Class 10th:</span> Holy Heart School (2020)</li>
              </ul>
            )},
            { title: "Tech Stack", icon: <Terminal className="w-8 h-8 text-emerald-400 mb-4" />, content: (
              <p className="text-gray-300">
                Full-stack developer specializing in <span className="font-semibold">MERN stack</span>, strong expertise in
                <span className="font-semibold"> data structures, algorithms</span> & problem-solving.
              </p>
            )},
            { title: "Experience", icon: <Briefcase className="w-8 h-8 text-blue-400 mb-4" />, content: (
              <ul className="text-gray-300 space-y-2">
                <li><span className="font-semibold">R&D:</span> Worked under a professor’s mentorship.</li>
                <li><span className="font-semibold">Web Dev:</span> Developed scalable projects.</li>
                <li><span className="font-semibold">Problem Solving:</span> Solved <span className="font-semibold">400+</span> DSA problems.</li>
              </ul>
            )}
          ].map(({ title, icon, content }) => (
            <div key={title} className="bg-gray-900/50 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-all border border-gray-700">
              {icon}
              <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
              {content}
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="relative backdrop-blur-sm bg-gray-800/30 py-12 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
            <p className="text-gray-300 mb-6">
              I'm a motivated student eager to learn, grow, and gain valuable experience. Passionate about problem-solving and teamwork.
            </p>
            <p className="text-gray-300 mb-6">
              A critical thinker and quick learner, always looking to expand my knowledge and skillset.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-cyan-400">
                <Award size={20} />
                <span className="font-medium">Multiple Project Awards</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
              alt="Coding Environment"
              className="rounded-xl shadow-lg w-full ring-1 ring-gray-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
