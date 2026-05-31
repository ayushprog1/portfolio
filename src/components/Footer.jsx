import "remixicon/fonts/remixicon.css";
import Dock from "./Dock/Dock";
import { VscHome, VscArchive, VscAccount } from "react-icons/vsc";
import { SiCodechef } from "react-icons/si";
import { FiMail, FiPhone } from "react-icons/fi";

const Footer = () => {
  const items = [
    { icon: <VscHome size={18} />, label: "Home", onClick: () => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscAccount size={18} />, label: "About Me", onClick: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscArchive size={18} />, label: "Project", onClick: () => document.getElementById("project")?.scrollIntoView({ behavior: "smooth" }) },
  ];

  return (
    <div className="mt-32 pb-8 flex flex-col items-center relative z-10">
      {/* Flex container adaptif */}
      <div className="w-full flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-6 mb-6">
        
        {/* Identity & Contact Info */}
        <div className="order-1 md:order-none flex flex-col items-center md:items-start gap-3">
          <h1 className="text-2xl font-bold">
            Ayush Kumar
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-zinc-400 text-sm">
            <a 
              href="mailto:ay.ayush.ku@gmail.com" 
              className="flex items-center gap-2 hover:text-violet-400 transition-colors"
            >
              <FiMail size={16} />
              <span>ay.ayush.ku@gmail.com</span>
            </a>
            <a 
              href="tel:+919693818060" 
              className="flex items-center gap-2 hover:text-violet-400 transition-colors"
            >
              <FiPhone size={16} />
              <span>(+91) 9693818060</span>
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 order-2 md:order-none">
          <a href="https://github.com/ayush-kumar" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors">
            <i className="ri-github-fill ri-2x"></i>
          </a>
          <a href="https://linkedin.com/in/ayush-kumar" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors">
            <i className="ri-linkedin-fill ri-2x"></i>
          </a>
          <a href="https://www.codechef.com/users/ayushprog1" target="_blank" rel="noopener noreferrer" className="mt-1 hover:text-violet-400 transition-colors">
            <SiCodechef size={28} />
          </a>
        </div>

        {/* Dock */}
        <div className="order-3 md:order-none mt-6 md:mt-0 md:mb-0">
          <Dock 
            items={items}
            panelHeight={30}
            baseItemSize={60}
            magnification={100}
          />
        </div>

      </div>
    </div>
  );
};

export default Footer;  