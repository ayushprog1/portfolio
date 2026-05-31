import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import SplitText from "./components/SplitText/SplitText";
import Lanyard from "./components/Lanyard/Lanyard";
import GlassIcons from "./components/GlassIcons/GlassIcons";
import { listTools, listProyek } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal"; // <-- IMPORT MODAL
import Aurora from "./components/Aurora/Aurora";
import AOS from 'aos';
import ChatRoom from "./components/ChatRoom";
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Timeline from "./components/Timeline/Timeline";
import Achievements from "./components/Achievement/Achievement";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { SiCodechef, SiX } from 'react-icons/si';
// ..
AOS.init();

function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null); // null = modal tertutup

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };
  // -------------------------

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload) {
      // Ambil path tanpa hash
      const baseUrl = window.location.origin + "/portofolio/";
      window.location.replace(baseUrl);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10 ">
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <div className="flex items-center gap-3 mb-6 bg bg-zinc-800 w-fit p-4 rounded-2xl">
              <img src="./assets/ayush.png" className="w-10 rounded-md" />
              <q>Adapt to changes</q>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <ShinyText text="Hi I'm Ayush Kumar" disabled={false} speed={3} className='custom-class' />
            </h1>
            <BlurText
              text="Full Stack Engineer with foundation in core Computer Science, qualified GATE CSE 2026. Proficient in the MERN stack,microservices, AWS, and Docker. Student at NIT Durgapur focused on building scalable, AI-enhanced software systems."
              delay={150}
              animateBy="words"
              direction="top"
              className=" mb-6"
            />
            <div className="flex items-center sm:gap-4 gap-2">
              <a
                href="./assets/CV.pdf"
                download="Ayush_Kumar_CV.pdf"
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
              >
                <ShinyText text="Download CV" disabled={false} speed={3} className="custom-class" />
              </a>

              <a href="#project" className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors">
                <ShinyText text="Explore My Projects" disabled={false} speed={3} className="custom-class" />
              </a>
            </div>

          </div>
          <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
            <ProfileCard
              name="Ayush Kumar"
              title="Software Developer & AI Engineer"
              handle="ayushprog"
              status="Online"
              contactText="Contact Me"
              avatarUrl="./assets/ayush1.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked')}
            />
          </div>
        </div>
        {/* tentang */}
        <div className="mt-15 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6" id="about">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-8" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-violet-500/30">
              {/* Kolom kiri */}
              <div className="flex-1 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                  About Me
                </h2>

                <BlurText
                  text="I am a Full Stack Engineer and computer science enthusiast currently studying Biotechnology at NIT Durgapur. My technical expertise centers around the MERN stack, microservices, AWS, and Docker, with a strong focus on building scalable, AI-enhanced software systems. I am deeply invested in competitive programming, regularly tackling data structures and algorithmic challenges on platforms like CodeChef and LeetCode. Recently, I qualified for GATE CSE 2026, reflecting my strong foundation in core computer science principles. Beyond the terminal and my Linux WSL development environment, I maintain a strict routine of calisthenics and bodybuilding, and I express my creativity by painting portraits. Whether I am orchestrating ephemeral Docker containers or designing a seamless user experience, I approach every challenge with dedication and a problem-solving mindset."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
                />

                <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 mb-4 w-full">
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      20<span className="text-violet-500">+</span>
                    </h1>
                    <p>Project Finished</p>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      7<span className="text-violet-500">+</span>
                    </h1>
                    <p>Open Source Contributions</p>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="true">
                    <h1 className="text-3xl md:text-4xl mb-1">
                      3<span className="text-violet-500">+</span>
                    </h1>
                    <p>Domain</p>
                  </div>
                </div>


                <ShinyText
                  text="Working with heart, creating with mind."
                  disabled={false}
                  speed={3}
                  className="text-sm md:text-base text-violet-400"
                />
              </div>
            </div>

            {/* Kolom kanan */}
            <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center ">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>
          </div>

        </div>
        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" >Tools & Technologies</h1>
          <p className="w-2/5 text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">My Profesional Skills</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map((tool) => (
              <div
                key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true"
                className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300"
                />
                <div className="flex flex-col overflow-hidden">
                  <div className="truncate">
                    <ShinyText
                      text={tool.nama}
                      disabled={false}
                      speed={3}
                      className="text-lg font-semibold block"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 truncate">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* tentang */}

        {/* Proyek */}
        <div className="proyek mt-32 py-10" id="project" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"></div>
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Project</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Showcasing a selection of projects that reflect my skills, creativity, and passion for building meaningful digital experiences.</p>
        <div className="proyek-box mt-14" >

          <div style={{ height: 'auto', position: 'relative' }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true" >
            <ChromaGrid
              items={listProyek}
              onItemClick={handleProjectClick} // Kirim fungsi untuk handle klik
              radius={500}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>
        {/* Proyek */}

        <Timeline />

        {/* Linkedin Section */}
        <div className="mt-32 mx-auto w-full max-w-[1600px]" id="linkedin">

          {/* Main Heading */}
          <h1
            className="text-center text-4xl font-bold mb-8"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            LinkedIn
          </h1>

          {/* Clickable Image Container */}
          <a
            href="https://linkedin.com/in/ayush-kumar-819251256"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block hover:scale-[1.02] transition-transform duration-300 shadow-[0_0_30px_rgba(168,85,247,0.4)] rounded-3xl border-[5px] border-violet-500/40 overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <img
              src="./assets/linkedin.png"
              alt="Ayush Kumar LinkedIn Profile"
              className="w-full h-auto object-cover"
            />
          </a>
        </div>

        {/* GitHub Section */}
        <div className="mt-32 mx-auto w-full max-w-[1600px]" id="github">

          {/* Main Heading */}
          <h1
            className="text-center text-4xl font-bold mb-8"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            GitHub
          </h1>

          {/* Clickable Image Container */}
          <a
            href="https://github.com/ayushprog1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block hover:scale-[1.02] transition-transform duration-300 shadow-[0_0_30px_rgba(168,85,247,0.4)] rounded-3xl border-[5px] border-violet-500/40 overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <img
              src="./assets/github.png"
              alt="Ayush Kumar GitHub Profile"
              className="w-full h-auto object-cover"
            />
          </a>
        </div>

        <Achievements />

        {/* Kontak */}
        <div className="kontak mt-32 sm:p-10 p-0" id="contact">
          <h1
            className="text-4xl mb-2 font-bold text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            {/*Contact & Chat*/}Get In Touch
          </h1>
          <p
            className="text-base/loose text-center mb-10 opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            {/*Get in touch with me or chat in real-time*/}Feel free to reach out for collaborations, opportunities, or just a quick hello.
          </p>

          {/* Container dua kolom */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Chat Room di kiri */}
            {/*<div className="flex-1 bg-zinc-800 p-6 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
              <ChatRoom />
            </div>*/}
            {/* Container dua kolom */}
            <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto relative z-10">

              {/* Contact Info & Socials di kiri */}
              <div
                className="flex-1 bg-zinc-900/60 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-white/5 flex flex-col justify-between overflow-hidden relative group"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
                data-aos-once="true"
              >
                {/* Inner subtle glow */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-violet-500/10 blur-3xl rounded-full group-hover:bg-violet-500/20 transition-all duration-700"></div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-8">Contact Details</h2>

                  {/* Email & Phone Cards */}
                  <div className="flex flex-col gap-4">
                    <a href="mailto:ay.ayush.ku@gmail.com" className="flex items-center gap-5 p-4 bg-white/5 hover:bg-white/10 border border-transparent hover:border-violet-500/30 rounded-2xl transition-all duration-300 group/link">
                      <div className="bg-zinc-900 text-violet-400 p-3.5 rounded-xl shadow-inner group-hover/link:scale-110 transition-transform">
                        <FiMail size={22} />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider mb-1">Email Me</p>
                        <p className="text-zinc-200 font-medium truncate">ay.ayush.ku@gmail.com</p>
                      </div>
                    </a>

                    <a href="tel:+919693818060" className="flex items-center gap-5 p-4 bg-white/5 hover:bg-white/10 border border-transparent hover:border-violet-500/30 rounded-2xl transition-all duration-300 group/link">
                      <div className="bg-zinc-900 text-cyan-400 p-3.5 rounded-xl shadow-inner group-hover/link:scale-110 transition-transform">
                        <FiPhone size={22} />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider mb-1">Call Me</p>
                        <p className="text-zinc-200 font-medium">(+91) 9693818060</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="mt-12">
                  <p className="text-sm text-zinc-500 font-semibold uppercase tracking-wider mb-4">Find me on</p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { icon: <FiLinkedin size={20} />, link: "https://linkedin.com/in/ayush-kumar-819251256", color: "hover:text-blue-400 hover:border-blue-400/50" },
                      { icon: <FiGithub size={20} />, link: "https://github.com/ayushprog1", color: "hover:text-white hover:border-white/50" },
                      { icon: <SiCodechef size={20} />, link: "https://www.codechef.com/users/ayushprog1", color: "hover:text-amber-700 hover:border-amber-700/50" },
                      { icon: <SiX size={20} />, link: "https://x.com", color: "hover:text-zinc-300 hover:border-zinc-300/50" },
                      { icon: <FiInstagram size={20} />, link: "https://instagram.com", color: "hover:text-pink-500 hover:border-pink-500/50" }
                    ].map((social, idx) => (
                      <a
                        key={idx}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`bg-zinc-900/80 p-3.5 rounded-xl border border-white/5 text-zinc-400 transition-all duration-300 hover:-translate-y-1 shadow-lg ${social.color}`}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form di kanan */}
            <div className="flex-1">
              <form
                action="https://formsubmit.co/ayush.workproject@gmail.com"
                method="POST"
                className="bg-zinc-800 p-10 w-full rounded-md"
                autoComplete="off"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Full Name</label>
                    <input
                      type="text"
                      name="Name"
                      placeholder="Input Name..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Email</label>
                    <input
                      type="email"
                      name="Email"
                      placeholder="Input Email..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-semibold">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      cols="45"
                      rows="7"
                      placeholder="Message..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full w-full cursor-pointer border border-gray-700 hover:bg-[#222] transition-colors"
                    >
                      <ShinyText text="Send" disabled={false} speed={3} className="custom-class" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Kontak */}
      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  )
}

export default App
