import React, { useState } from "react";
import GlitchText from "@/components/GlitchText";
import pic1 from "../assets/chinaTaste.png";
import pic2 from "../assets/Daniel.png";
import pic3 from "../assets/freshCart.png";
import pic4 from "../assets/todolist.png"
import { Code } from "lucide-react";


const projects = [
  {
    image:pic1,
    title: "China Taste",
    description: "A modern restaurant website with food categories, search, filtering and interactive features.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "React Router"],
    liveLink: "https://chinatasttt-restaurant.vercel.app/",
    githubLink: "https://github.com/mernaamr146-hue/chinatasttt-restaurant.git",
  },
  {
    image:pic3,
    title: "Fresh Cart",
    description: "A modern e-commerce application with authentication, shopping cart and wishlist.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    liveLink: "https://freshcart12ecommerce.vercel.app/",
    githubLink: "https://github.com/mernaamr146-hue/freshcart12ecommerce.git",
  },
  {image:pic2,
    title: "Daniel's Portfolio",
    description: "A personal portfolio built with HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://danieels.vercel.app/",
    githubLink: "https://github.com/mernaamr146-hue/danieels.git",
  },
  {image:pic4,
    title: "To-Do List App",
    description: "A simple task management app built with React and Tailwind CSS.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    liveLink: "https://to-dolist-pink.vercel.app/",
    githubLink: "https://github.com/mernaamr146-hue/to-dolist.git",
  },

  
];
export default function Projects() {
  const [isOn, setIsOn] = useState(false);
  const [isPulling, setIsPulling] = useState(false);

  const handlePullStart = (e) => {
    e.preventDefault();
    setIsPulling(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePullEnd = () => {
    if (isPulling) {
      setIsOn((prev) => !prev);
      setIsPulling(false);
    }
  };

  return (
    <section id="work"
  className={`lamp-section relative min-h-[100dvh] overflow-hidden flex flex-col items-center text-white ${
    isOn ? "lamp-on" : "lamp-off"
  }`}
 style={{
  background:isOn?"#1a1a1a":"#000000"
,  // backgroundImage: `linear-gradient(
  //   rgba(0, 0, 0, ${isOn ? 0.7 : 1}),
  //   rgba(0, 0, 0, ${isOn ? 0.7 : 1})
  // ), url(${pic5})`,
  // backgroundSize: "cover",
  // backgroundPosition: "center",
  // backgroundRepeat: "no-repeat",
}}
>
      {/* Lamp */}
      <div className="lamp-wrapper relative z-20">
        <svg viewBox="0 0 200 180" className="lamp-svg" fill="none">
          <defs>
            <linearGradient id="shade" x1="100" y1="0" x2="100" y2="100">
              <stop stopColor="#4b071b" />
              <stop offset="1" stopColor="#16030b" />
            </linearGradient>
          </defs>

          {/* Lamp Shade */}
          <path
            d="M40 75 Q42 8 100 8 Q158 8 160 75 Z"
            fill="url(#shade)"
            stroke="#783044"
            strokeWidth="1.5"
          />

          {/* Lamp Bottom */}
          <ellipse
            cx="100"
            cy="75"
            rx="60"
            ry="7"
            fill={isOn ? "#ffe7a0" : "#38202a"}
          />

          {/* Light Inside */}
          <ellipse
            cx="100"
            cy="75"
            rx="54"
            ry="4"
            fill="#ffdc83"
            opacity={isOn ? 1 : 0.15}
          />

          {/* Hanging Chain */}
          <g className={isPulling ? "chain-pulled" : "chain-swing"}>
            <path
              d="M135 75 Q137 90 135 105 Q133 120 135 135 L135 150"
              stroke="#d5a74d"
              strokeWidth="2"
              fill="none"
            />

            {Array.from({ length: 7 }).map((_, i) => (
              <ellipse
                key={i}
                cx="135"
                cy={87 + i * 9}
                rx="2.2"
                ry="4"
                fill="none"
                stroke="#f2cc78"
                strokeWidth="1.5"
              />
            ))}

            <circle
              cx="135"
              cy="150"
              r="5"
              fill="#e6b95f"
              stroke="#fff0b0"
              strokeWidth="1.5"
            />
          </g>
        </svg>

        {/* Draggable Pull Chain */}
        <button
          aria-label="Pull lamp chain"
          className={`chain-button ${isPulling ? "pulling" : ""}`}
          onPointerDown={handlePullStart}
          onPointerUp={handlePullEnd}
          onPointerCancel={() => setIsPulling(false)}
        >
          <span />
        </button>
      </div>
     


{/* Pull hint */}
    {!isOn && (
      <p className="pull-hint">
        ↓ Swipe down
      </p>
      
    )}
      {/* Intro Text */}
{!isOn && (
  <p className="intro-text pt-3">
    Turning ideas into reality .
  </p>
)}


      {/* Spotlight */}
      <div className="spotlight" />

      {/* Projects */}
      <div
        className={`projects-container ${
          isOn ? "show-projects" : ""
        }`}
      >
        {/* Title */}
        <div className="title-wrapper">
          <div className="title-inner">
            <GlitchText
              mode="slices"
              trigger="always"
              speed={2.3}
              intensity={0.25}
              burstDuration={0.6}
              offset={4}
              skew={0}
              flicker={false}
              fontWeight={900}
              enableShadows
              shadowColors={["#ff0000", "#00ffff"]}
              className="custom-class"
            >
              &lt;/Projects&gt;
            </GlitchText>
          </div>

        </div>

        {/* Project Cards */}
       <div
  className={`grid w-full grid-cols-1 justify-items-center gap-8 px-5 py-10 md:grid-cols-2 xl:grid-cols-3 transition-all duration-700 ${
    isOn
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10 pointer-events-none"
  }`}
>
  
  {projects.map((project, index) => (
    <div
      key={index}
      className="group w-full max-w-[380px] overflow-hidden rounded-2xl border border-white/10 bg-[#111]/90 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.12)]"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="mb-2 text-xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mb-5 text-sm leading-6 text-gray-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-lg bg-white px-3 py-2.5 text-center text-sm font-semibold text-black transition hover:bg-gray-300"
          >
            Live Preview ↗
          </a>

          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="flex gap-0.5 rounded-lg border border-white/20 px-3 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-white hover:text-black"
          >
            Source Code <Code />
          </a>
        </div>
      </div>
    </div>
  ))}
</div>
      </div>

      <style>{`
        .lamp-section {
          background: #000000;
          transition: background 0.8s ease;
          padding-top: 35px;
        }

        .lamp-wrapper {
          width: 200px;
          height: 180px;
          flex-shrink: 0;
        }

        .lamp-svg {
          width: 100%;
          height: 100%;
          overflow: visible;
          filter: drop-shadow(
            0 0 15px rgba(255,190,90,.15)
          );
        }

        /* Chain Button */
        .chain-button {
          position: absolute;
          width: 35px;
          height: 105px;
          top: 65px;
          left: 118px;
          cursor: grab;
          background: transparent;
          border: none;
          z-index: 30;
          touch-action: none;
          padding: 0;
        }

        .chain-button:active {
          cursor: grabbing;
        }

        .chain-button span {
          position: absolute;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          bottom: 0;
          left: 10px;
          background: radial-gradient(
            circle at 30% 30%,
            #fff5c5,
            #d69a37 60%,
            #71410d
          );
          border: 1px solid #ffe6a0;
          box-shadow: 0 0 12px #e8b957;
          transition: transform .2s ease;
        }

        .chain-button.pulling span {
          transform: translateY(18px);
        }

        /* Chain Swing Animation */
        .chain-swing {
          transform-origin: 135px 75px;
          animation: chainSwing 2s ease-in-out infinite;
        }

        .chain-pulled {
          transform-origin: 135px 75px;
          transform: translateY(12px);
        }
          .pull-hint {
    position: relative;
    z-index: 20;
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    letter-spacing: 2px;
    text-align: center;
    margin-top: -5px;
    animation: hintMove 1.5s ease-in-out infinite;
  }

  @keyframes hintMove {
    0%, 100% {
      transform: translateY(0);
      opacity: 0.6;
    }

    50% {
      transform: translateY(8px);
      opacity: 1;
    }
  }

        @keyframes chainSwing {
          0%, 100% {
            transform: rotate(0deg);
          }

          25% {
            transform: rotate(2deg);
          }

          75% {
            transform: rotate(-2deg);
          }
        }

        /* Spotlight */
        .spotlight {
          position: absolute;
          top: 130px;
          left: 50%;
          transform: translateX(-50%);
          width: min(850px, 120vw);
          height: 750px;
          background: linear-gradient(
            to bottom,
            rgba(255,255,255,0.35),
            rgba(255,255,255,.12) 45%,
            transparent 85%
          );
          clip-path: polygon(
            42% 0,
            58% 0,
            100% 100%,
            0 100%
          );
          filter: blur(20px);
          opacity: 0;
          transition: opacity 1s ease;
          pointer-events: none;
          z-index: 1;
        }

        .lamp-on .spotlight {
          opacity: 1;
        }

        .lamp-on {
          background: gray;
        }

        /* Projects */
        .projects-container {
          position: relative;
          z-index: 5;
          isolation: isolate;
          width: 100%;
          padding: 45px 0 80px;
          opacity: 0;
          transform: translateY(35px);
          visibility: hidden;
          transition:
            opacity .8s ease,
            transform .8s ease,
            visibility .8s;
        }

        .show-projects {
          opacity: 1;
          transform: translateY(0);
          visibility: visible;
        }

        /* Title Alignment */
        .title-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          margin-bottom: 32px;
          position: relative;
        }

        .title-inner {
          width: fit-content;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          white-space: nowrap;
        }

        /* Project Cards */
        .project-card {
          display: block;
          padding: 28px;
          border: 1px solid rgba(255,202,120,.3);
          border-radius: 18px;
          background: rgba(35,8,17,.65);
          backdrop-filter: blur(12px);
          transition: .35s ease;
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: #e9b85f;
          box-shadow: 0 0 30px rgba(255,190,90,.2);
        }

        @media (max-width: 640px) {
          .lamp-wrapper {
            transform: scale(.85);
            transform-origin: top center;
            margin-bottom: -25px;
          }

          .projects-container {
            padding-top: 30px;
          }
        }
      `}</style>
    </section>
  );
}