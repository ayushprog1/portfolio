import React from 'react';
import { FiAward, FiStar, FiCode, FiGitPullRequest, FiTrendingUp } from 'react-icons/fi';

const Achievements = () => {
  const achievementsData = [
    {
      title: "GATE CSE 2026",
      description: "Qualified with a score of 446.",
      icon: <FiAward size={24} className="text-violet-400" />
    },
    {
      title: "JEE Mains 2023",
      description: "Ranked in the top 4.5% among 1.4 million candidates nationwide.",
      icon: <FiTrendingUp size={24} className="text-violet-400" />
    },
    {
      title: "HackTheRank",
      description: "Top 20 Finalist in the HackTheRank competition.",
      icon: <FiAward size={24} className="text-violet-400" />
    },
    {
      title: "Open Source",
      description: "Merged 7 Pull Requests focused on bug fixes, feature implementation, and code optimization.",
      icon: <FiGitPullRequest size={24} className="text-violet-400" />
    },
    {
      title: "Hacktoberfest",
      description: "Successfully participated in and completed Hacktoberfest.",
      icon: <FiStar size={24} className="text-violet-400" />
    },
    {
      title: "Competitive Programming",
      description: "Solved 200+ problems on LeetCode. 2-Star Coder on CodeChef (Max Rating: 1452).",
      icon: <FiCode size={24} className="text-violet-400" />
    },
  ];

  return (
    <div className="mt-32 mx-auto w-full max-w-[1200px] px-4" id="achievements" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
      <h1 className="text-center text-4xl font-bold mb-16">Achievements</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievementsData.map((item, index) => (
          <div 
            key={index} 
            className="bg-zinc-900 border border-zinc-700/50 rounded-2xl p-6 shadow-xl hover:border-violet-500/50 hover:bg-zinc-800/80 transition-all duration-300 group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-zinc-800 rounded-lg border border-zinc-700/50 group-hover:bg-violet-500/10 group-hover:border-violet-500/30 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="font-bold text-white text-lg">{item.title}</h3>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;