import React from 'react';

export default function Projects() {
  return (
    <div className="min-h-screen bg-transparent">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white mb-10 text-center">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-20">
          {/** Project Cards */}
          {projectData.map((project, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-cyan-500/20 transition-all">
              <h3 className="text-2xl font-semibold mb-3 text-white">
                <a href={project.link} className="underline">{project.title}</a>
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a href={project.github} className="text-cyan-400 hover:text-cyan-300">View Project →</a>
            </div>
          ))}
        </div>
        
        {/** Ongoing Projects Section */}
        <h2 className="text-4xl font-bold text-white mb-10 text-center">Ongoing Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {ongoingProjects.map((project, index) => (
            <div key={index} className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 shadow-lg hover:shadow-blue-500/20 transition-all">
              <h3 className="text-2xl font-semibold mb-3 text-white">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>

        {/** IoT Projects Section */}
        <h2 className="text-4xl font-bold text-white mb-10 text-center">IoT Projects</h2>
        <p className="text-gray-300 text-center mb-6">Under the guidance of Dr. Richa Sharma (Assistant Professor Grade-1 NITJ)</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {iotProjects.map((project, index) => (
            <div key={index} className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 shadow-lg hover:shadow-green-500/20 transition-all">
              <h3 className="text-2xl font-semibold mb-3 text-white">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const projectData = [
  {
    title: "dev.jobs",
    link: "https://devdotjobs.netlify.app/",
    github: "https://github.com/divanshArora3/dev.jobs",
    description: "A job board for developers featuring curated tech job listings with an intuitive interface."
  },
  {
    title: "watpre",
    link: "https://watpre.netlify.app/",
    github: "https://github.com/divanshArora3/Minor_Project",
    description: "IoT project integrating NodeMCU with a web interface for monitoring height, flow status, etc."
  },
  {
    title: "Weather Report System",
    link: "https://divansharora3.github.io/Weather_Report/",
    github: "https://github.com/divanshArora3/Weather_Report",
    description: "Python-based weather app fetching real-time data via OpenWeather API."
  },
  {
    title: "RECORDMATE",
    link: "https://github.com/divanshArora3/RECORDMATE",
    github: "https://github.com/divanshArora3/RECORDMATE",
    description: "AI-powered research project for meeting transcription and cloud-based storage."
  }
];

const ongoingProjects = [
  {
    title: "Voting System",
    description: "Developing a secure voting system for Google Solution Challenge using OpenCV and MERN stack."
  },
  {
    title: "Portfolio",
    description: "Revamping personal portfolio to better highlight technical skills and projects."
  }
];

const iotProjects = [
  {
    title: "Garbage Collector",
    description: "Smart waste management solution."
  },
  {
    title: "Prosthetic Glove",
    description: "Assistive technology for hand mobility."
  },
  {
    title: "Robosoccer",
    description: "Autonomous robot for playing soccer."
  },
  {
    title: "Obstacle Avoiding + Line Following Robot",
    description: "Smart navigation system with dual capabilities."
  }
];
