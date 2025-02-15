import React from 'react';

export default function Projects() {
  return (
    <div className="min-h-screen bg-transparent">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 shadow-lg hover:shadow-cyan-500/20 transition-all">
            <h3 className="text-xl font-semibold mb-2 text-white"> <a href ='https://devdotjobs.netlify.app/'><u>dev.jobs</u> </a></h3>
            <p className="text-gray-300 mb-4">DevDotJobs is a job board web application designed for developers, featuring curated job listings in the tech industry. 
              It provides an intuitive interface for job seekers to find opportunities and for recruiters to post openings. </p>
            <a href ='https://github.com/divanshArora3/dev.jobs' className="text-cyan-400 hover:text-cyan-300">View Project →</a>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 shadow-lg hover:shadow-cyan-500/20 transition-all">
            <h3 className="text-xl font-semibold mb-2 text-white"><a href='https://watpre.netlify.app/' ><u>watpre</u></a></h3>
            <p className="text-gray-300 mb-4">This project integrates a NodeMCU microcontroller with a web interface to monitor and control height ,flow status etc.
               The web application is developed using tools React and Tailwind CSS and is deployed via Netlify.</p>
            <a href="https://github.com/divanshArora3/Minor_Project" className="text-cyan-400 hover:text-cyan-300">View Project →</a>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 shadow-lg hover:shadow-cyan-500/20 transition-all">
            <h3 className="text-xl font-semibold mb-2 text-white"><a href='https://divansharora3.github.io/Weather_Report/'><u>Weather Report System</u></a></h3>
            <p className="text-gray-300 mb-4">Weather_Report is a Python-based weather application that fetches real-time weather data using the OpenWeather API and displays key weather metrics for any specified location. 
              It provides a simple and user-friendly interface to check temperature, humidity, wind speed, and other weather conditions.</p>
            <a href="https://github.com/divanshArora3/Weather_Report" className="text-cyan-400 hover:text-cyan-300">View Project →</a>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 shadow-lg hover:shadow-emerald-500/20 transition-all">
            <h3 className="text-xl font-semibold mb-2 text-white"><a href='https://github.com/divanshArora3/RECORDMATE'>RECORDMATE</a></h3>
            <p className="text-gray-300 mb-4">**A Research-Based Meeting Recording System** <br/> 
            A MERN Stack project that enables real-time recording and transcription of Google Meet sessions. 
            It explores **AI-driven speech recognition, automated summarization, and efficient cloud storage**. The system enhances **meeting accessibility, productivity, and data security**. This research contributes to **NLP, speech-to-text, and secure cloud storage solutions**. </p>
            <a href="https://github.com/divanshArora3/RECORDMATE" className="text-emerald-400 hover:text-emerald-300">View Project →</a>
          </div>

        </div>

{/* ONGOING Projects Section */}
<h2 className="text-3xl font-bold text-white mb-8">OnGoing Projects</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">  {/* Added mb-16 here */}
  <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 shadow-lg hover:shadow-blue-500/20 transition-all">
    <h3 className="text-xl font-semibold mb-2 text-white">Voting System</h3>
    <p className="text-gray-300">Currently developing a Voting System for the Google Solution Challenge, integrating OpenCV for facial recognition,
      Firebase for real-time database management, and the MERN stack for a seamless web experience. The project focuses on ensuring secure, transparent, and efficient voting processes.</p>
  </div>
  <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 shadow-lg hover:shadow-purple-500/20 transition-all">
    <h3 className="text-xl font-semibold mb-2 text-white">Portfolio</h3>
    <p className="text-gray-300">Currently working on my portfolio to better highlight my projects and technical skills. Excited to share it soon!</p>
  </div>
</div>  {/* Closing div for Ongoing Projects section with mb-16 added */}
      
     

        {/* IoT Projects Section */}  
<div>
  <h2 className="text-3xl font-bold text-white mb-8">IoT Projects</h2>
  <p className="text-gray-300 mb-6">Under the guidance of Dr. Richa Sharma (Assistant Professor Grade-1 NITJ)</p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 shadow-lg hover:shadow-blue-500/20 transition-all">
      <h3 className="text-xl font-semibold mb-2 text-white">Garbage Collector</h3>
      <p className="text-gray-300">Smart waste management solution</p>
    </div>
    <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 shadow-lg hover:shadow-purple-500/20 transition-all">
      <h3 className="text-xl font-semibold mb-2 text-white">Prosthetic Glove</h3>
      <p className="text-gray-300">Assistive technology for hand mobility</p>
    </div>
    <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 shadow-lg hover:shadow-cyan-500/20 transition-all">
      <h3 className="text-xl font-semibold mb-2 text-white">Robosoccer</h3>
      <p className="text-gray-300">Autonomous robot for playing soccer</p>
    </div>
    <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 shadow-lg hover:shadow-emerald-500/20 transition-all">
      <h3 className="text-xl font-semibold mb-2 text-white">Obstacle Avoiding + Line Following Robot</h3>
      <p className="text-gray-300">Smart navigation system with dual capabilities</p>
    </div>
  </div>
</div>
      </div>
    </div>
  );
}