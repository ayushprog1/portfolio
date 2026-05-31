import React from 'react';
import { FiCalendar, FiBriefcase, FiMapPin } from 'react-icons/fi';

const Timeline = () => {
  const timelineData = [
    {
      year: "Sep 2025 - Nov 2025",
      title: "Full Stack Engineer (Contract)",
      org: "Inkcity",
      location: "Remote",
      description: "Engineered the application with the MERN stack and delivered production-quality uptime, performance, and polish.",
      skills: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      year: "Aug 2023 - May 2027",
      title: "Pre-University Qualification",
      org: "NIT Durgapur",
      location: "Durgapur, West Bengal",
      description: "Focused on scalable software systems, AI integration, and competitive computer science fundamentals.",
      skills: ["Data Structures", "Algorithms", "AI", "Cloud"]
    },
    {
      year: "2021",
      title: "High School Graduate",
      org: "Kendriya Vidyalaya Katihar",
      location: "Katihar, Bihar",
      description: "Solid foundation in core science and mathematics, preparing for competitive engineering studies.",
      skills: ["Physics", "Math", "Computer Science"]
    }
  ];

  return (
    <div className="mt-32 mx-auto w-full max-w-[1200px]" id="experience" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
      <h1 className="text-center text-4xl font-bold mb-16">Experience & Education</h1>

      <div className="relative wrap overflow-hidden p-4 md:p-10 h-full">
        {/* Center Gradient Line */}
        <div className="absolute h-full left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-600 rounded-full z-0"></div>

        {timelineData.map((item, index) => {
          // Alternate sides for desktop
          const isLeft = index % 2 === 0;

          return (
            <div key={index} className={`mb-12 flex justify-between items-center w-full ${isLeft ? 'md:flex-row-reverse' : 'flex-row'} flex-row relative z-10`}>
              
              {/* Empty space for opposite side on desktop */}
              <div className="hidden md:block w-5/12"></div>

              {/* Glowing Center Dot */}
              <div className="flex items-center order-1 bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)] w-4 h-4 rounded-full border-4 border-zinc-900 absolute left-8 md:left-1/2 transform -translate-x-1/2"></div>

              {/* Content Card */}
              <div className="order-1 w-full md:w-5/12 pl-14 md:pl-0">
                <div className="bg-zinc-900 border border-zinc-700/50 rounded-2xl p-6 shadow-xl hover:border-cyan-500/30 transition-colors duration-300">
                  
                  {/* Date */}
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-3 text-sm">
                    <FiCalendar size={16} />
                    <span>{item.year}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-bold text-white text-xl mb-2">{item.title}</h3>
                  
                  {/* Organization & Location */}
                  <div className="flex flex-col gap-1.5 text-zinc-400 text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <FiBriefcase size={15} className="shrink-0" />
                      <span>{item.org}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiMapPin size={15} className="shrink-0" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-zinc-300 text-sm leading-relaxed mb-5">
                    {item.description}
                  </p>
                  
                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, idx) => (
                      <span key={idx} className="bg-zinc-800 text-zinc-300 text-xs px-3 py-1.5 rounded-full border border-zinc-700/50">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;