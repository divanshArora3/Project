import React from 'react';
import { Github, Linkedin, Mail, Award, Briefcase, GraduationCap, Terminal } from 'lucide-react';
import myImage from "../img/me.jpeg"; // Adjust path based on your folder structure

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-[500px] w-[2px] bg-gradient-to-b from-cyan-500 to-transparent animate-slide-down-1 left-[20%] top-0 opacity-30"></div>
        <div className="absolute h-[300px] w-[2px] bg-gradient-to-b from-emerald-500 to-transparent animate-slide-down-2 left-[45%] top-0 opacity-20"></div>
        <div className="absolute h-[400px] w-[2px] bg-gradient-to-b from-blue-500 to-transparent animate-slide-down-3 left-[75%] top-0 opacity-25"></div>
        <div className="absolute h-[2px] w-[400px] bg-gradient-to-r from-cyan-500 to-transparent animate-slide-right-1 top-[30%] left-0 opacity-20"></div>
        <div className="absolute h-[2px] w-[300px] bg-gradient-to-r from-emerald-500 to-transparent animate-slide-right-2 top-[60%] left-0 opacity-30"></div>
      </div>

      {/* Hero Section */}
      <div className="relative max-w-5xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-8">
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
  <img src={myImage} alt="Description" className="w-32 h-32 rounded-lg" />
</a>

          <div>
            <div className="inline-block px-4 py-2 bg-cyan-500/10 rounded-full text-cyan-400 font-medium mb-4 backdrop-blur-sm">
              👋 Welcome to my portfolio
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">Divansh Arora</h1>
            <p className="text-xl text-gray-300 mb-6">Software Developer & Tech Enthusiast</p>
            <div className="flex gap-4 mb-8">
              <a 
                href="https://github.com/divanshArora3" 
                className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full shadow-lg hover:shadow-cyan-500/20 transition-all hover:bg-gray-800 text-gray-300 hover:text-white backdrop-blur-sm"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/divansh-arora-dk30/" 
                className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full shadow-lg hover:shadow-cyan-500/20 transition-all hover:bg-gray-800 text-gray-300 hover:text-white backdrop-blur-sm"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a 
                href="tel:+917814600927"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full shadow-lg hover:shadow-cyan-500/20 transition-all hover:bg-gray-800 text-gray-300 hover:text-white backdrop-blur-sm"
              >
               <Mail size={24} />
                <span>Contact</span>
              </a>
              <a 
                href="mailto:divansharora03@gmail.com" 
                className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full shadow-lg hover:shadow-cyan-500/20 transition-all hover:bg-gray-800 text-gray-300 hover:text-white backdrop-blur-sm"
              >
                <Mail size={20} />
                <span>Email</span>
              </a>
             
            </div>
          </div>
        </div>
      </div>

     {/* Quick Info Section */}
<div className="relative backdrop-blur-sm bg-gray-800/50">
  <div className="max-w-5xl mx-auto px-4 py-20">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Education Section */}
<div className="bg-gray-900/50 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-all border border-gray-700">
  <GraduationCap className="w-8 h-8 text-cyan-400 mb-4" />
  <h3 className="text-xl font-semibold mb-2 text-white">Education</h3>
  <ul className="text-gray-300 space-y-2">
    <li>
      <span className="font-semibold">Dr. B R Ambedkar National Institute of Technology, Jalandhar</span>
    </li>
    <li>
      <span className="font-semibold">Class 12th:</span> Holy Heart Day Boarding Sr. Sec. Public School, Fazilka (2022)
    </li>
    <li>
      <span className="font-semibold">Class 10th:</span> Holy Heart Day Boarding Sr. Sec. Public School, Fazilka (2020)
    </li>
  </ul>
</div>

      {/* Tech Stack Section */}
<div className="bg-gray-900/50 p-6 rounded-xl shadow-lg hover:shadow-emerald-500/20 transition-all border border-gray-700">
  <Terminal className="w-8 h-8 text-emerald-400 mb-4" />
  <h3 className="text-xl font-semibold mb-2 text-white">Tech Stack</h3>
  <p className="text-gray-300">
    Full-stack developer specializing in the <span className="font-semibold">MERN stack</span>, with strong expertise in 
    <span className="font-semibold"> data structures, algorithms</span>, and problem-solving.
  </p>
</div>

    {/* Experience Section */}
<div className="bg-gray-900/50 p-6 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all border border-gray-700">
  <Briefcase className="w-8 h-8 text-blue-400 mb-4" />
  <h3 className="text-xl font-semibold mb-2 text-white">Experience</h3>
  <ul className="text-gray-300 space-y-2">
    <li>
      <span className="font-semibold">Research & Development:</span> Worked under a professor’s mentorship, gaining hands-on experience in research-driven projects.
    </li>
    <li>
      <span className="font-semibold">Web Development:</span> Developed multiple projects in a team-based environment, focusing on scalable and maintainable solutions.
    </li>
    <li>
      <span className="font-semibold">Problem Solving:</span> Solved <span className="font-semibold">400+</span> DSA problems across LeetCode, GFG, and CodeStudio, refining algorithmic thinking.
    </li>
  </ul>
</div>


    </div>
  </div>
</div>


      {/* About Section */}
      <div className="relative backdrop-blur-sm bg-gray-800/30">
        <div className="max-w-5xl mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
              <p className="text-gray-300 mb-6">
              As a student I am eager to learn,grow and gain valuable experience in my field of study.
              I am motivated, hardworking and passionate about my chosen career path.Through my coursework,internships and extracurricular activities,I have developed a strong set of skills,that I believe will be valuable in any professional setting.
              </p>
              <p className="text-gray-300 mb-6">
              I am a critical thinker,problem solver and an effective communicator.I have experience working in teams and am comfortable on leadership roles when necessary.
              I am a quick learner and am always looking for new opportunities to expand my knowledge and skillset.
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
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
                alt="Coding Environment"
                className="rounded-xl shadow-lg w-full ring-1 ring-gray-700"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}